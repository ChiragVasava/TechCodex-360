require("./load-typescript.cjs");
const fs = require("node:fs");
const path = require("node:path");
const { articles, relationships, sources } = require("../content/catalog.json");
const { taxonomy } = require("../content/taxonomy.ts");
const { relationshipTypes, levels } = require("../lib/knowledge-types.ts");
const { roles, skillProfiles } = require("../content/careers.ts");
const research = require("../content/research-index.json");
const materials = require("../content/study-index.json");
function validateContent() {
  const errors=[]; const check=(ok,message)=>{if(!ok)errors.push(message);};
  const ids=new Set(articles.map(a=>a.id)), domainIds=new Set(taxonomy.map(d=>d.id)), sourceIds=new Set(sources.map(s=>s.id));
  const normalize=s=>s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g," ").trim();
  check(ids.size===articles.length,"Duplicate article IDs");check(sourceIds.size===sources.length,"Duplicate source IDs");
  const aliases=new Map();
  for(const a of articles){
    check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.id)&&a.id===a.slug,`${a.id}: invalid canonical ID or slug`);
    check(levels.includes(a.level),`${a.id}: invalid level`);check(a.domains.length>0,`${a.id}: no domains`);
    for(const id of a.domains)check(domainIds.has(id),`${a.id}: unknown domain ${id}`);
    for(const id of a.sources)check(sourceIds.has(id),`${a.id}: unknown source ${id}`);
    check(a.sources.length>0,`${a.id}: source review candidates required`);
    for(const term of [a.id,a.title,...a.aliases]){const n=normalize(term);check(!aliases.has(n)||aliases.get(n)===a.id,`${a.id}: ambiguous alias ${term}`);aliases.set(n,a.id);}
    for(const r of a.research)check(Number.isInteger(r.start)&&Number.isInteger(r.end)&&r.start>=1&&r.end>=r.start&&r.end<=research.lineCount,`${a.id}: invalid provenance range`);
    for(const r of a.materialRanges??[])check(Number.isInteger(r.start)&&Number.isInteger(r.end)&&r.start>=1&&r.end>=r.start&&r.end<=(materials.documents.find(d=>d.id===r.document)?.lineCount??0),`${a.id}: invalid study source range`);
    check(["Verified","Needs review","Outdated","Conflicting sources","Incomplete","Personal notes"].includes(a.verification.status),`${a.id}: invalid verification status`);
    if(a.verification.status==="Verified")check(/^\d{4}-\d{2}-\d{2}$/.test(a.verification.lastVerified??""),`${a.id}: verified article needs date`);
    const filename=path.join(__dirname,"../content/articles",a.id+".md");
    if(!fs.existsSync(filename)){errors.push(`${a.id}: missing Markdown`);continue;}
    const body=fs.readFileSync(filename,"utf8");check(body.split(/\s+/).length>=120,`${a.id}: article too short for the authoring standard`);
    for(const link of body.matchAll(/\]\(\/knowledge\/([^\s)#]+)(?:#[^\s)]*)?\)/g))check(ids.has(link[1]),`${a.id}: broken article link ${link[1]}`);
    check(relationships.some(r=>r.source===a.id||r.target===a.id),`${a.id}: isolated concept`);
  }
  const filenames=fs.readdirSync(path.join(__dirname,"../content/articles")).filter(f=>f.endsWith(".md"));
  for(const f of filenames)check(ids.has(f.slice(0,-3)),`Unindexed article ${f}`);
  const edgeKeys=new Set();
  for(const e of relationships){check(ids.has(e.source)&&ids.has(e.target),`Dangling relationship ${e.source} ${e.target}`);check(e.source!==e.target,`Self relationship ${e.source}`);check(relationshipTypes.includes(e.type),`Unknown relationship ${e.type}`);check(typeof e.reason==="string"&&e.reason.length>20,`Missing relationship rationale ${e.source}`);const key=[e.source,e.type,e.target].join(":");check(!edgeKeys.has(key),`Duplicate relationship ${key}`);edgeKeys.add(key);}
  const adjacency=new Map(articles.map(a=>[a.id,[]]));
  for(const e of relationships){if(e.type==="prerequisite_of")adjacency.get(e.source)?.push(e.target);if(["depends_on","requires"].includes(e.type))adjacency.get(e.target)?.push(e.source);}
  const active=new Set(),done=new Set();function visit(id){if(active.has(id)){errors.push(`Prerequisite cycle at ${id}`);return;}if(done.has(id))return;active.add(id);for(const next of adjacency.get(id)??[])visit(next);active.delete(id);done.add(id);}for(const id of ids)visit(id);
  for(const source of sources){if(!materials.documents.some(d=>source.url===`/research?document=${d.id}`)){try{check(new URL(source.url).protocol==="https:",`Non-HTTPS source ${source.id}`);}catch{errors.push(`Invalid source URL ${source.id}`);}}check(source.claims.length>0,`No source claim scope ${source.id}`);}
  for(const domain of taxonomy)for(const id of domain.related)check(domainIds.has(id),`Unknown related domain ${id}`);
  for(const item of [...roles,...skillProfiles])for(const id of item.concepts)check(ids.has(id),`${item.id}: missing concept ${id}`);
  return errors;
}
module.exports={validateContent};
if(require.main===module){const errors=validateContent();if(errors.length){console.error(errors.join("\n"));process.exitCode=1;}else console.log(`Content valid: ${articles.length} articles, ${relationships.length} relationships, ${sources.length} sources, ${taxonomy.length} domains.`);}
