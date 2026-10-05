export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navigationConfig: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Committee", href: "/committee" },
  { label: "Program", href: "/program" },
  { label: "Call for Papers", href: "/call-for-papers" },
  { label: "Registration", href: "/registration" },
  { label: "Venue", href: "/venue" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const quickLinks: NavItem[] = [
  { label: "Important Dates", href: "/#important-dates" },
  { label: "Tracks & Themes", href: "/call-for-papers#tracks" },
  { label: "Keynote Speakers", href: "/speakers" },
  { label: "Submission Guidelines", href: "/call-for-papers#guidelines" },
  { label: "Registration Fees", href: "/registration#pricing" },
  { label: "Venue & Travel", href: "/venue" }
];
