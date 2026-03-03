import React from "react";

export default function Footer() {
  return (
    <div className="cluster" style={{ justifyContent: "space-between" }}>
      <small>© {new Date().getFullYear()} Example App</small>
      <span className="pill">v1.0</span>
    </div>
  );
}