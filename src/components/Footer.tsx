"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Proyek" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-white">Rafin</span>
              <span className="text-electric-400">.</span>
              <span className="text-slate-400 text-sm font-normal ml-1">
                dev
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
              Full Stack Developer bersertifikasi AWS & Google Cloud.
              Membangun solusi digital yang skalabel dan berdampak.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-electric-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://linkedin.com/in/rafinsimanjuntak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/rafinsimanjuntak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold transition-all"
            >
              Mulai Proyek Bersama
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-600 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1">
            © {new Date().getFullYear()} Rafin Simanjuntak. Dibangun dengan
            <HiHeart className="text-red-500 inline mx-1" />
            menggunakan Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-slate-600">
            Designed & Developed by Rafin Simanjuntak
          </p>
        </div>
      </div>
    </footer>
  );
}
