"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiCode,
  HiDatabase,
  HiAcademicCap,
  HiBadgeCheck,
  HiDesktopComputer,
} from "react-icons/hi";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  type: "work" | "education" | "certification";
  color: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "AWS Certification Achieved",
    organization: "Amazon Web Services",
    description:
      "Meraih sertifikasi resmi AWS yang memvalidasi keahlian dalam merancang, men-deploy, dan mengelola solusi cloud-native di ekosistem Amazon Web Services.",
    icon: <FaAws className="text-xl" />,
    type: "certification",
    color: "from-amber-500 to-orange-400",
  },
  {
    year: "2026",
    title: "Google Cloud Professional Certified",
    organization: "Google Cloud Platform",
    description:
      "Sertifikasi elite Google Cloud yang membuktikan kemampuan dalam arsitektur cloud, manajemen infrastruktur, dan implementasi solusi berbasis GCP skala enterprise.",
    icon: <SiGooglecloud className="text-xl" />,
    type: "certification",
    color: "from-blue-500 to-sky-400",
  },
  {
    year: "2025 — Present",
    title: "Full Stack Developer",
    organization: "Professional Career",
    description:
      "Mengembangkan aplikasi web full-stack end-to-end, dari arsitektur database hingga antarmuka pengguna. Menggunakan React.js, Node.js, dan PostgreSQL untuk membangun solusi yang skalabel dan high-performance.",
    icon: <HiCode className="text-xl" />,
    type: "work",
    color: "from-electric-500 to-accent-cyan",
  },
  {
    year: "2024 — 2025",
    title: "Frontend Developer",
    organization: "Professional Career",
    description:
      "Membangun antarmuka pengguna modern dan responsif menggunakan React.js dan Bootstrap. Fokus pada performa, aksesibilitas, dan pengalaman pengguna yang seamless di semua perangkat.",
    icon: <HiDesktopComputer className="text-xl" />,
    type: "work",
    color: "from-purple-500 to-pink-400",
  },
  {
    year: "2024",
    title: "Database Migration Specialist",
    organization: "Professional Career",
    description:
      "Spesialisasi dalam migrasi database berskala besar dengan zero-downtime. Memastikan integritas data, optimasi performa query, dan transisi seamless antar sistem database.",
    icon: <HiDatabase className="text-xl" />,
    type: "work",
    color: "from-green-500 to-emerald-400",
  },
  {
    year: "2024",
    title: "S1 Informatika — Very Satisfactory",
    organization: "Universitas",
    description:
      'Lulus dengan predikat Very Satisfactory. Thesis: "Web-Based IT Service Management (ITSM) Design and Implementation For Ticketing Documentation and Troubleshooting" — mendemonstrasikan kemampuan dalam merancang sistem enterprise.',
    icon: <HiAcademicCap className="text-xl" />,
    type: "education",
    color: "from-amber-500 to-yellow-400",
  },
];

function TimelineCard({
  item,
  index,
  isVisible,
}: {
  item: TimelineItem;
  index: number;
  isVisible: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-center gap-8">
        {/* Left content */}
        <div className={isLeft ? "" : "order-3"}>
          {isLeft && (
            <div className="glass-card rounded-2xl p-6 text-right group">
              <div className="flex items-center justify-end gap-2 mb-2">
                <TypeBadge type={item.type} />
                <span className="text-xs text-electric-400 font-semibold">
                  {item.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{item.organization}</p>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center">
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg z-10`}
          >
            {item.icon}
          </div>
        </div>

        {/* Right content */}
        <div className={isLeft ? "order-3" : ""}>
          {!isLeft && (
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex items-center gap-2 mb-2">
                <TypeBadge type={item.type} />
                <span className="text-xs text-electric-400 font-semibold">
                  {item.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{item.organization}</p>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full pl-10">
        <div className="absolute left-5 top-0 w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white shadow-lg z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
          }}
        >
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
          >
            {item.icon}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 flex-1 ml-6">
          <div className="flex items-center gap-2 mb-2">
            <TypeBadge type={item.type} />
            <span className="text-xs text-electric-400 font-semibold">
              {item.year}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{item.organization}</p>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function TypeBadge({ type }: { type: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    work: { bg: "bg-blue-500/10", text: "text-blue-400", label: "Karir" },
    education: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      label: "Pendidikan",
    },
    certification: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      label: "Sertifikasi",
    },
  };
  const c = config[type] || config.work;
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${c.bg} ${c.text} font-medium`}
    >
      <HiBadgeCheck className="text-xs" />
      {c.label}
    </span>
  );
}

export default function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-electric-400 text-sm font-semibold tracking-widest uppercase">
            Perjalanan Karir
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Experience &{" "}
            <span className="gradient-text">Certification</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Dari bangku kuliah hingga sertifikasi cloud elite — setiap langkah
            membentuk expertise yang siap mengakselerasi bisnis Anda.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          {timeline.map((item, idx) => (
            <TimelineCard
              key={`${item.title}-${idx}`}
              item={item}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
