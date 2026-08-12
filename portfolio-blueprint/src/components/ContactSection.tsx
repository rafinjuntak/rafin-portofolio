"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi.";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi.";
    else if (formData.message.length < 10)
      newErrors.message = "Pesan minimal 10 karakter.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Pesan terkirim!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Gagal mengirim pesan.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Siap Mewujudkan"
          highlight="Ide Brilian Anda?"
          description="Punya proyek menarik atau peluang kolaborasi? Saya selalu terbuka untuk mendiskusikan bagaimana teknologi bisa mendorong bisnis Anda ke level berikutnya."
        />

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="md:col-span-2 space-y-6">
            {[
              {
                icon: <Mail size={20} />,
                title: "Email",
                value: "rafin.simanjuntak@email.com",
                href: "mailto:rafin.simanjuntak@email.com",
              },
              {
                icon: <MapPin size={20} />,
                title: "Lokasi",
                value: "Indonesia",
                href: undefined,
              },
              {
                icon: <Clock size={20} />,
                title: "Respons Time",
                value: "Dalam 24 jam",
                href: undefined,
              },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase tracking-wider">
                    {info.title}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-text-primary">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-sm font-medium text-accent">
                  Tersedia untuk proyek baru
                </span>
              </div>
              <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                Saat ini terbuka untuk proyek freelance, kontrak, atau posisi
                full-time remote/hybrid.
              </p>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                    errors.name ? "border-red-500/50" : "border-glass-border"
                  } text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email)
                      setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                    errors.email ? "border-red-500/50" : "border-glass-border"
                  } text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Ceritakan tentang proyek Anda..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                    errors.message ? "border-red-500/50" : "border-glass-border"
                  } text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-accent text-bg-primary font-semibold text-base flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(6,214,160,0.3)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-accent text-sm bg-accent/10 rounded-xl p-4"
                >
                  <CheckCircle size={18} />
                  {statusMessage}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 rounded-xl p-4"
                >
                  <AlertCircle size={18} />
                  {statusMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
