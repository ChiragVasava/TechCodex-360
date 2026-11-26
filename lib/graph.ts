import type { Relationship } from "./knowledge-types";
export function shortestPath(start: string, end: string, edges: Relationship[], allowed: Set<string>): string[] {
  if (!allowed.has(start) || !allowed.has(end)) return [];
  const queue: string[][] = [[start]]; const visited = new Set([start]);
  for (let cursor=0; cursor<queue.length; cursor++) { const path=queue[cursor]; const node=path[path.length-1]; if(node===end)return path;
    for(const edge of edges) { const next=edge.source===node?edge.target:edge.target===node?edge.source:null; if(next&&allowed.has(next)&&!visited.has(next)){visited.add(next);queue.push([...path,next]);} }
  } return [];
}
export function neighborhood(center: string, edges: Relationship[], allowed: Set<string>, depth: number, limit: number): string[] {
  const selected=[center]; const seen=new Set(selected); let frontier=[center];
  for(let i=0;i<depth;i++){const next:string[]=[];for(const id of frontier)for(const e of edges){const other=e.source===id?e.target:e.target===id?e.source:null;if(other&&allowed.has(other)&&!seen.has(other)){seen.add(other);next.push(other);selected.push(other);}}frontier=next;}
  return selected.slice(0,limit);
}
