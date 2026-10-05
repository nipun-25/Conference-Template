export type SpeakerType = "keynote" | "guest" | "speaker" | "panelist";

export interface Speaker {
  id: string;
  name: string;
  designation?: string;
  institution?: string;
  country?: string;
  image?: string;
  bio?: string;
  topic?: string;
  type?: SpeakerType;
  featured?: boolean;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export type CommitteeCategory =
  | "patron"
  | "chair"
  | "convener"
  | "organizing"
  | "advisory"
  | "technical"
  | string;

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  country?: string;
  image?: string;
  category: CommitteeCategory;
  bio?: string;
}

export interface CommitteeGroup {
  category: CommitteeCategory;
  title: string;
  description?: string;
  members: CommitteeMember[];
}

export type SessionType = "keynote" | "panel" | "paper" | "workshop" | "break" | "social";

export interface ScheduleSession {
  id: string;
  day: number;
  date: string;
  time: string;
  title: string;
  speakerId?: string;
  speakerName?: string;
  location: string;
  type: SessionType;
  description?: string;
  track?: string;
}

export interface ScheduleDay {
  day: number;
  date: string;
  title: string;
  sessions: ScheduleSession[];
}

export interface RegistrationTier {
  id: string;
  title: string;
  description?: string;
  price: {
    currency: string;
    amount: number;
    earlyBirdAmount?: number;
  };
  category: "student" | "faculty" | "researcher" | "delegate" | "international";
  benefits: string[];
  popular?: boolean;
}

export interface ImportantDate {
  id: string;
  label: string;
  date: string;
  note?: string;
  passed?: boolean;
}

export type SponsorTier = "platinum" | "gold" | "silver" | "bronze" | "partner";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string;
  url?: string;
  category?: string;
}

export interface SDGItem {
  number: number;
  title: string;
  description?: string;
  color: string;
  icon?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface ConferenceTrack {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ConferenceInfo {
  title: string;
  shortTitle: string;
  tagline: string;
  theme: string;
  description: string;
  date: string;
  startDateISO: string; // For countdown
  endDateISO: string;
  venue: string;
  city: string;
  country: string;
  organizer: {
    name: string;
    logo?: string;
    website?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: SocialLink[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface VenueInfo {
  name: string;
  address: string;
  city: string;
  country: string;
  description: string;
  mapEmbedUrl: string;
  transportation: {
    type: string;
    details: string;
  }[];
  accommodation: {
    name: string;
    distance: string;
    rating?: string;
    url?: string;
  }[];
}
