"use client";

import React, { useState } from "react";
import { speakersData } from "@/data/speakers";
import { SpeakerType } from "@/types/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { SpeakerGrid } from "@/components/speakers/SpeakerGrid";
import { LayoutGrid, List, Star } from "lucide-react";

export default function SpeakersPage() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [layoutMode, setLayoutMode] = useState<"featured-first" | "standard" | "compact">("featured-first");

  const filterOptions = [
    { label: "All Speakers", value: "all" },
    { label: "Keynotes", value: "keynote" },
    { label: "Guest Speakers", value: "guest" },
    { label: "Track Speakers", value: "speaker" },
    { label: "Panelists", value: "panelist" }
  ];

  const filteredSpeakers =
    selectedType === "all"
      ? speakersData
      : speakersData.filter((s) => s.type === selectedType);

  return (
    <PageContainer>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Distinguished Lineup
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Keynotes & Speakers
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            Meet the researchers, industry leaders, and pioneers sharing groundbreaking insights at ICAI-2026.
          </p>
        </div>
      </section>

      {/* Main Speakers Section */}
      <SectionWrapper bgVariant="surface">
        {/* Controls bar: Category filter + Layout switchers */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedType(opt.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedType === opt.value
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Layout switcher buttons */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setLayoutMode("featured-first")}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === "featured-first"
                  ? "bg-white dark:bg-slate-900 text-blue-900 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              title="Featured + Grid"
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Featured</span>
            </button>

            <button
              onClick={() => setLayoutMode("standard")}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === "standard"
                  ? "bg-white dark:bg-slate-900 text-blue-900 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              title="Standard Grid"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setLayoutMode("compact")}
              className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === "compact"
                  ? "bg-white dark:bg-slate-900 text-blue-900 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              title="Compact View"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Compact</span>
            </button>
          </div>
        </div>

        {/* Dynamic Grid Rendering */}
        <SpeakerGrid speakers={filteredSpeakers} layout={layoutMode} />
      </SectionWrapper>
    </PageContainer>
  );
}
