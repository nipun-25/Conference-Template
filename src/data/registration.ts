import { RegistrationTier } from "@/types/conference";

export const registrationTiers: RegistrationTier[] = [
  {
    id: "reg-student",
    title: "Student Delegate",
    description: "For registered full-time undergraduate, master, and PhD students.",
    category: "student",
    price: {
      currency: "$",
      amount: 250,
      earlyBirdAmount: 180
    },
    benefits: [
      "Access to all Keynotes & Technical Sessions",
      "Conference Kit & Digital Proceedings",
      "Daily Coffee Breaks & Lunches",
      "Certificate of Participation / Presentation",
      "Poster Presentation Rights"
    ],
    popular: false
  },
  {
    id: "reg-faculty",
    title: "Academic & Researcher",
    description: "For university professors, academic faculty, and research scientists.",
    category: "faculty",
    price: {
      currency: "$",
      amount: 450,
      earlyBirdAmount: 350
    },
    benefits: [
      "Full Access to all Technical Sessions & Workshops",
      "Paper Presentation & Publication Rights",
      "Conference Kit & Hardcopy Proceedings Summary",
      "Daily Lunch & Networking Breaks",
      "Invitation to Welcome Reception",
      "Certificate of Presentation"
    ],
    popular: true
  },
  {
    id: "reg-industry",
    title: "Industry & Corporate Delegate",
    description: "For corporate executives, industry researchers, and technology vendors.",
    category: "delegate",
    price: {
      currency: "$",
      amount: 750,
      earlyBirdAmount: 600
    },
    benefits: [
      "All Academic & Technical Session Access",
      "Exclusive Industry Networking Lounge Access",
      "Pass to Gala Dinner & Awards Ceremony",
      "Full Digital & Print Proceedings Package",
      "Exhibitor & Demo Hall VIP Pass"
    ],
    popular: false
  },
  {
    id: "reg-intl",
    title: "International Virtual Pass",
    description: "For international participants attending sessions online.",
    category: "international",
    price: {
      currency: "$",
      amount: 150,
      earlyBirdAmount: 120
    },
    benefits: [
      "Live HD Streaming Access to all Keynotes & Tracks",
      "Interactive Q&A Session Participation",
      "Digital Proceedings & Presentation Slides",
      "E-Certificate of Participation"
    ],
    popular: false
  }
];

export const registrationNotes = [
  "Early Bird registration deadline: September 30, 2026.",
  "At least one author per accepted paper must register at the Author rate (Faculty or Student) by October 15, 2026 for the paper to be included in the proceedings.",
  "Student registrants must upload proof of student status (valid student ID card or letter from institution) during registration.",
  "Registration fees cover admission, conference materials, coffee breaks, and lunches during conference days."
];
