import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EARTH SCHOOL | Rev. Dr. Jessica Simmonds",
  description:
    "Explore EARTH SCHOOL, the original narrative game and immersive world created by Rev. Dr. Jessica Simmonds.",
  icons: {
    icon: "/peace-iridescent.svg",
    shortcut: "/peace-iridescent.svg",
    apple: "/peace-iridescent.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<details translate="no" style={{ position: "fixed", bottom: "12px", left: "12px", zIndex: 9999, background: "#171323", color: "white", borderRadius: "12px", padding: "8px 12px", font: "15px system-ui" }}><summary style={{cursor:"pointer"}}>🌐 Language</summary><nav aria-label="Language"><a lang="en" href="https://jessgoodvibesonly.vercel.app/" style={{display:"block",color:"white",padding:"5px"}}>English</a><a lang="zh-CN" href="https://translate.google.com/translate?sl=en&amp;tl=zh-CN&amp;u=https%3A%2F%2Fjessgoodvibesonly.vercel.app%2F" style={{display:"block",color:"white",padding:"5px"}}>简体中文</a><a lang="hi" href="https://translate.google.com/translate?sl=en&amp;tl=hi&amp;u=https%3A%2F%2Fjessgoodvibesonly.vercel.app%2F" style={{display:"block",color:"white",padding:"5px"}}>हिन्दी</a><a lang="es" href="https://translate.google.com/translate?sl=en&amp;tl=es&amp;u=https%3A%2F%2Fjessgoodvibesonly.vercel.app%2F" style={{display:"block",color:"white",padding:"5px"}}>Español</a><a lang="fr" href="https://translate.google.com/translate?sl=en&amp;tl=fr&amp;u=https%3A%2F%2Fjessgoodvibesonly.vercel.app%2F" style={{display:"block",color:"white",padding:"5px"}}>Français</a></nav></details></body>
    </html>
  );
}
