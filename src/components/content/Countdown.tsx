"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDateISO: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDateISO, className = "" }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDateISO) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDateISO]);

  if (!isMounted) {
    return (
      <div className={`grid grid-cols-4 gap-3 text-center max-w-lg mx-auto ${className}`}>
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="p-3 bg-white/10 rounded-xl backdrop-blur-sm animate-pulse">
            <div className="h-8 bg-white/20 rounded mb-1"></div>
            <div className="h-3 bg-white/20 rounded w-1/2 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <div className={`grid grid-cols-4 gap-3 sm:gap-4 text-center max-w-xl mx-auto ${className}`}>
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/10 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-800 shadow-xl"
        >
          <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-blue-400 font-mono">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-400 mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
