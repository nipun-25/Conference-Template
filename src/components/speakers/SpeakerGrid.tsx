import React from "react";
import { Speaker } from "@/types/conference";
import { SpeakerCard } from "@/components/speakers/SpeakerCard";

interface SpeakerGridProps {
  speakers: Speaker[];
  layout?: "standard" | "featured-first" | "compact";
  className?: string;
}

export const SpeakerGrid: React.FC<SpeakerGridProps> = ({
  speakers,
  layout = "standard",
  className = ""
}) => {
  if (!speakers || speakers.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        No speakers found.
      </div>
    );
  }

  if (layout === "featured-first") {
    const featuredSpeaker = speakers.find((s) => s.featured) || speakers[0];
    const remainingSpeakers = speakers.filter((s) => s.id !== featuredSpeaker.id);

    return (
      <div className={`space-y-8 ${className}`}>
        {/* Featured Card */}
        <SpeakerCard speaker={featuredSpeaker} variant="featured" />

        {/* Grid for remaining */}
        {remainingSpeakers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {remainingSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} variant="standard" />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (layout === "compact") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} variant="compact" />
        ))}
      </div>
    );
  }

  // Standard responsive grid
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} speaker={speaker} variant="standard" />
      ))}
    </div>
  );
};
