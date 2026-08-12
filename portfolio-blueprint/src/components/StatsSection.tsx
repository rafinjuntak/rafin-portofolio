"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, suffix, label, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-text-secondary text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

const stats = [
  { value: 5, suffix: "+", label: "Tahun Pengalaman" },
  { value: 30, suffix: "+", label: "Proyek Sukses" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 1, suffix: "M+", label: "Pengguna Terjangkau" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 border-y border-glass-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
