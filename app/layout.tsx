import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rev. Dr. Jessica Simmonds",
  description: "Bridging Technology, Consciousness, and Human Potential",
  icons: {
    icon: "/peacefavicon.png",
    shortcut: "/peacefavicon.png",
    apple: "/peacefavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
