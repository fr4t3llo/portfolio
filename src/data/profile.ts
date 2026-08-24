// All page copy lives here — sourced from kasmisaifeddine.pdf.

export const profile = {
  name: "Saifeddine Kasmi",
  role: "Mobile Software Engineer",
  avatar: "/avatar.jpg",
  blurb:
    "Building cross-platform Flutter applications for Android and iOS, with a focus on AI-powered features and real-time systems.",
  tagline:
    "Cross-platform Flutter apps for Android & iOS, with a pulse on AI.",
  meta: [
    { icon: "location", label: "Khouribga, Morocco" },
    { icon: "briefcase", label: "3+ years experience" },
    { icon: "globe", label: "Open to remote work" },
  ],
  socials: [
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saifeddinekasmi/",
    },
    { icon: "github", label: "GitHub", href: "https://github.com/fr4t3llo" },
  ],
  cvHref: "/cv.pdf",
  email: "kasmisaifeddine@gmail.com",
  whatsapp: { display: "+212 661189840", href: "https://wa.me/212661189840" },
} as const;

/**
 * Nav targets double as scroll-spy anchors. Education, Certifications and
 * Volunteering live inside #experience, Languages inside #skills — so the
 * parent link stays highlighted while those subsections are on screen.
 */
export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

/** Shared shape for Experience, Education, Certification and Volunteering rows. */
export type Entry = {
  title: string;
  /** Organisation name — company, school, issuer or host, depending on section. */
  org?: string;
  location?: string;
  period: string;
  summary?: string;
  details?: string[];
  href?: string;
};

export type Project = {
  name: string;
  description: string;
  href?: string;
  image?: string;
};

export const about = [
  "I'm a mobile developer with 3+ years of experience building cross-platform Flutter applications for Android and iOS.",
  "I work on AI-powered applications, Firebase, REST APIs, real-time communication, and scalable mobile architectures — from personalised story generation with GPT-4 and Stable Diffusion to live transport tracking on Firestore.",
  "I'm passionate about delivering high-performance user experiences and collaborating with cross-functional teams.",
] as const;

export const experience: Entry[] = [
  {
    title: "Mobile Developer",
    org: "Confidential Company",
    period: "Jan 2026 – Present",
  },
  {
    title: "Chief Technology Officer (CTO)",
    org: "OZZY Academy",
    period: "Aug 2025 – Dec 2025",
    details: [
      "Led the full technology strategy, including mobile app development, backend systems, automations, and IT infrastructure.",
      "Designed and built the Ozzy Academy mobile app in Flutter, with transport tracking, student management, dashboards, and real-time location features.",
      "Developed and maintained the cloud architecture using Firestore, Google Cloud, Cloudinary, and real-time APIs.",
    ],
  },
  {
    title: "Mobile Developer",
    org: "AtlasAI",
    location: "Remote",
    period: "Dec 2023 – Jun 2024",
    summary:
      "Contributed to two mobile applications: REPaiR, an AI-powered tool that helps users repair broken items, and StoryWonder, a creative app that generates personalised bedtime stories featuring child characters.",
  },
  {
    title: "Freelancer",
    org: "Google Play Store",
    period: "2022 – Present",
    summary:
      "Developing cross-platform apps for Android and iOS with Flutter, and publishing them to the Google Play Store after completing the testing required by Google.",
  },
];

export const education: Entry[] = [
  {
    title: "Software Engineer",
    org: "1337 Coding School",
    location: "Khouribga",
    period: "Aug 2021 – Present",
    summary:
      "Developed skills across networking, low-level programming (C and C++), Docker, web development, mobile development, and algorithms.",
  },
  {
    title: "Specialized Technician in Computer Development",
    org: "ISGI",
    location: "Khouribga",
    period: "2019 – 2021",
    summary:
      "A two-year program in computer development covering C, HTML, CSS, JavaScript, jQuery, and .NET.",
  },
  {
    title: "Bachelor's Degree",
    org: "Ibn Tofail",
    location: "Oued Zem",
    period: "2018",
  },
];

export const certifications: Entry[] = [
  {
    title: "C++ Certification",
    org: "Codingame",
    period: "2024",
    href: "https://www.codingame.com/certification/t2ZpMM4g1gYwqU_5pBt4sw",
  },
  {
    title: "Formation in Cinematography",
    org: "Act4Community by OCP",
    period: "2023",
  },
  {
    title: "Think AI Hackathon",
    org: "1337 Coding School",
    period: "2022",
    href: "https://bit.ly/3C7CzB4",
  },
];

export const volunteering: Entry[] = [
  {
    title: "Moroccan National Programming Contest",
    org: "MNPC",
    location: "Khouribga",
    period: "2022",
  },
  {
    title: "Africa Middle East Space Conference",
    org: "AMESC 2025",
    location: "UM6P, Rabat",
    period: "2025",
  },
];

/** `href` is optional — rows without one render as plain, non-clickable items. */
export const projects: Project[] = [
  {
    name: "Storywonder App",
    description:
      "Lets parents create personalised stories for their children. Parents build a child profile — name, age, eye colour, hair colour — and describe the story they want; GPT-4 and Stable Diffusion generate a detailed, customised result.",
  },
  {
    name: "REPaiR",
    description:
      "Helps users repair broken items. Take a picture of the item — a broken chair, say — and the app returns a step-by-step guide to fix it along with the specific tools required.",
  },
  {
    name: "LEET Event",
    description:
      "Lets 1337 students and staff discover and join workshops, talks, and coding nights. Features 42 Intra authentication, RSVP with calendar integration, automatic reminders, QR-code check-in, post-event feedback, and an admin dashboard for organisers.",
  },
  {
    name: "Ozzy Shuttle",
    description:
      "A real-time transport tracking app built with Flutter and Firestore, with live driver location, student pickup status, and optimised routes.",
  },
  {
    name: "Swifty Companion",
    description:
      "Authenticates with the 42 Intra API to search 42 network users, showing detailed profiles with validated, failed, and in-progress projects alongside completed skills.",
  },
  {
    name: "Protein App",
    description:
      "Explore scientific models like H2O and Carbon and view them in 3D. Sign in with Google Firebase, with fingerprint and Face ID authentication.",
  },
  {
    name: "Accuweather App",
    description:
      "Built with Flutter and the Open-Meteo API. Search for a city and get current, daily, and weekly weather in a friendly, intuitive interface.",
  },
  {
    name: "Hangout",
    description:
      "Create, edit, and delete contacts, send messages, make phone calls, and switch the app's language between English and Spanish.",
  },
  {
    name: "Wallpaperify",
    description:
      "Search for wallpapers and download them locally, powered by the Pexels API.",
  },
  {
    name: "Diary App",
    description:
      "A daily diary that lets you log your feelings and thoughts for each day, with the date and a personal description.",
  },
];

export const skills = [
  "Flutter",
  "Dart",
  "Git",
  "C++",
  "RESTful API",
  "CI/CD",
  "Firebase",
  "Figma",
  "Photography",
  "Video Editing",
  "Graphic Design",
] as const;

/** Keys map to `simple-icons` exports in components/TechIcon.tsx. */
export const technologies = [
  "flutter",
  "dart",
  "firebase",
  "googlecloud",
  "cloudinary",
  "git",
  "cplusplus",
  "docker",
  "figma",
  "android",
  "apple",
] as const;

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "French", level: "Intermediate" },
  { name: "Italian", level: "Beginner" },
] as const;

export const connect = {
  heading: "Let's Connect",
  subtitle:
    "Currently available for full-time roles, freelance work, and collaborations.",
} as const;
