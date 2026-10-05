import React from "react";
import { ImportantDate } from "@/types/conference";
import { Calendar, Clock } from "lucide-react";

interface ImportantDatesListProps {
  dates: ImportantDate[];
  className?: string;
}

export const ImportantDatesList: React.FC<ImportantDatesListProps> = ({ dates, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {dates.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col justify-between p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2.5 bg-blue-50 dark:bg-blue-950/60 rounded-xl text-blue-900 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5" />
              </span>
              {item.passed ? (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  Closed
                </span>
              ) : (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Upcoming
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
              {item.label}
            </h3>
            {item.note && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{item.note}</p>
            )}
          </div>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-sm font-semibold text-blue-900 dark:text-blue-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
