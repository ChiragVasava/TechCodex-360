import Link from "next/link";
import { getArticle } from "../../lib/knowledge";

export function ConceptLinks({ ids }: { ids: string[] }) {
  return <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">{ids.map(id => {
    const article = getArticle(id);
    return <li key={id}>{article ? <Link className="text-cyan-700 underline underline-offset-4 dark:text-cyan-300" href={`/knowledge/${article.slug}`}>{article.title}</Link> : <span className="muted">{id.replaceAll("-", " ")} · not yet documented</span>}</li>;
  })}</ul>;
}
