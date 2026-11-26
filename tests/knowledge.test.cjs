require("../scripts/load-typescript.cjs");
const test=require("node:test");const assert=require("node:assert/strict");
const {validateContent}=require("../scripts/validate-content.cjs");
const {searchCodex}=require("../lib/search.ts");
const {getPrerequisites,getNextTopics,resolveConcept}=require("../lib/knowledge.ts");
const {shortestPath,neighborhood}=require("../lib/graph.ts");
test("related terminology remains searchable without pretending to be an equivalent concept",()=>{
  for(const name of ["libuv","TCP/IP","ELT","HID report","stack trace","SDLC","Monitoring"]) assert.equal(resolveConcept(name),undefined,name);
  assert.ok(searchCodex("libuv").some(r=>r.id==="nodejs"));
  assert.ok(searchCodex("HID report").some(r=>r.id==="usb-hid"));
});
const {tableOfContents,getMentions,mentionsConcept}=require("../lib/article-content.ts");
test("backlinks resolve aliases and section links without indexing code examples",()=>{
  assert.ok(mentionsConcept("See [[HID]] and [USB](/knowledge/usb#transfers)","usb-hid"));
  assert.ok(mentionsConcept("[USB](/knowledge/usb#transfers)","usb"));
  assert.equal(mentionsConcept("```md\r\n[[HID]]\r\n```\r\n`[[HID]]`","usb-hid"),false);
});
test("article contents handle Windows line endings, fenced code and repeated headings",()=>{
  const body="## Overview\r\n```text\r\n## Not a heading\r\n```\r\n### Details\r\n## Overview\r\n";
  assert.deepEqual(tableOfContents(body).map(h=>h.id),["overview","details","overview-1"]);
});
test("backlinks include articles that explicitly mention the canonical concept",async()=>assert.ok((await getMentions("usb")).some(a=>a.id==="usb-hid")));
test("the published corpus has valid canonical identities, provenance, links and relationships",()=>assert.deepEqual(validateContent(),[]));
test("synonyms rank canonical concepts before connected results",()=>{assert.equal(searchCodex("HID")[0].id,"usb-hid");assert.equal(searchCodex("SRE")[0].id,"role-site-reliability-engineer");assert.ok(searchCodex("HID").some(r=>r.id==="usb"));assert.equal(resolveConcept("I²C").id,"i2c");assert.deepEqual(searchCodex("   "),[]);});
test("prerequisite navigation respects relationship direction",()=>{assert.ok(getPrerequisites("dns").some(r=>r.article.id==="ip-address"));assert.ok(getNextTopics("ip-address").some(r=>r.article.id==="dns"));assert.ok(!getPrerequisites("ip-address").some(r=>r.article.id==="dns"));});
test("graph neighborhoods are bounded and path discovery respects filtering",()=>{const edges=[{source:"a",target:"b"},{source:"b",target:"c"},{source:"a",target:"d"},{source:"d",target:"c"}];const all=new Set(["a","b","c","d"]);assert.deepEqual(shortestPath("a","c",edges,all),["a","b","c"]);assert.deepEqual(shortestPath("a","c",edges,new Set(["a","c"])),[]);assert.equal(neighborhood("a",edges,all,2,2).length,2);assert.deepEqual(shortestPath("a","a",edges,all),["a"]);});
