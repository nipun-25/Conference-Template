"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgVariant?: "default" | "surface" | "primary" | "muted";
  containerSize?: "sm" | "md" | "lg" | "full";
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = "",
  bgVariant = "default",
  containerSize = "lg"
}) => {
  const bgStyles = {
    default: "bg-slate-50 dark:bg-slate-950",
    surface: "bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800",
    primary: "bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white",
    muted: "bg-slate-100/70 dark:bg-slate-900/50"
  };

  const containerWidths = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-full px-4"
  };

  return (
    <section
      id={id}
      className={`py-14 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200 ${bgStyles[bgVariant]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-auto ${containerWidths[containerSize]}`}
      >
        {children}
      </motion.div>
    </section>
  );
};
