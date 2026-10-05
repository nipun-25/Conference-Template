import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { conferenceData } from "@/data/conference";
import { speakersData } from "@/data/speakers";
import { importantDatesData } from "@/data/important-dates";
import { selectedSDGsData } from "@/data/sdgs";
import { sponsorsData } from "@/data/sponsors";
import { conferenceTracksData } from "@/data/call-for-papers";
import { venueData } from "@/data/venue";

import { PageContainer } from "@/components/layout/PageContainer";
import { HeroSection } from "@/components/hero/HeroSection";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { ImportantDatesList } from "@/components/content/ImportantDatesList";
import { SpeakerGrid } from "@/components/speakers/SpeakerGrid";
import { SDGGrid } from "@/components/content/SDGGrid";
import { CTASection } from "@/components/content/CTASection";
import { SponsorGrid } from "@/components/content/SponsorGrid";
import { VenueCard } from "@/components/venue/VenueCard";
import { Button } from "@/components/common/Button";
import { Layers, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `${conferenceData.shortTitle} | Home - ${conferenceData.title}`,
  description: conferenceData.description,
  openGraph: {
    title: conferenceData.title,
    description: conferenceData.description,
    images: [{ url: siteConfig.ogImage }]
  }
};

export default function HomePage() {
  const featuredSpeakers = speakersData.slice(0, 4);

  return (
    <PageContainer>
      {/* 1. Hero Section */}
      <HeroSection conference={conferenceData} />

      {/* 2. About Summary Section */}
      <SectionWrapper bgVariant="surface" id="about-summary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 rounded-full dark:bg-blue-950 dark:text-blue-300">
              About The Conference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight">
              {conferenceData.theme}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {conferenceData.description}
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Peer-reviewed proceedings indexed in global research databases",
                "Cross-disciplinary keynotes from leading scientists and practitioners",
                "Dedicated sessions on AI ethics, climate action, and hardware scale"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button href="/about" variant="outline">
                Learn More About {conferenceData.shortTitle}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl text-white shadow-xl space-y-6">
            <h3 className="text-2xl font-extrabold">At A Glance</h3>
            <div className="space-y-4 text-sm">
              <div className="pb-3 border-b border-blue-800/80">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold block">Dates</span>
                <span className="font-bold text-base">{conferenceData.date}</span>
              </div>
              <div className="pb-3 border-b border-blue-800/80">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold block">Location</span>
                <span className="font-bold text-base">{conferenceData.venue}, {conferenceData.city}</span>
              </div>
              <div className="pb-3 border-b border-blue-800/80">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold block">Format</span>
                <span className="font-bold text-base">In-Person & Virtual Hybrid</span>
              </div>
            </div>
            <Button href="/call-for-papers" variant="secondary" className="w-full">
              Submit Your Paper
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Important Dates */}
      <SectionWrapper id="important-dates">
        <Heading
          badge="Deadlines & Milestones"
          title="Important Dates"
          subtitle="Keep track of key paper submission, notification, and registration deadlines."
        />
        <ImportantDatesList dates={importantDatesData} />
      </SectionWrapper>

      {/* 4. Featured Speakers */}
      <SectionWrapper bgVariant="surface" id="speakers">
        <Heading
          badge="World-Class Keynotes"
          title="Featured Keynote Speakers"
          subtitle="Hear from internationally distinguished computer scientists, climate researchers, and AI pioneers."
        />
        <SpeakerGrid speakers={featuredSpeakers} layout="featured-first" />
        <div className="mt-10 text-center">
          <Button href="/speakers" variant="outline">
            <span>View All Speakers</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </SectionWrapper>

      {/* 5. Tracks / Themes */}
      <SectionWrapper id="tracks">
        <Heading
          badge="Research Scope"
          title="Conference Themes & Tracks"
          subtitle="Explore the core technical tracks calling for original research submissions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferenceTracksData.map((track) => (
            <div
              key={track.id}
              className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {track.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. SDG Alignment Section */}
      <SectionWrapper bgVariant="surface" id="sdgs">
        <Heading
          badge="Global Sustainability"
          title="Aligned UN Sustainable Development Goals"
          subtitle="Fostering academic innovation in direct support of the United Nations SDGs."
        />
        <SDGGrid sdgs={selectedSDGsData} />
      </SectionWrapper>

      {/* 7. Registration CTA Banner */}
      <SectionWrapper>
        <CTASection
          title="Ready to Present Your Breakthrough Research?"
          description="Join 800+ international delegates in Geneva this November. Register early to take advantage of special rates."
          primaryBtnText="Register Now"
          primaryBtnHref="/registration"
          secondaryBtnText="View Call for Papers"
          secondaryBtnHref="/call-for-papers"
        />
      </SectionWrapper>

      {/* 8. Venue Preview */}
      <SectionWrapper bgVariant="surface" id="venue-preview">
        <Heading
          badge="Geneva, Switzerland"
          title="Conference Venue"
          subtitle="Located at the heart of international diplomacy and science."
        />
        <VenueCard venue={venueData} />
      </SectionWrapper>

      {/* 9. Sponsors & Partners */}
      <SectionWrapper id="sponsors">
        <Heading
          badge="Partnership"
          title="Sponsors & Academic Partners"
          subtitle="Supported by industry pioneers and research institutions committed to sustainable technology."
        />
        <SponsorGrid sponsors={sponsorsData} />
      </SectionWrapper>
    </PageContainer>
  );
}
