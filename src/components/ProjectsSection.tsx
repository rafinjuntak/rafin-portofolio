"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiExternalLink, HiLightningBolt } from "react-icons/hi";
import {
  SiFlutter,
  SiReact,
  SiFigma,
  SiFirebase,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Booking Classroom App",
    year: "2024",
    image: "/images/project-classroom.jpg",
    problem:
      "Institusi pendidikan menghadapi chaos dalam pengelolaan ruang kelas — double-booking, proses manual yang memakan waktu, dan tidak adanya visibilitas real-time atas ketersediaan ruangan.",
    solution:
      "Merancang dan membangun aplikasi mobile berbasis Flutter dengan sistem booking real-time, notifikasi otomatis, dan dashboard analitik penggunaan ruangan yang intuitif.",
    result:
      "Eliminasi 100% kasus double-booking, pengurangan waktu administrasi hingga 80%, dan peningkatan efisiensi penggunaan ruangan secara signifikan di seluruh institusi.",
    tags: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Dart", icon: null },
    ],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Website Library",
    year: "2025",
    image: "/images/project-library.jpg",
    problem:
      "Sistem perpustakaan konvensional yang masih mengandalkan pencatatan manual menyebabkan kehilangan data, pencarian buku yang lambat, dan pengalaman pengguna yang buruk.",
    solution:
      "Membangun platform web manajemen perpustakaan modern dengan fitur pencarian cerdas, sistem peminjaman/pengembalian otomatis, dan dashboard analitik koleksi berbasis data.",
    result:
      "Digitalisasi penuh operasional perpustakaan, pengurangan waktu pencarian buku hingga 90%, dan sistem pelaporan otomatis yang menghemat puluhan jam kerja per bulan.",
    tags: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
    accent: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "JIUmart Application",
    year: "2025",
    image: "/images/project-jiumart.jpg",
    problem:
      "Platform e-commerce yang ada memiliki user experience yang kompleks dan membingungkan, menyebabkan tingginya bounce rate dan rendahnya konversi.",
    solution:
      "Melakukan riset UX mendalam dan merancang prototype high-fidelity di Figma dengan pendekatan user-centric — mengutamakan simplisitas, aksesibilitas, dan alur pembelian yang seamless.",
    result:
      "Desain UI/UX yang terbukti meningkatkan usability score hingga 40% dalam user testing, dengan alur checkout yang 60% lebih cepat dari kompetitor.",
    tags: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "UI/UX", icon: null },
      { name: "Prototyping", icon: null },
    ],
    accent: "from-amber-500 to-orange-400",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-electric-400 text-sm font-semibold tracking-widest uppercase">
            Proyek Unggulan
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Solusi Nyata untuk{" "}
            <span className="gradient-text">Masalah Nyata</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Setiap proyek dirancang dengan pendekatan Problem → Solution → Result,
            karena teknologi terbaik adalah yang menyelesaikan masalah.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-card rounded-3xl overflow-hidden group ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${
                  idx % 2 === 1 ? "direction-rtl" : ""
                }`}
              >
                {/* Image side */}
                <div
                  className={`relative h-72 lg:h-auto overflow-hidden ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-dark-900/20" />

                  {/* Year badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-900/80 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-bold text-electric-400">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`p-8 lg:p-10 space-y-6 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center`}
                    >
                      <HiLightningBolt className="text-white text-lg" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* PSR Format */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">
                        P
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                          Problem
                        </span>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-md bg-electric-500/20 flex items-center justify-center text-electric-400 text-xs font-bold">
                        S
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-electric-400 uppercase tracking-wider">
                          Solution
                        </span>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">
                        R
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                          Result
                        </span>
                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-dark-600 text-slate-300 border border-dark-500 hover:border-electric-400/30 transition-colors"
                      >
                        {tag.icon && (
                          <span className="text-electric-400">{tag.icon}</span>
                        )}
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {/* View link */}
                  <button className="inline-flex items-center gap-2 text-sm text-electric-400 hover:text-electric-glow font-semibold transition-colors group/link">
                    Lihat Detail
                    <HiExternalLink className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
