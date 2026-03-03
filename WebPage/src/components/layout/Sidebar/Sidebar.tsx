import React from "react";

export interface SidebarProps {
  title?: string;
  items?: { id: string; label: string }[];
}

export default function Sidebar({ title = "History", items = [] }: SidebarProps) {
  return (
    <aside className="list-card" aria-label="Sidebar">
      <h3>{title}</h3>
      <div>
        {items.length === 0 ? (
          <p className="lead">No items yet</p>
        ) : (
          items.map(i => (
            <div className="item-row" key={i.id}>
              <span className="dot" aria-hidden="true" />
              <a href={`#${i.id}`}>{i.label}</a>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}