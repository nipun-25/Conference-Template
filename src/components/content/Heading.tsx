import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  badge,
  align = "center",
  size = "md",
  className = ""
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  const titleSizes = {
    sm: "text-2xl md:text-3xl font-bold tracking-tight",
    md: "text-3xl md:text-4xl font-extrabold tracking-tight",
    lg: "text-4xl md:text-5xl font-black tracking-tight"
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-10 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 rounded-full dark:bg-blue-950 dark:text-blue-300">
          {badge}
        </span>
      )}
      <h2 className={`${titleSizes[size]} text-slate-900 dark:text-slate-100 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
