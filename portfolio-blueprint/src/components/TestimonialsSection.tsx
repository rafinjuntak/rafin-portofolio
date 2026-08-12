"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Ahmad Kurniawan",
    role: "Head of IT Department",
    company: "Universitas",
    text: "Rafin menunjukkan kemampuan luar biasa dalam mengembangkan sistem ITSM untuk kampus kami. Thesis-nya bukan sekadar riset akademis, tapi solusi nyata yang sekarang digunakan untuk menangani ribuan tiket IT support setiap bulannya.",
    avatar: "AK",
    rating: 5,
  },
  {
    name: "Sarah Wijaya",
    role: "Project Manager",
    company: "Tech Startup",
    text: "Bekerja dengan Rafin di proyek Booking Classroom App sangat menyenangkan. Dia tidak hanya deliver tepat waktu, tapi juga proaktif memberikan solusi yang lebih baik dari requirement awal. Aplikasinya sekarang digunakan seluruh fakultas!",
    avatar: "SW",
    rating: 5,
  },
  {
    name: "Michael Tan",
    role: "UI/UX Lead",
    company: "Digital Agency",
    text: "Prototype JIUmart yang dibuat Rafin sangat impresif. Attention to detail-nya luar biasa — dari user flow hingga micro-interactions semua dipikirkan matang. User testing score 4.8/5 membuktikan kualitas design-nya.",
    avatar: "MT",
    rating: 5,
  },
  {
    name: "Rina Maharani",
    role: "Library Director",
    company: "Universitas",
    text: "Sistem perpustakaan digital yang dikembangkan Rafin mentransformasi cara kami melayani mahasiswa. Dari proses manual yang memakan waktu, sekarang semua bisa dilakukan dalam hitungan detik. Peminjaman aktif naik 120%!",
    avatar: "RM",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Testimonials"
          title="Kata"
          highlight="Mereka"
          description="Feedback langsung dari klien dan kolega yang pernah berkolaborasi — kepuasan mereka adalah bukti terbaik dari kualitas kerja saya."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              {/* Quote icon */}
              <div className="text-accent/20 mb-4">
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-secondary text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-glass-border">
                <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
