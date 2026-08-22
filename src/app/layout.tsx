import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algerian Streetwear",
  description: "Algeria-first streetwear commerce platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
