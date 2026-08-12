"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  Code2,
  Server,
  Cloud,
  Wrench,
  Palette,
  Database,
  Globe,
  Cpu,
  Terminal,
  GitBranch,
  Container,
  Layers,
} from "lucide-react";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  desc: string;
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Palette size={20} />,
    skills: [
      {
        name: "React / Next.js",
        desc: "Memastikan aplikasi loading di bawah 1 detik demi retensi pengguna maksimal.",
        icon: <Code2 size={18} />,
      },
      {
        name: "TypeScript",
        desc: "Keandalan kode & pengembangan yang lebih cepat dengan type-safety.",
        icon: <Terminal size={18} />,
      },
      {
        name: "Tailwind CSS",
        desc: "Styling modern yang konsisten, responsif, dan maintainable.",
        icon: <Palette size={18} />,
      },
      {
        name: "Framer Motion",
        desc: "Animasi halus & interaksi yang meningkatkan user engagement 40%.",
        icon: <Layers size={18} />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: [
      {
        name: "Node.js / Express",
        desc: "REST API & microservices yang menangani jutaan request per hari.",
        icon: <Server size={18} />,
      },
      {
        name: "PostgreSQL",
        desc: "Database relasional untuk data kritis dengan query optimal.",
        icon: <Database size={18} />,
      },
      {
        name: "GraphQL",
        desc: "API fleksibel yang mengurangi over-fetching data hingga 60%.",
        icon: <Globe size={18} />,
      },
      {
        name: "Python / FastAPI",
        desc: "Backend high-performance untuk ML pipelines & data processing.",
        icon: <Cpu size={18} />,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    skills: [
      {
        name: "AWS / GCP",
        desc: "Infrastruktur cloud scalable dengan cost optimization 30%.",
        icon: <Cloud size={18} />,
      },
      {
        name: "Docker / K8s",
        desc: "Containerization untuk deployment konsisten di semua environment.",
        icon: <Container size={18} />,
      },
      {
        name: "CI/CD Pipeline",
        desc: "Automasi deployment yang mempercepat release cycle 5x lipat.",
        icon: <GitBranch size={18} />,
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Wrench size={20} />,
    skills: [
      {
        name: "Git / GitHub",
        desc: "Version control & collaboration workflow yang terstruktur.",
        icon: <GitBranch size={18} />,
      },
      {
        name: "Figma",
        desc: "Desain UI/UX sebelum development untuk alignment sempurna.",
        icon: <Palette size={18} />,
      },
      {
        name: "Testing",
        desc: "Jest, Playwright, Vitest — kode teruji, bug terminimalisir.",
        icon: <Wrench size={18} />,
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Tech Stack"
          title="Arsenal Teknologi"
          highlight="Modern"
          description="Bukan sekadar daftar logo — setiap teknologi dipilih berdasarkan dampak nyata terhadap performa, skalabilitas, dan pengalaman pengguna."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.08 }}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    <div className="mt-0.5 text-text-secondary group-hover:text-accent transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary text-sm">
                        {skill.name}
                      </h4>
                      <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
