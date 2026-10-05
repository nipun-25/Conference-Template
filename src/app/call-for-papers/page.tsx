import React from "react";
import { Metadata } from "next";
import { conferenceTracksData, submissionGuidelines } from "@/data/call-for-papers";
import { importantDatesData } from "@/data/important-dates";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { ImportantDatesList } from "@/components/content/ImportantDatesList";
import { Button } from "@/components/common/Button";
import { Layers, FileText, Upload, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: `Call for Papers | ${conferenceData.shortTitle}`,
  description: `Submit your original research papers to ${conferenceData.title}. Review tracks, submission guidelines, formatting rules, and deadlines.`
};

export default function CallForPapersPage() {
  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Research Submissions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Call for Papers
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            We invite high-quality, original research paper contributions across four technical tracks.
          </p>
        </div>
      </section>

      {/* Tracks Section */}
      <SectionWrapper bgVariant="surface" id="tracks">
        <Heading
          badge="Tracks & Scope"
          title="Technical Research Tracks"
          subtitle="Submit your work to one of the following specialized technical tracks."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conferenceTracksData.map((track) => (
            <div
              key={track.id}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
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

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Sample Topics:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {track.topics.map((t, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Submission Guidelines */}
      <SectionWrapper id="guidelines">
        <Heading
          badge="Instructions"
          title="Submission Guidelines & Peer Review"
          subtitle="Please ensure your manuscript adheres strictly to the following requirements."
        />
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm space-y-6">
          <div className="space-y-4">
            {submissionGuidelines.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <FileText className="w-4 h-4 text-blue-900 dark:text-blue-400" />
              <span>IEEE PDF eXpress Compatible Format Required</span>
            </div>
            <Button
              href="https://example.com/submission-portal"
              variant="secondary"
              external
            >
              <span>Submit via CMT Portal</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Deadlines */}
      <SectionWrapper bgVariant="surface" id="deadlines">
        <Heading
          badge="Important Dates"
          title="Submission Milestones"
          subtitle="Mark these critical deadlines in your research calendar."
        />
        <ImportantDatesList dates={importantDatesData} />
      </SectionWrapper>
    </PageContainer>
  );
}
