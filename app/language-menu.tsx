"use client";

import { usePathname } from "next/navigation";

const languages = [["en", "English"], ["zh-CN", "简体中文"], ["hi", "हिन्दी"], ["es", "Español"], ["fr", "Français"]];

export default function LanguageMenu() {
  const path = usePathname() || "/";
  const page = "https://jessgoodvibesonly.vercel.app" + path;
  return (
    <nav aria-label="Language" translate="no" style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"4px 12px",padding:"8px 12px",background:"#181127",color:"#fff",borderBottom:"1px solid #b896ee",font:"15px/1.4 system-ui"}}>
        <strong>🌐 Translate</strong>
        {languages.map(([code, label]) => (
          <a key={code} lang={code} style={{display: "block", color: "white", textDecoration: "underline", padding: 4}}
            href={code === "en" ? page : "https://translate.google.com/translate?" + new URLSearchParams({sl: "en", tl: code, u: page})}>
            {label}
          </a>
        ))}
      </nav>
    
  );
}
