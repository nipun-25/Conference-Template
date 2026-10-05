"use client";

import React, { useState } from "react";
import { RegistrationTier } from "@/types/conference";
import { RegistrationCard } from "@/components/registration/RegistrationCard";

interface PricingTableProps {
  tiers: RegistrationTier[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ tiers }) => {
  const [isEarlyBird, setIsEarlyBird] = useState(true);

  return (
    <div className="space-y-8">
      {/* Toggle button */}
      <div className="flex items-center justify-center">
        <div className="bg-slate-200 dark:bg-slate-800 p-1.5 rounded-2xl flex items-center gap-1 shadow-inner">
          <button
            onClick={() => setIsEarlyBird(true)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isEarlyBird
                ? "bg-blue-900 text-white shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            Early Bird Rates (Save up to 30%)
          </button>
          <button
            onClick={() => setIsEarlyBird(false)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              !isEarlyBird
                ? "bg-blue-900 text-white shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            Standard Rates
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiers.map((tier) => (
          <RegistrationCard key={tier.id} tier={tier} isEarlyBird={isEarlyBird} />
        ))}
      </div>
    </div>
  );
};
