import React from "react";
import { VenueInfo } from "@/types/conference";
import { MapPin, Plane, Hotel, Navigation } from "lucide-react";

interface VenueCardProps {
  venue: VenueInfo;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <div className="space-y-12">
      {/* Overview & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Official Venue</span>
          </div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">
            {venue.name}
          </h3>
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {venue.address}, {venue.city}, {venue.country}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {venue.description}
          </p>
        </div>

        {/* Map Embed Container */}
        <div className="lg:col-span-6 h-[340px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md relative bg-slate-100 dark:bg-slate-900">
          <iframe
            src={venue.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Conference Venue Location Map"
          />
        </div>
      </div>

      {/* Transportation & Accommodations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
        {/* Transportation */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-extrabold text-slate-900 dark:text-slate-100">
            <Plane className="w-5 h-5 text-blue-900 dark:text-blue-400" />
            <span>Transportation & Getting Here</span>
          </div>
          <div className="space-y-3">
            {venue.transportation.map((item, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {item.type}
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-extrabold text-slate-900 dark:text-slate-100">
            <Hotel className="w-5 h-5 text-teal-600" />
            <span>Recommended Partner Hotels</span>
          </div>
          <div className="space-y-3">
            {venue.accommodation.map((item, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {item.name}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.distance} {item.rating ? `• ${item.rating}` : ""}
                  </p>
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-xl"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
