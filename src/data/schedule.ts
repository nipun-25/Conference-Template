import { ScheduleDay } from "@/types/conference";

export const scheduleData: ScheduleDay[] = [
  {
    day: 1,
    date: "November 20, 2026",
    title: "Day 1: Opening & Keynotes",
    sessions: [
      {
        id: "s1-1",
        day: 1,
        date: "2026-11-20",
        time: "08:30 - 09:30 AM",
        title: "Registration & Morning Networking Coffee",
        location: "Grand Foyer",
        type: "social",
        description: "Badge collection, welcome packages, and light refreshments."
      },
      {
        id: "s1-2",
        day: 1,
        date: "2026-11-20",
        time: "09:30 - 10:15 AM",
        title: "Official Opening Ceremony & Inaugural Address",
        speakerName: "Prof. Arthur Pendelton & Dignitaries",
        location: "Auditorium A",
        type: "keynote",
        description: "Opening remarks by the conference patrons and host institution leadership."
      },
      {
        id: "s1-3",
        day: 1,
        date: "2026-11-20",
        time: "10:15 - 11:30 AM",
        title: "Keynote 1: Energy-Efficient Neural Architectures for Large-Scale Earth System Modeling",
        speakerId: "spk-1",
        speakerName: "Dr. Elena Rostova",
        location: "Auditorium A",
        type: "keynote",
        description: "Exploration of novel sparse transformer designs reducing computational power requirements for climate simulation by up to 60%."
      },
      {
        id: "s1-4",
        day: 1,
        date: "2026-11-20",
        time: "11:30 - 12:00 PM",
        title: "Tea & Poster Session 1",
        location: "Exhibition Hall B",
        type: "break"
      },
      {
        id: "s1-5",
        day: 1,
        date: "2026-11-20",
        time: "12:00 - 01:30 PM",
        title: "Paper Session 1A: Green Machine Learning & Hardware Acceleration",
        location: "Hall 1",
        type: "paper",
        track: "Sustainable Systems",
        description: "Presentation of peer-reviewed paper submissions on hardware-aware model compression and neuromorphic computing."
      },
      {
        id: "s1-6",
        day: 1,
        date: "2026-11-20",
        time: "12:00 - 01:30 PM",
        title: "Paper Session 1B: Algorithmic Fairness & Ethical AI Frameworks",
        location: "Hall 2",
        type: "paper",
        track: "Ethics & Governance",
        description: "Contributed presentations on bias auditing tools and decentralized governance models."
      },
      {
        id: "s1-7",
        day: 1,
        date: "2026-11-20",
        time: "01:30 - 02:30 PM",
        title: "Networking Lunch",
        location: "Main Dining Pavilion",
        type: "break"
      },
      {
        id: "s1-8",
        day: 1,
        date: "2026-11-20",
        time: "02:30 - 04:00 PM",
        title: "Panel Discussion: Global Regulations & AI Safety Protocols",
        speakerId: "spk-3",
        speakerName: "Dr. Amina Al-Mansoor & International Experts",
        location: "Auditorium A",
        type: "panel",
        description: "A cross-border panel discussing compliance with international regulatory frameworks."
      }
    ]
  },
  {
    day: 2,
    date: "November 21, 2026",
    title: "Day 2: Technical Sessions & Industry Highlights",
    sessions: [
      {
        id: "s2-1",
        day: 2,
        date: "2026-11-21",
        time: "09:00 - 10:15 AM",
        title: "Keynote 2: Autonomous Robotics in Ecological Monitoring",
        speakerId: "spk-2",
        speakerName: "Prof. Marcus Vance",
        location: "Auditorium A",
        type: "keynote",
        description: "Field deployment lessons from autonomous sea drone fleets tracking micro-plastic density and marine health."
      },
      {
        id: "s2-2",
        day: 2,
        date: "2026-11-21",
        time: "10:30 - 12:30 PM",
        title: "Hands-on Workshop: Building Auditable ML Pipelines",
        location: "Workshop Room C",
        type: "workshop",
        description: "Interactive session on implementing audit trails and model lineage tools in production ML repositories."
      },
      {
        id: "s2-3",
        day: 2,
        date: "2026-11-21",
        time: "01:30 - 03:00 PM",
        title: "Paper Session 2A: Quantum & Foundation Model Paradigms",
        location: "Hall 1",
        type: "paper",
        track: "Foundation Models"
      },
      {
        id: "s2-4",
        day: 2,
        date: "2026-11-21",
        time: "07:00 - 10:00 PM",
        title: "Gala Dinner & Best Paper Awards Ceremony",
        location: "Grand Ballroom, InterContinental Geneva",
        type: "social",
        description: "Celebratory evening featuring local Swiss cultural performances and official presentation of Best Paper awards."
      }
    ]
  },
  {
    day: 3,
    date: "November 22, 2026",
    title: "Day 3: Valedictory & Future Directions",
    sessions: [
      {
        id: "s3-1",
        day: 3,
        date: "2026-11-22",
        time: "09:30 - 11:00 AM",
        title: "Keynote 3: Quantum-Enhanced Machine Learning for Material Discovery",
        speakerId: "spk-4",
        speakerName: "Dr. Kenji Takahashi",
        location: "Auditorium A",
        type: "keynote"
      },
      {
        id: "s3-2",
        day: 3,
        date: "2026-11-22",
        time: "11:30 - 01:00 PM",
        title: "Valedictory Ceremony & ICAI-2027 Declaration",
        location: "Auditorium A",
        type: "social",
        description: "Closing summary by track chairs, passing of the conference torch, and closing ceremony."
      }
    ]
  }
];
