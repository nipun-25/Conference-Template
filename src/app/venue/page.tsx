import React from "react";
import { Metadata } from "next";
import { venueData } from "@/data/venue";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { VenueCard } from "@/components/venue/VenueCard";

export const metadata: Metadata = {
  title: `Venue & Travel | ${conferenceData.shortTitle}`,
  description: `Location, transportation, map, and partner hotels for ${conferenceData.title} in Geneva, Switzerland.`
};

export default function VenuePage() {
  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Geneva, Switzerland
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Venue & Travel Guide
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            Everything you need to know about the conference venue, getting around Geneva, and accommodation.
          </p>
        </div>
      </section>

      {/* Venue Detail Section */}
      <SectionWrapper bgVariant="surface">
        <VenueCard venue={venueData} />
      </SectionWrapper>
    </PageContainer>
  );
}
