export type QuestId =
  | "map"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "achievements"
  | "contact";

export const QUESTS: {
  id: Exclude<QuestId, "map">;
  label: string;
  questNumber: number;
  pinColor: string;
  mapPosition: { x: number; y: number };
  pinSrc: string;
  description: string;
}[] = [
  {
    id: "about",
    label: "About Me",
    questNumber: 1,
    pinColor: "#6b3fa0",
    mapPosition: { x: 24, y: 28 },
    pinSrc: "/quest/pin-about.png",
    description: "The purple castle",
  },
  {
    id: "skills",
    label: "Skills",
    questNumber: 2,
    pinColor: "#2f6fed",
    mapPosition: { x: 66, y: 16 },
    pinSrc: "/quest/pin-skills.png",
    description: "Crystal mountain peak",
  },
  {
    id: "projects",
    label: "Projects",
    questNumber: 3,
    pinColor: "#2f8f5b",
    mapPosition: { x: 76, y: 52 },
    pinSrc: "/quest/pin-projects.png",
    description: "Forest manor of builds",
  },
  {
    id: "experience",
    label: "Experience",
    questNumber: 4,
    pinColor: "#c9a227",
    mapPosition: { x: 16, y: 66 },
    pinSrc: "/quest/pin-experience.png",
    description: "Harbor of voyages",
  },
  {
    id: "achievements",
    label: "Achievements",
    questNumber: 5,
    pinColor: "#d97706",
    mapPosition: { x: 46, y: 40 },
    pinSrc: "/quest/pin-achievements.png",
    description: "Ancient ruins of honor",
  },
  {
    id: "contact",
    label: "Contact",
    questNumber: 6,
    pinColor: "#c45c5c",
    mapPosition: { x: 84, y: 68 },
    pinSrc: "/quest/pin-contact.png",
    description: "The lighthouse signal",
  },
];

export const QUEST_ORDER: QuestId[] = [
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "contact",
];

/** Geographic trail order kept for optional future use */
export const MAP_PATH_ORDER: Exclude<QuestId, "map">[] = [
  "about",
  "skills",
  "achievements",
  "projects",
  "experience",
  "contact",
];

export const profile = {
  name: "Nancy Verma",
  brand: "Nancy Verma",
  tagline: "Portfolio",
  email: "nancy2005nov@gmail.com",
  phone: "+91 9821657484",
  location: "Jaipur, India",
  headline: "Every great journey starts with a quest",
  bio: "Aspiring software engineer and AI & ML explorer charting paths through code, remote sensing, and human-centered tech. Selected as a Google WE Scholar and building products that turn curiosity into impact.",
  education: {
    school: "Manipal University Jaipur",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    years: "2023 – 2027",
    cgpa: "9.79 / 10",
  },
  links: {
    github: "https://github.com/Nancy20052020",
    linkedin: "https://linkedin.com/in/nancy-verma",
    leetcode: "https://leetcode.com/u/Nancy2005",
    portfolio: "https://nancy20052020.github.io/Portfolio",
  },
};

export const skills = {
  languages: ["Python", "C++", "HTML", "JavaScript", "CSS"],
  machineLearning: ["TensorFlow", "Keras", "Scikit-Learn", "PyTorch"],
  tools: ["Git", "Docker", "VS Code", "LaTeX", "Google Colab", "Graphviz"],
  softSkills: ["Leadership", "Communication", "Team Collaboration"],
};

export type ProjectLinks = {
  github?: string;
  earthEngine?: string;
  drive?: string;
};

export const projects: {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLinks;
  accent: string;
}[] = [
  {
    title: "AutEye",
    description:
      "Web platform leveraging eye-tracking data and ML models for early autism detection — improving accessibility and awareness.",
    tech: ["Python", "Flask", "ML", "JavaScript"],
    links: {
      github: "https://github.com/Nancy20052020",
    },
    accent: "#6b3fa0",
  },
  {
    title: "Multi PDF Bot",
    description:
      "Conversational Q&A over multiple PDFs with OpenAI GPT-3.5 and ElevenLabs TTS for spoken answers.",
    tech: ["Python", "Flask", "OpenAI", "ElevenLabs"],
    links: {
      github: "https://github.com/Nancy20052020",
    },
    accent: "#2f6fed",
  },
  {
    title: "Earth Lens",
    description:
      "Remote sensing analysis on Google Earth Engine — satellite imagery workflows from the Indian Truth Academy GIS internship.",
    tech: ["GEE", "Remote Sensing", "GIS", "JS"],
    links: {
      earthEngine: "https://code.earthengine.google.com/1f478591ab593ffe9bcde0a27be6fc48",
      drive: "https://drive.google.com/file/d/1RZha6dBhiwGYqZHKaGM_WiZF5jK6NnmV/view?usp=drivesdk",
    },
    accent: "#2f8f5b",
  },
  {
    title: "Terra Trace",
    description:
      "GIS & Earth Engine exploration project mapping environmental signals — companion quest from the remote sensing internship.",
    tech: ["GEE", "GIS", "Python", "Mapping"],
    links: {
      earthEngine: "https://code.earthengine.google.com/170c492464d96e8cc66d885f25702049",
      drive: "https://drive.google.com/file/d/1TFvuLC2Rm8a2FTUSVplmug-8RdcGejW3/view?usp=drivesdk",
    },
    accent: "#c9a227",
  },
];

export const experience = [
  {
    title: "Software Engineering Intern",
    org: "Grids App LLC",
    period: "Present",
    detail:
      "Building product features and shipping software in a fast-paced engineering environment.",
    current: true,
  },
  {
    title: "Remote Sensing & GIS Intern",
    org: "Indian Truth Academy",
    period: "May – 2 July",
    detail:
      "Hands-on satellite imagery, GIS workflows, and Google Earth Engine projects for real-world geospatial analysis.",
  },
  {
    title: "WE Scholar",
    org: "Google & TalentSprint",
    period: "2024",
    detail:
      "Selected from over 30,000 applicants for an intensive Data Structures & Algorithms program.",
  },
  {
    title: "Google Immersion Week",
    org: "Google",
    period: "2024",
    detail:
      "15+ hours of exclusive sessions on AI, career development, and personalized mentorship.",
  },
  {
    title: "SheFi Scholar",
    org: "SheFi",
    period: "2024",
    detail:
      "Explored blockchain and Web3 — building smart contracts and decentralized applications.",
  },
];

export const achievements = [
  {
    title: "Dean’s List",
    detail: "CGPA of 9+ (2023 – 2026)",
    icon: "trophy" as const,
  },
  {
    title: "Dr. TMA Pai Merit Scholarship",
    detail: "Awarded for academic excellence (2023 – 2027)",
    icon: "medal" as const,
  },
  {
    title: "100+ Commits",
    detail: "Consistent open contribution trail on Git",
    icon: "code" as const,
  },
  {
    title: "Hackathon Finisher",
    detail: "IIC Top 17% · Prastuti Finalist · IES MCRC 2nd Place",
    icon: "star" as const,
  },
];

export const publications = [
  {
    title: "Enhancing Fish Species Recognition: Deep Learning Models Evaluation",
    venue: "IEEE ICDSNS 2024",
    result: "95%+ accuracy across ResNet, VGG16, InceptionV3, and CNN",
  },
  {
    title: "Multi-country Patent: Autism Detection through Eye Tracking",
    venue: "Indian & German Patent",
    result: "Eye-tracking system for early ASD detection in children",
  },
];
