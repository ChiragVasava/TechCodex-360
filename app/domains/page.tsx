import { DomainTree } from "../../components/domain-tree";
export const metadata = { title: "Explore domains · TechCodex 360" };
export default function DomainsPage() { return <div className="page-width"><p className="eyebrow">The engineering atlas</p><h1 className="page-title">Explore domains</h1><p className="page-intro">Start with an area, unfold its disciplines, and follow the connections. A concept can belong to several domains without duplicating its article.</p><DomainTree /></div>; }
