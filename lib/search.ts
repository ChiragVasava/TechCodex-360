import { articles, relationships, sources, normalize } from "./knowledge";
import { taxonomy } from "../content/taxonomy";
import { roles, skillProfiles } from "../content/careers";
import { software, devices, logs } from "../content/data";
export type SearchItem={id:string;title:string;type:string;href:string;summary:string;terms:string[];domains:string[];relatedIds?:string[]};
export const searchIndex:SearchItem[]=[
 ...articles.map(a=>({id:a.id,title:a.title,type:"Article",href:`/knowledge/${a.id}`,summary:a.summary,terms:a.aliases,domains:a.domains})),
 ...taxonomy.flatMap(d=>[{id:`domain-${d.id}`,title:d.title,type:"Domain",href:`/domains/${d.id}`,summary:d.description,terms:[],domains:[d.id]},...d.disciplines.map(b=>({id:`branch-${d.id}-${normalize(b.title)}`,title:b.title,type:"Discipline",href:`/domains/${d.id}`,summary:b.topics.join(" · "),terms:b.topics,domains:[d.id]}))]),
 ...roles.map(r=>({id:`role-${r.id}`,title:r.title,type:"Role",href:`/roles/${r.id}`,summary:r.summary,terms:r.alternativeTitles,domains:r.domains,relatedIds:r.concepts})),
 ...skillProfiles.map(s=>({id:`skill-${s.id}`,title:s.title,type:"Skill",href:`/skills/${s.id}`,summary:s.summary,terms:[],domains:s.domains,relatedIds:s.concepts})),
 ...sources.map(s=>({id:`source-${s.id}`,title:s.title,type:"Reference",href:`/references#${s.id}`,summary:s.publisher+" · "+s.claims.join(" "),terms:[s.type],domains:[]})),
 ...software.map((s,i)=>({id:`tool-${i}`,title:s.name,type:"Tool",href:"/software",summary:s.use,terms:[s.category,s.notes],domains:[]})),
 ...devices.map((s,i)=>({id:`device-${i}`,title:s.name,type:"Legacy inventory",href:"/iot#legacy",summary:s.specs,terms:[s.type,s.notes],domains:[]})),
 ...logs.map((s,i)=>({id:`log-${i}`,title:s.issue,type:"Legacy issue",href:"/logs#legacy",summary:s.solution,terms:[s.device,s.category,s.cause],domains:[]})),
];
export function searchCodex(query:string,index:SearchItem[]=searchIndex){
 const q=normalize(query);if(!q)return [];
 const scored=index.map(item=>{const terms=[item.title,...item.terms].map(normalize);const score=terms.includes(q)?100:terms.some(t=>t.startsWith(q))?70:terms.some(t=>t.includes(q))?50:normalize(item.summary).includes(q)?25:0;return{...item,score,reason:score===100?"Exact title or synonym":score?"Text match":"Related concept"};});
 const direct=scored.filter(s=>s.score>=50);const seedIds=new Set(direct.flatMap(s=>[s.id,...(s.relatedIds??[])]));
 const relatedIds=new Set(relationships.flatMap(r=>seedIds.has(r.source)?[r.target]:seedIds.has(r.target)?[r.source]:[]));
 return scored.map(s=>s.score?s:relatedIds.has(s.id)||seedIds.has(s.id)?{...s,score:10,reason:"Connected to a matching concept or role"}:s).filter(s=>s.score>0).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title));
}
