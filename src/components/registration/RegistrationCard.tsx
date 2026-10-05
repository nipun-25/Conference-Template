import React from "react";
import { RegistrationTier } from "@/types/conference";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Check, Sparkles } from "lucide-react";

interface RegistrationCardProps {
  tier: RegistrationTier;
  isEarlyBird?: boolean;
}

export const RegistrationCard: React.FC<RegistrationCardProps> = ({
  tier,
  isEarlyBird = true
}) => {
  const currentPrice = isEarlyBird && tier.price.earlyBirdAmount ? tier.price.earlyBirdAmount : tier.price.amount;
  const regularPrice = tier.price.amount;

  return (
    <div
      className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
        tier.popular
          ? "bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white shadow-2xl border-2 border-blue-500 scale-[1.02]"
          : "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="accent" className="px-3 py-1 shadow-md text-xs font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Most Popular Pass
          </Badge>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-xl font-extrabold ${tier.popular ? "text-white" : "text-slate-900 dark:text-slate-100"}`}>
            {tier.title}
          </h3>
        </div>

        {tier.description && (
          <p className={`text-xs mb-6 ${tier.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
            {tier.description}
          </p>
        )}

        {/* Pricing */}
        <div className="mb-6 pb-6 border-b border-slate-200/40 dark:border-slate-800">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-black font-mono ${tier.popular ? "text-white" : "text-blue-900 dark:text-blue-400"}`}>
              {tier.price.currency}{currentPrice}
            </span>
            <span className={`text-xs font-semibold ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
              / delegate
            </span>
          </div>

          {isEarlyBird && tier.price.earlyBirdAmount && tier.price.earlyBirdAmount < regularPrice && (
            <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span>Early bird discount active</span>
              <span className="line-through text-slate-400 font-mono">
                {tier.price.currency}{regularPrice}
              </span>
            </div>
          )}
        </div>

        {/* Benefits checklist */}
        <div className="space-y-3 mb-8">
          <span className={`text-xs font-bold uppercase tracking-wider ${tier.popular ? "text-slate-300" : "text-slate-400"}`}>
            What&apos;s Included:
          </span>
          <ul className="space-y-2.5">
            {tier.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs font-medium">
                <span className={`p-0.5 rounded-full shrink-0 mt-0.5 ${tier.popular ? "bg-teal-500 text-slate-950" : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"}`}>
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className={tier.popular ? "text-slate-200" : "text-slate-700 dark:text-slate-300"}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        href="/registration#form"
        variant={tier.popular ? "secondary" : "primary"}
        className="w-full"
      >
        Select {tier.title}
      </Button>
    </div>
  );
};
