import React from "react";
import Image from "next/image";
import { Sponsor } from "@/types/conference";

interface SponsorGridProps {
  sponsors: Sponsor[];
}

export const SponsorGrid: React.FC<SponsorGridProps> = ({ sponsors }) => {
  const platinum = sponsors.filter((s) => s.tier === "platinum");
  const gold = sponsors.filter((s) => s.tier === "gold");
  const silver = sponsors.filter((s) => s.tier === "silver" || s.tier === "bronze");
  const partners = sponsors.filter((s) => s.tier === "partner");

  const renderGroup = (title: string, list: Sponsor[], sizeClass: string) => {
    if (list.length === 0) return null;
    return (
      <div className="space-y-4 text-center">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {title}
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {list.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url || "#"}
              target={sponsor.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`relative ${sizeClass} rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all group overflow-hidden`}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold px-2 text-center">
                {sponsor.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10">
      {renderGroup("Platinum Sponsors", platinum, "w-48 h-24")}
      {renderGroup("Gold Sponsors", gold, "w-40 h-20")}
      {renderGroup("Silver & Bronze Sponsors", silver, "w-36 h-16")}
      {renderGroup("Academic & Media Partners", partners, "w-32 h-14")}
    </div>
  );
};
