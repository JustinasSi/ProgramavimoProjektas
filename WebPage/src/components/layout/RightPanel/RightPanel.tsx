import React from "react";

export interface RightPanelProps {
  title?: string;
  sources?: { id: string; name: string; href?: string }[];
}

export default function RightPanel({ title = "Sources", sources = [] }: RightPanelProps) {
  return (
    <section aria-labelledby="sources-title" className="panel" style={{ marginTop: 16 }}>
      <h2 id="sources-title" style={{ marginBottom: 12 }}>{title}</h2>
      {sources.length === 0 ? (
        <p className="lead">No sources available.</p>
      ) : (
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {sources.map(s => (
            <li key={s.id} style={{ marginBottom: 8 }}>
              {s.href ? <a href={s.href}>{s.name}</a> : s.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}