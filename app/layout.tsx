import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EARTH SCHOOL | Rev. Dr. Jessica Simmonds",
  description:
    "Explore EARTH SCHOOL, the original narrative game and immersive world created by Rev. Dr. Jessica Simmonds.",
  icons: {
    icon: "/peacesymbolgold.png",
    shortcut: "/peacesymbolgold.png",
    apple: "/peacesymbolgold.png",
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
