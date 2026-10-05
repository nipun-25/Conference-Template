"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/config/navigation";

interface NavbarProps {
  items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
              isActive
                ? "text-blue-900 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60"
                : "text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
