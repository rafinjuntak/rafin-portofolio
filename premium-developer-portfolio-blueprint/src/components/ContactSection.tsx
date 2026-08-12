"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiArrowRight,
} from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-electric-400 text-sm font-semibold tracking-widest uppercase">
            Kontak
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Siap Menskalakan Bisnis Anda
            <br />
            <span className="gradient-text">dengan Teknologi Tepat Guna?</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Mari berdiskusi bagaimana keahlian saya dapat membantu mewujudkan
            visi digital Anda. Setiap proyek besar dimulai dari satu percakapan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-electric-500/10 flex items-center justify-center">
                  <HiMail className="text-electric-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm text-white font-medium">
                    rafin.simanjuntak@email.com
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                  <HiPhone className="text-accent-purple text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Telepon
                  </p>
                  <p className="text-sm text-white font-medium">
                    Available on request
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                  <HiLocationMarker className="text-accent-cyan text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Lokasi
                  </p>
                  <p className="text-sm text-white font-medium">
                    Indonesia 🇮🇩
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-slate-500 mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/rafinsimanjuntak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-[#0077b5] transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/rafinsimanjuntak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-400">
                  Open to Work
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Saat ini terbuka untuk proyek freelance, kontrak, maupun
                posisi full-time. Response time: &lt;24 jam.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-500 text-white placeholder-slate-500 focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-500 text-white placeholder-slate-500 focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-500 text-white placeholder-slate-500 focus:outline-none focus:border-electric-400 focus:ring-1 focus:ring-electric-400/50 transition-all resize-none"
                  placeholder="Ceritakan proyek atau kebutuhan Anda..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-electric-500/30"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pesan berhasil dikirim! Saya akan segera merespons.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Gagal mengirim pesan. Silakan coba lagi.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
