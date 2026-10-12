// Edit here. Null links stay visibly unavailable. Replace previews with actual screenshots.
export const profile = {
  name: "Faiz Ahmad",
  role: "MERN Full Stack Developer & AI Builder",
  url: "https://www.faizahmad.in",
  github: "https://github.com/FaizAhmad0",
  username: "FaizAhmad0",
  avatar: "/faiz-avatar.jpg",
  email: null as string | null,
  resume: null as string | null, // Put a PDF in public/, then set /Faiz-Ahmad-Resume.pdf
  linkedin: null as string | null,
  x: null as string | null,
  youtube: null as string | null,
  instagram: null as string | null,
  heroLines: [
    "I’m a MERN full stack developer, building thoughtful web experiences.",
    "Exploring AI and turning complex ideas into simple, useful products.",
  ],
  introduction:
    "I build thoughtful web experiences with the MERN stack, and explore what’s possible with AI. Turning complex ideas into simple, useful products is what keeps me curious.",
};
export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "AI / LLMs",
];
export const projects = [
  {
    id: "01",
    title: "ClassSathi",
    category: "Multi-Tenant AI-Powered Coaching Management SaaS",
    summary:
      "Coaching management for educational institutes, with role-based dashboards and an AI-powered Student Doubt Assistant.",
    description:
      "Production-grade coaching management SaaS built for educational institutes with multi-tenant architecture and role-based dashboards for Admins, Teachers, Students, and Parents. Features assignment and study material management, attendance tracking, fee management, academic reporting, cloud file storage, email notifications, and an AI-powered Student Doubt Assistant that provides instant answers to academic queries. Designed with scalable backend architecture, secure authentication, and real-world institute workflows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Ant Design",
      "JWT",
      "OpenAI",
      "LangChain",
      "Redis",
      "Cloudinary",
    ],
    image: "/classsathi.png",
    imageAlt: "ClassSathi coaching management application preview",
    live: null as string | null,
    github: null as string | null,
  },
];
export const experience = [
  {
    title: "Your most recent role",
    subtitle: "Organization · Role details to be added",
    date: "Dates pending",
    icon: "work",
    description:
      "Add your organization, role, dates, responsibilities, and verified impact here. No employment history has been supplied yet.",
  },
  {
    title: "Open-source contributions",
    subtitle: "Projects and contributions to be added",
    date: "Details pending",
    icon: "code",
    description:
      "Add the repositories you contributed to, the changes you made, and links to merged pull requests.",
  },
  {
    title: "Independent work",
    subtitle: "Client work or personal projects to be added",
    date: "Details pending",
    icon: "build",
    description:
      "Add verified freelance or independent work, including your role and the outcomes you can substantiate.",
  },
];
