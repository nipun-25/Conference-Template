import React from "react";
import { Button } from "@/components/common/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryBtnText,
  primaryBtnHref,
  secondaryBtnText,
  secondaryBtnHref,
  className = ""
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 md:p-14 text-center shadow-2xl ${className}`}
    >
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-base md:text-xl text-blue-100/90 font-normal leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href={primaryBtnHref} variant="secondary" size="lg">
            {primaryBtnText}
          </Button>
          {secondaryBtnText && secondaryBtnHref && (
            <Button href={secondaryBtnHref} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              {secondaryBtnText}
            </Button>
          )}
        </div>
      </div>
      {/* Background ambient light */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
