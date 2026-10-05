import React from "react";
import Image from "next/image";
import { CommitteeMember } from "@/types/conference";
import { UserCheck, MapPin } from "lucide-react";

interface CommitteeCardProps {
  member: CommitteeMember;
}

export const CommitteeCard: React.FC<CommitteeCardProps> = ({ member }) => {
  return (
    <div className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      {member.image ? (
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
          <UserCheck className="w-7 h-7" />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">
          {member.name}
        </h4>
        <p className="text-xs font-semibold text-blue-900 dark:text-blue-400 truncate">
          {member.role}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
          {member.institution}
        </p>
        {member.country && (
          <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 mt-1">
            <MapPin className="w-3 h-3" />
            <span>{member.country}</span>
          </div>
        )}
      </div>
    </div>
  );
};
