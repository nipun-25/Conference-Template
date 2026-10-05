"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "@/config/navigation";
import { X, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/common/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  conferenceTitle: string;
  dateStr: string;
  venueStr: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  items,
  conferenceTitle,
  dateStr,
  venueStr
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-slate-900 z-50 flex flex-col justify-between shadow-2xl p-6 lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="font-extrabold text-blue-900 dark:text-blue-400 text-lg">
                  {conferenceTitle}
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-300 font-bold"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-900 dark:text-blue-400 shrink-0" />
                  <span>{dateStr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-900 dark:text-blue-400 shrink-0" />
                  <span>{venueStr}</span>
                </div>
              </div>

              <Button href="/registration" className="w-full" onClick={onClose}>
                Register Now
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
