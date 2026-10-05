"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { conferenceData } from "@/data/conference";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/common/Button";
import { Menu, Globe } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-header shadow-sm py-3"
          : "bg-white/95 dark:bg-slate-900/95 py-4 border-b border-slate-200/60 dark:border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-800 to-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
              {conferenceData.shortTitle}
            </span>
            <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
              {conferenceData.date.split(",")[1]?.trim() || "2026"} • {conferenceData.city}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navbar items={navigationConfig} />

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button href="/registration" size="sm" className="hidden sm:inline-flex">
            Register Now
          </Button>

          <button
            onClick={() => setMobileOpen(true)}
            className="p-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl lg:hidden focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navigationConfig}
        conferenceTitle={conferenceData.shortTitle}
        dateStr={conferenceData.date}
        venueStr={`${conferenceData.venue}, ${conferenceData.city}`}
      />
    </header>
  );
};
