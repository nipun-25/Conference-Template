import React from "react";
import { ScheduleSession } from "@/types/conference";
import { Badge } from "@/components/common/Badge";
import { Clock, MapPin, User, Tag } from "lucide-react";

interface ScheduleCardProps {
  session: ScheduleSession;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ session }) => {
  const typeBadgeVariant = {
    keynote: "primary",
    panel: "secondary",
    paper: "accent",
    workshop: "success",
    break: "outline",
    social: "warning"
  } as const;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-5 md:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      {/* Time & Type sidebar */}
      <div className="md:w-56 shrink-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 pb-3 md:pb-0 md:pr-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-400 font-mono mb-2">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{session.time}</span>
          </div>
          <Badge variant={typeBadgeVariant[session.type] || "outline"} className="capitalize">
            {session.type}
          </Badge>
        </div>
        {session.track && (
          <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium mt-2 md:mt-0">
            <Tag className="w-3 h-3 text-teal-600" />
            <span className="truncate">{session.track}</span>
          </div>
        )}
      </div>

      {/* Main session content */}
      <div className="flex-1 space-y-2">
        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
          {session.title}
        </h4>

        {session.speakerName && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <User className="w-3.5 h-3.5 text-blue-900 dark:text-blue-400 shrink-0" />
            <span>{session.speakerName}</span>
          </div>
        )}

        {session.description && (
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {session.description}
          </p>
        )}

        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 pt-1">
          <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
          <span>Location: {session.location}</span>
        </div>
      </div>
    </div>
  );
};
