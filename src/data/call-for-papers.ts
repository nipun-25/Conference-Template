import { ConferenceTrack } from "@/types/conference";

export const conferenceTracksData: ConferenceTrack[] = [
  {
    id: "track-1",
    title: "Track 1: Foundation Models & Efficient Deep Learning",
    description: "Architectures, compression techniques, parameter-efficient fine-tuning, and scalable neural networks.",
    topics: [
      "Sparse Transformers & Low-Rank Approximations",
      "Model Quantization, Pruning, & Distillation",
      "Multimodal Foundation Models",
      "Distributed & Federated Training Algorithms",
      "Neuromorphic & Energy-Aware Computing"
    ]
  },
  {
    id: "track-2",
    title: "Track 2: AI for Climate, Energy & Environment",
    description: "Applications of machine learning in environmental modeling, smart power grids, and climate resilience.",
    topics: [
      "Weather Forecasting & Climate Trend Prediction",
      "Smart Grid Management & Renewable Integration",
      "Precision Agriculture & Autonomous Farming",
      "Biodiversity Tracking & Remote Sensing",
      "Carbon Capture Process Optimization"
    ]
  },
  {
    id: "track-3",
    title: "Track 3: Trustworthy AI, Ethics & Governance",
    description: "Algorithmic transparency, accountability, safety protocols, and socio-technical policy frameworks.",
    topics: [
      "Explainable AI (XAI) & Interpretability Methods",
      "Bias Auditing & Algorithmic Fairness",
      "Data Privacy, Anonymization & Differential Privacy",
      "Safety Alignment & RLHF Guardrails",
      "International AI Standards & Governance Policy"
    ]
  },
  {
    id: "track-4",
    title: "Track 4: Quantum Machine Learning & Emerging Computing",
    description: "Intersection of quantum algorithms, high-performance computing, and next-generation intelligence.",
    topics: [
      "Variational Quantum Circuits & Quantum Neural Networks",
      "Hybrid Quantum-Classical Optimizations",
      "Quantum Machine Learning for Materials & Chemistry",
      "High-Performance Supercomputing for AI Workloads"
    ]
  }
];

export const submissionGuidelines = [
  "All submitted papers must be original and not currently under review by another conference or journal.",
  "Submissions must follow the standard double-column IEEE format (maximum 8 pages for regular papers, 4 pages for short/poster papers).",
  "Review process is double-blind: authors must remove names, affiliations, and self-referential citations from the initial submission PDF.",
  "All accepted and presented papers will be submitted for inclusion into IEEE Xplore / Springer LNCS digital libraries.",
  "Submissions must be made electronically via the Microsoft CMT portal before the submission deadline."
];
