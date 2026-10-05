import { ConferenceInfo } from "@/types/conference";

export const conferenceData: ConferenceInfo = {
  title: "International Conference on Artificial Intelligence & Sustainable Innovation",
  shortTitle: "ICAI-2026",
  tagline: "Bridging Cutting-Edge AI Research with Global Sustainability Goals",
  theme: "AI for Humanity: Ethics, Scale, and Sustainable Impact",
  description:
    "ICAI-2026 brings together international researchers, industry pioneers, policy makers, and graduate scholars to explore breakthrough developments in artificial intelligence, machine learning, and their applications toward global sustainable development goals.",
  date: "November 20–22, 2026",
  startDateISO: "2026-11-20T09:00:00Z",
  endDateISO: "2026-11-22T18:00:00Z",
  venue: "Global Convention Center & Technology Hub",
  city: "Geneva",
  country: "Switzerland",
  organizer: {
    name: "Global Institute of Advanced Research & Sustainability",
    website: "https://example.org"
  },
  contact: {
    email: "secretariat@icai2026.org",
    phone: "+41 22 555 0199",
    address: "Rue du Grand-Pré 42, 1202 Genève, Switzerland"
  },
  socials: [
    { platform: "Twitter / X", url: "https://twitter.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "YouTube", url: "https://youtube.com" }
  ],
  stats: [
    { label: "Keynote Speakers", value: "12+" },
    { label: "Research Tracks", value: "6" },
    { label: "Expected Delegates", value: "800+" },
    { label: "Participating Countries", value: "45+" }
  ]
};
