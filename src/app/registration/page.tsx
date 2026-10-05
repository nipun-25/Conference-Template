import React from "react";
import { Metadata } from "next";
import { registrationTiers, registrationNotes } from "@/data/registration";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { PricingTable } from "@/components/registration/PricingTable";
import { CreditCard, AlertCircle, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Registration & Fees | ${conferenceData.shortTitle}`,
  description: `Delegate registration categories, early bird fees, student discounts, and registration guidelines for ${conferenceData.title}.`
};

export default function RegistrationPage() {
  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Passes & Tickets
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Conference Registration
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            Choose your delegate pass. Discounted early bird pricing is available until September 30, 2026.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <SectionWrapper bgVariant="surface" id="pricing">
        <Heading
          badge="Registration Rates"
          title="Select Your Registration Category"
          subtitle="All delegate passes include access to technical sessions, keynotes, conference kit, and dining."
        />
        <PricingTable tiers={registrationTiers} />
      </SectionWrapper>

      {/* Important Notes & Wire Payment Instructions */}
      <SectionWrapper id="notes">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-100">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>Registration Guidelines</span>
            </div>
            <ul className="space-y-3">
              {registrationNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 bg-gradient-to-br from-blue-950 to-indigo-950 text-white p-8 rounded-3xl shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">Payment Methods</h3>
              <p className="text-xs text-blue-100/80 mt-2 leading-relaxed">
                Accepted via major credit cards (Visa, MasterCard, American Express) or Direct Bank Wire Transfer.
              </p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl text-xs space-y-1">
              <span className="font-bold block text-teal-300">Bank Wire Reference:</span>
              <p className="font-mono text-[11px] text-slate-300">ICA2026-REG-[YOUR_PAPER_ID]</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Mockup */}
      <SectionWrapper bgVariant="surface" id="faq">
        <Heading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Answers to common queries regarding registration, refunds, and attendance."
        />
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "Can I transfer my registration pass to a colleague if I cannot attend?",
              a: "Yes, written pass transfer requests are accepted up to 14 days prior to the conference start date by contacting secretariat@icai2026.org."
            },
            {
              q: "Does virtual registration allow me to present my paper?",
              a: "Yes, authors registered under the Virtual Pass will be assigned a live online presentation slot during parallel technical sessions."
            },
            {
              q: "Are student identity cards verified?",
              a: "Yes, student registrants must present proof of enrolment (valid student ID or official university letterhead) upon online registration."
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2"
            >
              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-900 dark:text-blue-400 shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </PageContainer>
  );
}
