import { Speaker } from "@/types/conference";

export const speakersData: Speaker[] = [
  {
    id: "spk-1",
    name: "Dr. Elena Rostova",
    designation: "Professor of Computer Science & AI Chair",
    institution: "ETH Zürich",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80",
    bio: "Dr. Elena Rostova is a world-renowned AI ethics scholar with over 150 peer-reviewed papers on trustworthy neural architecture and climate modeling.",
    topic: "Energy-Efficient Neural Architectures for Large-Scale Earth System Modeling",
    type: "keynote",
    featured: true,
    socials: {
      linkedin: "https://linkedin.com",
      website: "https://ethz.ch"
    }
  },
  {
    id: "spk-2",
    name: "Prof. Marcus Vance",
    designation: "Director, Sustainable Robotics Lab",
    institution: "MIT",
    country: "USA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop&q=80",
    bio: "Pioneer in autonomous robotics and low-power sensory processing for smart agriculture and ocean monitoring systems.",
    topic: "Autonomous Robotics in Ecological Monitoring and Disaster Response",
    type: "keynote",
    featured: true,
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  },
  {
    id: "spk-3",
    name: "Dr. Amina Al-Mansoor",
    designation: "Head of AI Research",
    institution: "Alan Turing Institute",
    country: "UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&q=80",
    bio: "Specialist in explainable machine learning, algorithmic fairness, and data privacy in healthcare systems.",
    topic: "Verifiable & Auditable AI Systems in Public Governance",
    type: "keynote",
    featured: true,
    socials: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "spk-4",
    name: "Dr. Kenji Takahashi",
    designation: "VP of Quantum Intelligence",
    institution: "RIKEN Center for Computational Science",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&q=80",
    bio: "Leading quantum computing research and hybrid classical-quantum machine learning algorithms.",
    topic: "Quantum-Enhanced Machine Learning for Material Discovery",
    type: "guest",
    featured: false
  },
  {
    id: "spk-5",
    name: "Dr. Sofia Rodriguez",
    designation: "Senior Scientist, Climate AI Initiative",
    institution: "University of Cambridge",
    country: "UK",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop&q=80",
    bio: "Focuses on predictive AI models for renewable energy grid balancing and carbon capture dynamics.",
    topic: "Predictive Analytics for Grid Integration of Renewable Energy",
    type: "speaker",
    featured: false
  },
  {
    id: "spk-6",
    name: "Prof. David Chen",
    designation: "Dean of Data Sciences",
    institution: "National University of Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&q=80",
    bio: "Authority on distributed edge intelligence, low-latency federated learning, and IoT sensor arrays.",
    topic: "Privacy-Preserving Federated Learning across Edge Devices",
    type: "speaker",
    featured: false
  },
  {
    id: "spk-7",
    name: "Dr. Priya Sharma",
    designation: "Lead Policy Researcher",
    institution: "UN Sustainable Technology Forum",
    country: "India",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&q=80",
    bio: "Advises international governing bodies on ethical framework standards for AI deployment in developing economies.",
    topic: "Equitable AI Governance: Lessons from the Global South",
    type: "panelist",
    featured: false
  },
  {
    id: "spk-8",
    name: "Dr. Henrik Lindqvist",
    designation: "Chief AI Architect",
    institution: "Nordic Climate Tech Alliance",
    country: "Sweden",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&q=80",
    bio: "Innovator in AI-driven smart grid optimizations and carbon accounting software platforms.",
    topic: "Decarbonization Pathways Acceleration through Deep Learning",
    type: "panelist",
    featured: false
  }
];
