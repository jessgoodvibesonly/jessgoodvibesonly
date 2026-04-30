import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rev. Dr. Jessica Simmonds",
  description:
    "Personal brand homepage for Rev. Dr. Jessica Simmonds — builder of immersive systems, human performance experiences, and game production environments.",
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
