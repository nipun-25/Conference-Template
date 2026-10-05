import React from "react";
import { Metadata } from "next";
import { scheduleData } from "@/data/schedule";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";

export const metadata: Metadata = {
  title: `Program Schedule | ${conferenceData.shortTitle}`,
  description: `Full day-by-day program schedule, keynote addresses, technical sessions, and workshops for ${conferenceData.title}.`
};

export default function ProgramPage() {
  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Agenda & Sessions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Program Schedule
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            3 days of inspiring keynotes, technical paper presentations, workshops, and networking events.
          </p>
        </div>
      </section>

      {/* Schedule Content */}
      <SectionWrapper bgVariant="surface">
        <ScheduleTimeline scheduleDays={scheduleData} />
      </SectionWrapper>
    </PageContainer>
  );
}
