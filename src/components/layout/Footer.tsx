import React from "react";
import Link from "next/link";
import { conferenceData } from "@/data/conference";
import { quickLinks, navigationConfig } from "@/config/navigation";
import { Globe, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Conference info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">
                {conferenceData.shortTitle}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {conferenceData.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Organized by{" "}
              <span className="font-semibold text-slate-200">
                {conferenceData.organizer.name}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Pages
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navigationConfig.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Secretariat */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Secretariat Contact
            </h3>
            <div className="text-sm space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{conferenceData.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{conferenceData.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{conferenceData.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {conferenceData.title}. All rights reserved.</p>
          <p className="text-slate-400 font-medium">Universal Conference Website Template</p>
        </div>
      </div>
    </footer>
  );
};
