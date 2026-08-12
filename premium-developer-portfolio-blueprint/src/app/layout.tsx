import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafin Simanjuntak — Full Stack Developer | AWS & Google Cloud Certified",
  description:
    "Portfolio profesional Rafin Simanjuntak. Full Stack Developer bersertifikasi AWS & Google Cloud. Membangun ekosistem digital berkinerja tinggi dan skalabel.",
  keywords: [
    "Full Stack Developer",
    "AWS Certified",
    "Google Cloud",
    "React",
    "Node.js",
    "Portfolio",
    "Rafin Simanjuntak",
  ],
  openGraph: {
    title: "Rafin Simanjuntak — Full Stack Developer",
    description: "Membangun Ekosistem Digital Berkinerja Tinggi & Skalabel.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
