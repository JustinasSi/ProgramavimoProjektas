import React from "react";


export interface HeaderProps {
  title?: string;                       // fallback if no logo
  logo?: { src: string; alt: string };  // pass your image here
  onToggleSidebar?: () => void;
  onToggleTheme?: () => void;
  theme?: "light" | "dark";
}



export default function Header({
  title = "Main Page",
  logo,
  onToggleSidebar,
  onToggleTheme,
  theme = "light"
}: HeaderProps) {
  return (
    <>
      {/* The toggle button is now fixed – lives outside the flow */}
      <button
        type="button"
        className="btn sidebar"
        aria-label="Toggle sidebar"
        onClick={onToggleSidebar}
        title="Toggle sidebar"
        style={{
          position: "fixed",
          left: "16px",               // or var(--sp-4) – touches near edge but safe padding
        }}
      >
        ☰
      </button>

      {/* Header content – add left padding so logo/title doesn't overlap button */}
      <div 
        style={{
          paddingLeft: "64px",          // ← space for the fixed button (~44px + 20px gap)
        }}
      >
        <div className="cluster">
          {logo ? (
            <a href="/" aria-label="Home">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: 62,
                  width: "auto",
                  display: "block",
                  borderRadius: 8,
                }}
              />
            </a>
          ) : (
            <h1>{title}</h1>
          )}
        </div>
    </div>
        
    </>
  );
}
