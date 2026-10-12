import classSathiImage from "../../public/classsathi.png";

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
  linkedin: "https://www.linkedin.com/in/mdfaizahmad/" as string | null,
  x: "https://x.com/mdfaiza20470687" as string | null,
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
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "OpenAI",
      "Redis",
      "Cloudinary",
    ],
    image: classSathiImage,
    imageAlt: "ClassSathi coaching management application preview",
    live: "https://classsathi.in" as string | null,
    github: null as string | null,
  },
  {
    id: "02",
    title: "SaumicWallet",
    category: "Wallet, Order & Payment Management Platform",
    summary:
      "Business operations platform for managing wallet transactions, online payments, and orders through secure multi-role dashboards.",
    description:
      "Full stack financial and order management platform with dedicated dashboards for users, managers, admins, dispatch teams, and accountants. Features UPI, bank, and card payments, wallet balance tracking, transaction history, order status workflows, operational reporting, and WhatsApp and email notifications. Built secure REST APIs with JWT authentication and role-based access control, plus webhook-based payment verification and duplicate transaction protection. Deployed on a VPS using Nginx and PM2.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Redis",
      "Instamojo",
      "Tailwind CSS",
      "Ant Design",
      "Nginx",
      "PM2",
      "VPS",
    ],
    image: classSathiImage,
    imageAlt:
      "SaumicWallet dashboard for wallet transactions, payments, and order management",
    live: "https://a.digifycreation.in/" as string | null, // Add your live project URL
    github: null as string | null,
  },
];
export const experience = [
  {
    title: "Full Stack Developer & AI Builder",
    subtitle: "Saumic Craft · Full Stack Development",
    date: "Jul 2024 – Present",
    icon: "work",
    description:
      "Developed and maintained full stack business applications using Next.js, React, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB. Built secure REST APIs with JWT authentication and role-based access control, wallet systems, payment gateway integrations, order management workflows, and reporting dashboards. Used Redis and BullMQ for background jobs and automated processing. Managed production deployments on AWS EC2 and VPS using Docker, Nginx, PM2, and GitHub Actions for CI/CD.",
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
