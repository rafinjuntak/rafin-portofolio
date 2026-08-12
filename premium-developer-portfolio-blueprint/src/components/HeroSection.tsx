"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import {
  SiGooglecloud,
  SiReact,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Database Migration Specialist",
  "Cloud-Certified Professional",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-transparent to-dark-900/50" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-electric-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-300">
                Available for opportunities
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-white">Membangun</span>
                <br />
                <span className="gradient-text">Ekosistem Digital</span>
                <br />
                <span className="text-white">Berkinerja Tinggi</span>
                <span className="text-electric-400">.</span>
              </h1>
            </div>

            {/* Typing animation */}
            <div className="flex items-center gap-3 text-lg text-slate-400">
              <span className="text-electric-400 font-mono text-sm">
                {"//"}
              </span>
              <span className="typing-cursor font-medium text-slate-200">
                {displayText}
              </span>
            </div>

            {/* Sub-headline */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Saya{" "}
              <span className="text-white font-semibold">
                Rafin Simanjuntak
              </span>
              , Full Stack Developer bersertifikasi{" "}
              <span className="text-accent-cyan font-semibold">AWS</span> &{" "}
              <span className="text-accent-purple font-semibold">
                Google Cloud
              </span>
              . Saya merancang dan membangun solusi digital yang skalabel, efisien,
              dan berdampak nyata untuk bisnis Anda.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-electric-500/30 hover:-translate-y-0.5"
              >
                Hire Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-600 hover:border-electric-400 text-slate-300 hover:text-electric-400 font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Lihat Karya Saya
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-xs text-slate-500 uppercase tracking-widest">
                Tech Stack
              </span>
              <div className="flex items-center gap-4 text-slate-500">
                <SiReact
                  className="text-xl hover:text-[#61dafb] transition-colors cursor-pointer"
                  title="React"
                />
                <SiNodedotjs
                  className="text-xl hover:text-[#339933] transition-colors cursor-pointer"
                  title="Node.js"
                />
                <SiTypescript
                  className="text-xl hover:text-[#3178c6] transition-colors cursor-pointer"
                  title="TypeScript"
                />
                <FaAws
                  className="text-xl hover:text-[#ff9900] transition-colors cursor-pointer"
                  title="AWS"
                />
                <SiGooglecloud
                  className="text-xl hover:text-[#4285f4] transition-colors cursor-pointer"
                  title="Google Cloud"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-electric-500 via-accent-purple to-accent-cyan opacity-20 blur-2xl" />

              {/* Profile container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animated-border pulse-ring">
                <Image
                  src="/images/profile.jpg"
                  alt="Rafin Simanjuntak"
                  fill
                  className="object-cover rounded-full p-1"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-8 glass-card px-3 py-2 rounded-xl flex items-center gap-2">
                <FaAws className="text-[#ff9900] text-lg" />
                <span className="text-xs font-semibold text-white">
                  AWS Certified
                </span>
              </div>

              <div className="absolute -right-4 bottom-16 glass-card px-3 py-2 rounded-xl flex items-center gap-2">
                <SiGooglecloud className="text-[#4285f4] text-lg" />
                <span className="text-xs font-semibold text-white">
                  GCP Pro
                </span>
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-xl">
                <span className="text-xs font-bold text-electric-400">
                  2+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1">
            <div className="w-1 h-2 bg-electric-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
