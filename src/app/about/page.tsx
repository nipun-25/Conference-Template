import React from "react";
import { Metadata } from "next";
import { conferenceData } from "@/data/conference";
import { conferenceTracksData } from "@/data/call-for-papers";
import { selectedSDGsData } from "@/data/sdgs";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { SDGGrid } from "@/components/content/SDGGrid";
import { Target, ShieldCheck, Award, Globe, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: `About | ${conferenceData.shortTitle}`,
  description: `Learn more about ${conferenceData.title}, its objectives, scope, organizing committee, and UN SDG alignment.`
};

export default function AboutPage() {
  const objectives = [
    {
      icon: Target,
      title: "Advance Cutting-Edge Research",
      desc: "Provide a rigorous peer-reviewed platform for presenting original advances in AI algorithms, scalable computing, and energy-aware neural systems."
    },
    {
      icon: ShieldCheck,
      title: "Promote Ethical & Trustworthy AI",
      desc: "Foster cross-border dialogue between computer scientists, policy makers, and bioethicists on safety alignment, privacy, and auditable governance."
    },
    {
      icon: Globe,
      title: "Drive Global Sustainability",
      desc: "Channel machine learning research into concrete solutions for climate monitoring, renewable grid management, and UN Sustainable Development Goals."
    }
  ];

  return (
    <PageContainer>
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            About The Conference
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {conferenceData.title}
          </h1>
          <p className="text-lg text-blue-100/90 font-normal max-w-3xl mx-auto">
            {conferenceData.tagline}
          </p>
        </div>
      </section>

      {/* Conference Introduction */}
      <SectionWrapper bgVariant="surface">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Conference Overview & Vision
          </h2>
          <p>{conferenceData.description}</p>
          <p>
            Hosted annually in Geneva, Switzerland, {conferenceData.shortTitle} serves as a global flagship gathering for computer scientists, research engineers, industry leaders, and policy architects. The 2026 edition emphasizes high-impact research at the intersection of large-scale artificial intelligence and planetary sustainability.
          </p>
        </div>
      </SectionWrapper>

      {/* Core Objectives */}
      <SectionWrapper>
        <Heading
          badge="Mission & Purpose"
          title="Core Conference Objectives"
          subtitle="Three foundational pillars guiding the ICAI-2026 academic program."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400 flex items-center justify-center">
                <obj.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {obj.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Organizing Institution */}
      <SectionWrapper bgVariant="surface">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl shadow-xl">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <Building2 className="w-10 h-10 text-teal-400" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-blue-300 tracking-wider">
              Host Organization
            </span>
            <h3 className="text-2xl font-extrabold">{conferenceData.organizer.name}</h3>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Dedicated to accelerating international interdisciplinary research, global open-access standards, and ethical artificial intelligence deployment.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* SDGs */}
      <SectionWrapper id="sdgs">
        <Heading
          badge="Sustainability"
          title="UN SDGs Alignment"
          subtitle="Selected Sustainable Development Goals explicitly targeted by this conference."
        />
        <SDGGrid sdgs={selectedSDGsData} />
      </SectionWrapper>
    </PageContainer>
  );
}
