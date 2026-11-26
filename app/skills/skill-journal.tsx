"use client";
import { useState } from "react";
import { ArticleLearning } from "../../components/workspace-learning";
import { getArticle } from "../../lib/knowledge";

export function SkillJournal({ concepts }: { concepts: string[] }) {
  const [selected, setSelected] = useState(concepts[0]);
  return <><label className="mb-4 block max-w-lg text-sm font-semibold">Concept to practice<select className="input mt-2" value={selected} onChange={event => setSelected(event.target.value)}>{concepts.map(id => <option key={id} value={id}>{getArticle(id)?.title ?? id}</option>)}</select></label><p className="muted mb-3 text-sm">This journal updates the selected canonical concept everywhere it appears. It does not mark the other topics in this skill learned or change your article reading position.</p><ArticleLearning key={selected} id={selected} trackReading={false} /></>;
}
