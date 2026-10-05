"use client";

import React, { useState } from "react";
import { conferenceData } from "@/data/conference";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/content/SectionWrapper";
import { Heading } from "@/components/content/Heading";
import { Button } from "@/components/common/Button";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <PageContainer>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 bg-blue-900/60 rounded-full border border-blue-700/50">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Secretariat
          </h1>
          <p className="text-lg text-blue-100/90 max-w-2xl mx-auto">
            Have questions regarding paper submission, registration, or sponsorship? Reach out to our organizing team.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <SectionWrapper bgVariant="surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                Secretariat Info
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our secretariat office handles author queries, registration verification, visa support letters, and partnership requests.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Secretariat
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {conferenceData.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone & Helpline
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {conferenceData.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Postal Address
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {conferenceData.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Mockup */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Thank you! Your message has been recorded. Our team will get back to you within 24 business hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-900 dark:text-blue-400" />
                  <span>Send an Online Inquiry</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john.doe@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Paper Submission / Registration Query"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please state your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </PageContainer>
  );
}
