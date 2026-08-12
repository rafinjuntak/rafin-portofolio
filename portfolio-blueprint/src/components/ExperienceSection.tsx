"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, Database } from "lucide-react";
import SectionHeader from "./SectionHeader";
import type { ReactNode } from "react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "award" | "education" | "cert";
  icon: ReactNode;
  tags?: string[];
}

const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    description:
      "Mendapatkan sertifikasi yang memvalidasi keahlian dalam merancang arsitektur cloud yang scalable, secure, dan cost-effective di AWS ecosystem.",
    type: "cert",
    icon: <Award size={18} />,
  },
  {
    year: "2024 — 2026",
    title: "Full-Stack Developer",
    company: "Tech Industry",
    description:
      "Mengembangkan aplikasi web dan mobile full-stack untuk berbagai klien. Menangani proyek end-to-end dari requirements gathering, development, testing, hingga deployment dan maintenance.",
    type: "work",
    icon: <Briefcase size={18} />,
    tags: ["Next.js", "Flutter", "Node.js", "PostgreSQL"],
  },
  {
    year: "2025",
    title: "Google Cloud Professional",
    company: "Google Cloud",
    description:
      "Sertifikasi Cloud Developer yang menunjukkan kemampuan membangun dan men-deploy aplikasi cloud-native di Google Cloud Platform dengan best practices.",
    type: "cert",
    icon: <Award size={18} />,
  },
  {
    year: "2023 — 2024",
    title: "Frontend Developer",
    company: "Software Development",
    description:
      "Fokus pada pengembangan antarmuka pengguna yang responsif dan modern. Mengimplementasikan design system, optimasi performa, dan memastikan aksesibilitas aplikasi web.",
    type: "work",
    icon: <Briefcase size={18} />,
    tags: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    year: "2023",
    title: "Database Migration Specialist",
    company: "IT Infrastructure",
    description:
      "Menangani proyek migrasi database skala besar dengan zero downtime. Melakukan data mapping, ETL processes, dan validasi integritas data post-migration.",
    type: "work",
    icon: <Database size={18} />,
    tags: ["PostgreSQL", "MySQL", "Data Migration", "ETL"],
  },
  {
    year: "2023",
    title: "S1 Informatika — Very Satisfactory",
    company: "Universitas",
    description:
      "Lulus dengan predikat Sangat Memuaskan. Thesis: \"Web-Based IT Service Management (ITSM) Design and Implementation For Ticketing Documentation and Troubleshooting\" — mengembangkan sistem ITSM untuk optimasi penanganan tiket IT support.",
    type: "education",
    icon: <GraduationCap size={18} />,
    tags: ["ITSM", "Web Development", "Ticketing System"],
  },
];

const typeColors = {
  work: "border-accent/30 bg-accent/10 text-accent",
  award: "border-yellow-400/30 bg-yellow-400/10 text-yellow-400",
  education: "border-blue-400/30 bg-blue-400/10 text-blue-400",
  cert: "border-purple-400/30 bg-purple-400/10 text-purple-400",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          badge="Journey"
          title="Pengalaman &"
          highlight="Pencapaian"
          description="Perjalanan profesional yang dibangun di atas dedikasi, continuous learning, dan impact nyata di setiap langkah."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 z-10">
                  <div
                    className={`p-2 rounded-full border ${typeColors[item.type]}`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Mobile dot */}
                <div className="md:hidden absolute left-[20px] top-2 z-10 -translate-x-1/2">
                  <div
                    className={`p-2 rounded-full border ${typeColors[item.type]}`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`glass-card p-6 md:w-[calc(50%-3rem)] ml-12 md:ml-0 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="text-xs text-accent font-semibold tracking-wider uppercase">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary mt-0.5 font-medium">
                    {item.company}
                  </p>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-glass-border text-xs text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
