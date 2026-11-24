import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeft } from "lucide-react";
import { domains } from "../../../content/domains";

export function generateStaticParams() {
  return domains.map((domain) => ({ slug: domain.slug }));
}

export default async function DomainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = domains.find((item) => item.slug === slug);
  if (!domain) notFound();
  let markdown = `# ${domain.title}\n\n${domain.description}\n\n## Starter notes\n\nUse this guide as a starting point for your personal notes and project references.`;
  try {
    markdown = await fs.readFile(path.join(process.cwd(), "content", "domains", `${slug}.md`), "utf8");
  } catch {}
  return <article className="card mx-auto max-w-4xl p-6 md:p-10"><Link href="/domains" className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400"><ArrowLeft size={16}/>All domains</Link><div className="markdown"><ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{markdown}</ReactMarkdown></div></article>;
}
