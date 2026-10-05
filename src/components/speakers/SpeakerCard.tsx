"use client";

import React from "react";
import Image from "next/image";
import { Speaker } from "@/types/conference";
import { Badge } from "@/components/common/Badge";
import { Globe, Share2, ExternalLink, BookOpen } from "lucide-react";

interface SpeakerCardProps {
  speaker: Speaker;
  variant?: "standard" | "compact" | "featured";
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, variant = "standard" }) => {
  const badgeVariants = {
    keynote: "primary",
    guest: "secondary",
    speaker: "accent",
    panelist: "outline"
  } as const;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
        {speaker.image && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-blue-100 dark:border-slate-700">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
              {speaker.name}
            </h4>
            {speaker.type && (
              <Badge variant={badgeVariants[speaker.type] || "primary"}>
                {speaker.type}
              </Badge>
            )}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
            {speaker.designation}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 truncate font-semibold">
            {speaker.institution} {speaker.country ? `• ${speaker.country}` : ""}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-md hover:shadow-xl transition-all overflow-hidden">
        {speaker.image && (
          <div className="md:col-span-5 relative min-h-[300px] md:min-h-[360px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {speaker.type && (
              <div className="absolute top-4 left-4">
                <Badge variant="primary" className="text-xs px-3 py-1 shadow-md">
                  Keynote Speaker
                </Badge>
              </div>
            )}
          </div>
        )}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-400 uppercase tracking-wider mb-2">
              <Globe className="w-4 h-4" />
              <span>{speaker.institution} {speaker.country ? `• ${speaker.country}` : ""}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100">
              {speaker.name}
            </h3>
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mt-1">
              {speaker.designation}
            </p>

            {speaker.topic && (
              <div className="mt-4 p-4 bg-blue-50/80 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wide mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Keynote Address Topic</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  &ldquo;{speaker.topic}&rdquo;
                </p>
              </div>
            )}

            {speaker.bio && (
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {speaker.bio}
              </p>
            )}
          </div>

          {speaker.socials && (
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-500">
              {speaker.socials.linkedin && (
                <a
                  href={speaker.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 hover:text-blue-900 rounded-xl transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              )}
              {speaker.socials.twitter && (
                <a
                  href={speaker.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 hover:text-blue-900 rounded-xl transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
              {speaker.socials.website && (
                <a
                  href={speaker.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 hover:text-blue-900 rounded-xl transition-colors"
                  aria-label="Personal Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard Card
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      {speaker.image && (
        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {speaker.type && (
            <div className="absolute top-3 left-3">
              <Badge variant={badgeVariants[speaker.type] || "primary"} className="capitalize">
                {speaker.type}
              </Badge>
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
            {speaker.name}
          </h3>
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
            {speaker.designation}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {speaker.institution} {speaker.country ? `• ${speaker.country}` : ""}
          </p>

          {speaker.topic && (
            <p className="mt-3 text-xs italic font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              &ldquo;{speaker.topic}&rdquo;
            </p>
          )}
        </div>

        {speaker.bio && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
            {speaker.bio}
          </p>
        )}
      </div>
    </div>
  );
};
