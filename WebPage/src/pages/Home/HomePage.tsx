import React, { useState } from "react";
import PageLayout from "../../components/layout/PageLayout/PageLayout";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import { TopNav } from "../../components/layout/TopNav/TopNav";
import RightPanel from "../../components/layout/RightPanel/RightPanel";
import Footer from "../../components/layout/Footer/Footer";
import logoSrc from "../../assets/logo.png";


export interface HomePageProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const sidebarItems = [
  { id: "chat-1", label: "Admission question" },
  { id: "chat-2", label: "Dormitory prices" },
  { id: "chat-3", label: "Exam retake rules" }
];

const sources = [
  { id: "s1", name: "KTU Regulations PDF", href: "#" },
  { id: "s2", name: "Scholarships 2025 Page", href: "#" },
  { id: "s3", name: "Dormitory Handbook", href: "#" }
];


export default function HomePage({ theme, onToggleTheme }: HomePageProps) {
  return (
    <PageLayout
      header={
        <Header
          // title="askKTU"           ⟵ remove/ignore the text title
          logo={{ src: logoSrc, alt: "askKTU logo" }}
          onToggleTheme={onToggleTheme}
          theme={theme}
        />
      }
      topNav={<TopNav />}
      //leftColumn={<Sidebar items={sidebarItems} />} // cia history
      /*rightMain={
        <>
          <section className="chat" aria-label="Chat">
            <div className="bubbles" aria-live="polite">
              <span className="bubble">Hello! How can I help you today?</span>
              <span className="bubble bubble-alt">What are the dormitory prices?</span>
              <span className="bubble">For 2025/26, prices start from €XX depending on room type.</span>
            </div>

            <div className="ask">
              <input className="input" placeholder="Ask something about KTU…" aria-label="Ask" />
              <button className="btn btn--primary" type="button">Send</button>
            </div>
          </section>
		
          <RightPanel sources={sources} /> 
        </>
      }*/
      footer={<Footer />}
    />
  );
}
