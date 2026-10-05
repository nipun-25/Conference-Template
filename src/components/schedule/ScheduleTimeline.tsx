"use client";

import React, { useState } from "react";
import { ScheduleDay } from "@/types/conference";
import { ScheduleCard } from "@/components/schedule/ScheduleCard";
import { Calendar } from "lucide-react";

interface ScheduleTimelineProps {
  scheduleDays: ScheduleDay[];
}

export const ScheduleTimeline: React.FC<ScheduleTimelineProps> = ({ scheduleDays }) => {
  const [activeDay, setActiveDay] = useState<number>(scheduleDays[0]?.day || 1);

  const selectedDayData = scheduleDays.find((d) => d.day === activeDay) || scheduleDays[0];

  return (
    <div className="space-y-8">
      {/* Day Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {scheduleDays.map((dayItem) => {
          const isActive = dayItem.day === activeDay;
          return (
            <button
              key={dayItem.day}
              onClick={() => setActiveDay(dayItem.day)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Day {dayItem.day}</span>
              <span className="text-xs font-normal opacity-80">({dayItem.date})</span>
            </button>
          );
        })}
      </div>

      {/* Selected Day Title Banner */}
      {selectedDayData && (
        <div className="text-center pb-2">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            {selectedDayData.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            {selectedDayData.sessions.length} Scheduled Sessions
          </p>
        </div>
      )}

      {/* Timeline sessions list */}
      {selectedDayData && (
        <div className="space-y-4 max-w-4xl mx-auto">
          {selectedDayData.sessions.map((session) => (
            <ScheduleCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </div>
  );
};
