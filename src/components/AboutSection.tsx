"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiCode,
  HiDatabase,
  HiAcademicCap,
  HiLightningBolt,
} from "react-icons/hi";

const stats = [
  { value: "2+", label: "Tahun Pengalaman", suffix: "" },
  { value: "10+", label: "Proyek Selesai", suffix: "" },
  { value: "2", label: "Cloud Certifications", suffix: "" },
  { value: "S1", label: "Informatika (Very Satisfactory)", suffix: "" },
];

const skills = [
  {
    icon: <HiCode className="text-2xl" />,
    title: "Full Stack Development",
    description:
      "Menguasai frontend hingga backend secara end-to-end. Dari React.js, HTML/CSS, hingga Node.js — saya membangun aplikasi yang kohesif, performa tinggi, dan siap produksi.",
    tags: ["React.js", "Node.js", "TypeScript", "REST API"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <HiDatabase className="text-2xl" />,
    title: "Database Migration",
    description:
      "Spesialisasi dalam migrasi database yang seamless dan zero-downtime. Memastikan integritas data terjaga selama proses transformasi infrastruktur.",
    tags: ["PostgreSQL", "MySQL", "Data Migration", "Schema Design"],
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: <HiLightningBolt className="text-2xl" />,
    title: "Frontend Engineering",
    description:
      "Membangun antarmuka pengguna yang responsif, aksesibel, dan lightning-fast. Setiap piksel dirancang untuk memberikan pengalaman pengguna terbaik.",
    tags: ["React.js", "Bootstrap", "Tailwind CSS", "Figma"],
    color: "from-amber-500 to-orange-400",
  },
];

function AnimatedCounter({ target, suffix }: { target: string; suffix: string }) {
  return (
    <span className="text-3xl sm:text-4xl font-extrabold gradient-text">
      {target}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-electric-400 text-sm font-semibold tracking-widest uppercase">
            Tentang Saya
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Keahlian yang{" "}
            <span className="gradient-text">Menggerakkan Bisnis</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Dengan fondasi akademis yang kuat dan pengalaman industri nyata,
            saya menghadirkan solusi teknologi yang terukur dan berdampak.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Education highlight */}
        <div className="glass-card rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-electric-500 to-accent-cyan flex items-center justify-center">
            <HiAcademicCap className="text-2xl text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">
              S1 Informatika — Predikat{" "}
              <span className="text-electric-400">Very Satisfactory</span>
            </h3>
            <p className="mt-2 text-slate-400 leading-relaxed">
              Thesis:{" "}
              <span className="text-slate-300 italic">
                &ldquo;Web-Based IT Service Management (ITSM) Design and
                Implementation For Ticketing Documentation and
                Troubleshooting.&rdquo;
              </span>{" "}
              — Membuktikan kemampuan dalam merancang sistem enterprise-grade
              yang menyelesaikan masalah nyata di dunia IT Service Management.
            </p>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass-card rounded-2xl p-8 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-5">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-dark-500 text-slate-300 border border-dark-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
