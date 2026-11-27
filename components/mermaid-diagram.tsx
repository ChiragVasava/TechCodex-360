"use client";
import { useEffect, useId, useRef, useState } from "react";
let queue: Promise<unknown> = Promise.resolve();
export function MermaidDiagram({source}:{source:string}) {
  const id=useId().replace(/[^a-zA-Z0-9]/g, ""); const host=useRef<HTMLDivElement>(null); const [error,setError]=useState(""); const [ready,setReady]=useState(false);
  useEffect(()=>{
    let active=true;
    const observer=new IntersectionObserver(entries=>{if(!entries.some(entry=>entry.isIntersecting))return;observer.disconnect();
      queue=queue.catch(()=>{}).then(async()=>{if(!active)return;try{const mermaid=(await import("mermaid")).default;mermaid.initialize({startOnLoad:false,securityLevel:"strict",theme:"neutral",flowchart:{htmlLabels:false},suppressErrorRendering:true});const result=await mermaid.render(`diagram${id}`,source);if(active&&host.current){host.current.innerHTML=result.svg;setReady(true);}}catch{if(active)setError("This diagram could not be rendered. Its source is preserved below.");}});
    },{rootMargin:"200px"});if(host.current)observer.observe(host.current);return()=>{active=false;observer.disconnect();};
  },[source,id]);
  return <figure className="lesson-diagram"><figcaption>Process diagram</figcaption><div ref={host} className="diagram-canvas" role="img" aria-label="Process diagram; text description is available in diagram source"/>{!ready&&!error&&<p className="muted text-sm" role="status">Loading diagram…</p>}{error&&<p role="status">{error}</p>}<details><summary>Diagram source and text description</summary><pre><code>{source}</code></pre></details></figure>;
}
