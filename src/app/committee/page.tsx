import React from "react";
import { Metadata } from "next";
import { committeeData } from "@/data/committee";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { CommitteeGroup } from "@/components/committee/CommitteeGroup";

export const metadata: Metadata = {
  title: `Committee Members | ${conferenceData.shortTitle}`,
  description: `Organizing committee, advisory board, and technical program chairs for ${conferenceData.title}.`
};

export default function CommitteePage() {
  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Leadership & Steering
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Conference Committee
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            Meet the international patrons, general chairs, advisory board, and technical review committee.
          </p>
        </div>
      </section>

      {/* Committee Groups */}
      <SectionWrapper bgVariant="surface">
        <div className="space-y-16">
          {committeeData.map((group) => (
            <CommitteeGroup key={group.category} group={group} />
          ))}
        </div>
      </SectionWrapper>
    </PageContainer>
  );
}
