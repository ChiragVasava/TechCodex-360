"use client";
export default function ErrorPage({reset}:{reset:()=>void}) { return <div className="empty-state"><h1 className="section-title">This page could not load.</h1><p className="muted my-3">Try again. If the problem continues, check the development server output.</p><button className="btn" onClick={reset}>Try again</button></div>; }
