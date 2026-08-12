"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-6">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
