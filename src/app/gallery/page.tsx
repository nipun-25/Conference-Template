import React from "react";
import { Metadata } from "next";
import { galleryData } from "@/data/gallery";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: `Photo Gallery | ${conferenceData.shortTitle}`,
  description: `Highlights and photo gallery from ${conferenceData.title} keynote sessions, paper presentations, and gala events.`
};

export default function GalleryPage() {
  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Moments & Highlights
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Conference Gallery
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            Visual highlights from past keynote speeches, poster exhibitions, networking lunches, and gala events.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <SectionWrapper bgVariant="surface">
        <GalleryGrid items={galleryData} />
      </SectionWrapper>
    </PageContainer>
  );
}
