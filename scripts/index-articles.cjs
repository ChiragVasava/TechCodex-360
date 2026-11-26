const fs=require("node:fs");const path=require("node:path");
const catalog=require("../content/catalog.json");
const index=Object.fromEntries(catalog.articles.map(article=>[article.id,fs.readFileSync(path.join(__dirname,"../content/articles",article.id+".md"),"utf8").replace(/```[\s\S]*?```/g," ").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/[#*`_]/g," ").replace(/\s+/g," ").trim()]));
const output=JSON.stringify(index,null,2)+"\n";const target=path.join(__dirname,"../content/article-search.json");
if(process.argv.includes("--check")){let current;try{current=JSON.parse(fs.readFileSync(target,"utf8"));}catch{}if(JSON.stringify(current)!==JSON.stringify(index)){console.error("Article search index is stale. Run npm run content:index.");process.exitCode=1;}else console.log("Article search index is current.");}else{fs.writeFileSync(target,output);console.log(`Indexed ${catalog.articles.length} article bodies.`);}
