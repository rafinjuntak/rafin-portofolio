import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafin Simanjuntak — Full-Stack Developer & Digital Architect",
  description:
    "Membangun ekosistem digital berkinerja tinggi untuk skala bisnis global. Full-Stack Developer dengan pengalaman merancang aplikasi web dan mobile modern, scalable, dan high-performance.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Flutter",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Rafin Simanjuntak",
  ],
  openGraph: {
    title: "Rafin Simanjuntak — Full-Stack Developer & Digital Architect",
    description:
      "Membangun ekosistem digital berkinerja tinggi untuk skala bisnis global.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased font-sans">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
