import React from "react";
import { SDGItem } from "@/types/conference";
import { Target } from "lucide-react";

interface SDGGridProps {
  sdgs: SDGItem[];
  className?: string;
}

export const SDGGrid: React.FC<SDGGridProps> = ({ sdgs, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {sdgs.map((sdg) => (
        <div
          key={sdg.number}
          className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
        >
          {/* Top color bar */}
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: sdg.color }}
          />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-md"
                style={{ backgroundColor: sdg.color }}
              >
                {sdg.number}
              </span>
              <Target className="w-6 h-6 text-slate-300 dark:text-slate-700" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              SDG {sdg.number}: {sdg.title}
            </h3>
            {sdg.description && (
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {sdg.description}
              </p>
            )}
          </div>
          <div className="mt-4 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            UN Sustainable Goal
          </div>
        </div>
      ))}
    </div>
  );
};
