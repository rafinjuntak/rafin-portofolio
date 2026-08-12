"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Zap, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Project {
  title: string;
  category: string;
  year: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  gradient: string;
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: "Booking Classroom App",
    category: "Mobile Application",
    year: "2024",
    problem:
      "Institusi pendidikan membutuhkan sistem reservasi ruang kelas yang efisien untuk menghindari bentrok jadwal dan mengoptimalkan penggunaan fasilitas kampus.",
    solution:
      "Mengembangkan aplikasi mobile cross-platform menggunakan Flutter dengan fitur real-time booking, calendar integration, notifikasi push, dan admin dashboard untuk manajemen ruangan.",
    impact:
      "Mengurangi konflik jadwal ruangan hingga 95% dan meningkatkan efisiensi penggunaan ruang kelas sebesar 60%. Diadopsi oleh seluruh fakultas.",
    tech: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    metrics: [
      { label: "Konflik Jadwal", value: "-95%" },
      { label: "Efisiensi", value: "+60%" },
      { label: "Platform", value: "iOS & Android" },
    ],
  },
  {
    title: "JIUmart Application",
    category: "UI/UX Design & Prototyping",
    year: "2024",
    problem:
      "Startup e-commerce lokal memerlukan desain aplikasi marketplace yang intuitif dan modern untuk bersaing dengan platform besar, dengan fokus pada user experience yang seamless.",
    solution:
      "Merancang prototype high-fidelity menggunakan Figma dengan pendekatan user-centered design. Melakukan user research, wireframing, dan iterasi berdasarkan feedback untuk menghasilkan UI/UX yang optimal.",
    impact:
      "Prototype berhasil lolos user testing dengan satisfaction score 4.8/5. Desain diadopsi sepenuhnya oleh tim development untuk fase implementasi.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Design System"],
    gradient: "from-pink-500/20 to-purple-500/20",
    metrics: [
      { label: "User Satisfaction", value: "4.8/5" },
      { label: "Screens", value: "50+" },
      { label: "Components", value: "100+" },
    ],
  },
  {
    title: "Website Library System",
    category: "Web Application",
    year: "2025",
    problem:
      "Perpustakaan universitas membutuhkan sistem digital untuk katalog buku, peminjaman online, dan tracking inventaris yang terintegrasi dengan sistem akademik.",
    solution:
      "Membangun full-stack web application dengan fitur pencarian katalog advanced, sistem peminjaman & pengembalian otomatis, dashboard analytics, dan integrasi dengan database akademik mahasiswa.",
    impact:
      "Digitalisasi 10.000+ koleksi buku, mengurangi waktu proses peminjaman dari 10 menit menjadi 30 detik, dan meningkatkan jumlah peminjaman aktif sebesar 120%.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST API"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    metrics: [
      { label: "Koleksi Digital", value: "10K+" },
      { label: "Waktu Proses", value: "-95%" },
      { label: "Peminjaman", value: "+120%" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Portfolio"
          title="Proyek"
          highlight="Unggulan"
          description="Setiap proyek dirancang dengan pendekatan problem-solving — bukan hanya menulis kode, tapi memberikan solusi bisnis yang terukur."
        />

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-card-hover overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Visual preview */}
                <div
                  className={`relative md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-bg-primary/40" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs text-text-secondary">• {project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      {project.title}
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-xl md:text-2xl font-bold gradient-text">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-text-secondary mt-1 uppercase tracking-wide">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1.5 rounded-lg bg-red-500/10 text-red-400">
                        <Target size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">
                          Tantangan
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1.5 rounded-lg bg-accent/10 text-accent">
                        <Zap size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">
                          Solusi
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <TrendingUp size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-1">
                          Dampak
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-glass-border text-xs text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <div className="mt-6">
                    <button className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors duration-300 group">
                      Lihat Detail Proyek
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
