import catalog from "../content/catalog.json";
import type { Article, Catalog } from "./knowledge-types";
export { levels, relationshipTypes } from "./knowledge-types";
export type { Article, Relationship, Source, Level } from "./knowledge-types";
const data = catalog as Catalog;
export const articles = data.articles;
export const relationships = data.relationships;
export const sources = data.sources;
export const normalize = (text: string) => text.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();
export function getArticle(id: string): Article | undefined { return articles.find(a => a.id === id); }
export function resolveConcept(text: string): Article | undefined { const term = normalize(text); return articles.find(a => [a.id, a.title, ...a.aliases].some(alias => normalize(alias) === term)); }
export function getRelated(id: string) { return relationships.filter(r => r.source === id || r.target === id).map(r => ({ ...r, direction: r.source === id ? "outgoing" : "incoming", article: getArticle(r.source === id ? r.target : r.source)! })).filter(r => r.article); }
export function getPrerequisites(id: string) { return getRelated(id).filter(r => (r.type === "prerequisite_of" && r.target === id) || (["depends_on", "requires"].includes(r.type) && r.source === id)); }
export function getNextTopics(id: string) { return getRelated(id).filter(r => (r.type === "prerequisite_of" && r.source === id) || (["depends_on", "requires"].includes(r.type) && r.target === id)); }
export const relationshipLabel = (type: string) => type.replaceAll("_", " ");
