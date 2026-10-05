"use client";

import React from "react";
import { motion } from "framer-motion";
import { ConferenceInfo } from "@/types/conference";
import { Countdown } from "@/components/content/Countdown";
import { Button } from "@/components/common/Button";
import { Calendar, MapPin, Award, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  conference: ConferenceInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ conference }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Dynamic background light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-200 text-xs sm:text-sm font-semibold backdrop-blur-md"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Hybrid Conference • IEEE & Springer Indexed</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200"
          >
            {conference.title}
          </motion.h1>

          {/* Theme Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100/90 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            {conference.tagline}
          </motion.p>

          {/* Date & Venue Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-semibold text-slate-300 pt-2"
          >
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>{conference.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>{conference.venue}, {conference.city}</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button href="/registration" variant="secondary" size="lg">
              <span>Register Delegate</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button href="/call-for-papers" variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10">
              Call for Papers
            </Button>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8"
          >
            <Countdown targetDateISO={conference.startDateISO} />
          </motion.div>
        </div>

        {/* Stats counter bar */}
        {conference.stats && conference.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto"
          >
            {conference.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
