import { CommitteeGroup } from "@/types/conference";

export const committeeData: CommitteeGroup[] = [
  {
    category: "patron",
    title: "Chief Patrons & Patrons",
    description: "Distinguished leadership providing strategic vision and oversight.",
    members: [
      {
        id: "com-1",
        name: "Prof. Arthur Pendelton",
        role: "Chief Patron & President",
        institution: "Global Research University, Geneva",
        country: "Switzerland",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
        category: "patron"
      },
      {
        id: "com-2",
        name: "Dr. Marianne Weber",
        role: "Patron & Director General",
        institution: "European Institute for Technological Advancement",
        country: "Germany",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80",
        category: "patron"
      }
    ]
  },
  {
    category: "chair",
    title: "Conference Chairs & Conveners",
    description: "Operational and academic steering chairs for ICAI-2026.",
    members: [
      {
        id: "com-3",
        name: "Prof. Vikram Sethi",
        role: "General Chair",
        institution: "Department of AI, Imperial College London",
        country: "UK",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
        category: "chair"
      },
      {
        id: "com-4",
        name: "Dr. Beatrice Dupont",
        role: "Co-General Chair",
        institution: "Sorbonne University",
        country: "France",
        image: "https://images.unsplash.com/photo-1580894732413-a70d2a840e1c?w=400&h=400&fit=crop&q=80",
        category: "chair"
      },
      {
        id: "com-5",
        name: "Dr. Sarah Jenkins",
        role: "Organizing Convener",
        institution: "Swiss Federal AI Center",
        country: "Switzerland",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
        category: "chair"
      }
    ]
  },
  {
    category: "advisory",
    title: "International Advisory Board",
    description: "Globally acclaimed academics and industry leaders providing peer advice.",
    members: [
      {
        id: "com-6",
        name: "Prof. Carlos Mendez",
        role: "Advisory Member",
        institution: "University of Barcelona",
        country: "Spain",
        category: "advisory"
      },
      {
        id: "com-7",
        name: "Dr. Mei-Ling Zhou",
        role: "Advisory Member",
        institution: "Tsinghua University",
        country: "China",
        category: "advisory"
      },
      {
        id: "com-8",
        name: "Prof. Robert O'Connor",
        role: "Advisory Member",
        institution: "Stanford University",
        country: "USA",
        category: "advisory"
      },
      {
        id: "com-9",
        name: "Dr. Fatimah Al-Hassan",
        role: "Advisory Member",
        institution: "KAUST",
        country: "Saudi Arabia",
        category: "advisory"
      }
    ]
  },
  {
    category: "technical",
    title: "Technical Program Committee",
    description: "Reviewers and track chairs ensuring highest peer-review standards.",
    members: [
      {
        id: "com-10",
        name: "Dr. Lucas Meyer",
        role: "Technical Chair (Track 1: Foundation Models)",
        institution: "TU Munich",
        country: "Germany",
        category: "technical"
      },
      {
        id: "com-11",
        name: "Dr. Ananya Roy",
        role: "Technical Chair (Track 2: Sustainable Systems)",
        institution: "IIT Delhi",
        country: "India",
        category: "technical"
      },
      {
        id: "com-12",
        name: "Dr. Thomas Wright",
        role: "Technical Chair (Track 3: Ethics & Governance)",
        institution: "University of Oxford",
        country: "UK",
        category: "technical"
      },
      {
        id: "com-13",
        name: "Dr. Camila Silva",
        role: "Technical Member",
        institution: "University of São Paulo",
        country: "Brazil",
        category: "technical"
      }
    ]
  }
];
