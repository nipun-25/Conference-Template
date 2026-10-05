import React from "react";
import { CommitteeGroup as ICommitteeGroup } from "@/types/conference";
import { CommitteeCard } from "@/components/committee/CommitteeCard";

interface CommitteeGroupProps {
  group: ICommitteeGroup;
}

export const CommitteeGroup: React.FC<CommitteeGroupProps> = ({ group }) => {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
          {group.title}
        </h3>
        {group.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {group.description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {group.members.map((member) => (
          <CommitteeCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
