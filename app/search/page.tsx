import { SearchPage } from "../../components/search";
export const metadata={title:"Search · TechCodex 360"};
export default async function Page({searchParams}:{searchParams:Promise<{q?:string}>}){return <div className="page-width"><p className="eyebrow">Follow your curiosity</p><h1 className="page-title">Search the codex</h1><p className="page-intro">Find canonical concepts, their synonyms, roles, disciplines, references, and your personal records.</p><SearchPage initialQuery={(await searchParams).q}/></div>;}
