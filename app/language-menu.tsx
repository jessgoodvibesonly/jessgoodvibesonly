"use client";

import { usePathname } from "next/navigation";

const languages = [["en", "English"], ["zh-CN", "简体中文"], ["hi", "हिन्दी"], ["es", "Español"], ["fr", "Français"]];

export default function LanguageMenu() {
  const path = usePathname() || "/";
  const page = "https://jessgoodvibesonly.vercel.app" + path;
  return (
    <details translate="no" style={{ position: "fixed", bottom: 12, left: 12, zIndex: 9999, background: "#171323", color: "white", borderRadius: 12, padding: "8px 12px", font: "15px system-ui" }}>
      <summary style={{cursor: "pointer"}}>🌐 Language</summary>
      <nav aria-label="Language">
        {languages.map(([code, label]) => (
          <a key={code} lang={code} style={{display: "block", color: "white", padding: 5}}
            href={code === "en" ? page : "https://translate.google.com/translate?" + new URLSearchParams({sl: "en", tl: code, u: page})}>
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}
