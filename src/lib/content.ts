import classSathiImage from "../../public/classsathi.png";
import walletImage from ".././../public/wallet.png";
import starsellingImage from "../../public/star-sellingz.png";

// Edit here. Null links stay visibly unavailable. Replace previews with actual screenshots.
export const profile = {
  name: "Faiz Ahmad",
  role: "Full Stack & AI Engineer",
  url: "https://www.faizahmad.in",
  github: "https://github.com/FaizAhmad0",
  username: "FaizAhmad0",
  avatar: "/faiz-avatar.jpg",
  email: null as string | null,
  resume: "/faiz-full-stack-developer.pdf" as string | null,
  linkedin: "https://www.linkedin.com/in/mdfaizahmad/" as string | null,
  x: "https://x.com/mdfaiza20470687" as string | null,
  youtube: null as string | null,
  instagram: null as string | null,
  heroLines: [
    "I’m a full stack developer, building thoughtful web experiences.",
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
    title: "StarSellingz",
    category: "Product Catalog & Marketplace Listing Export Platform",
    summary:
      "Product discovery platform that lets sellers browse, select, and export products into customizable Excel templates for Amazon, Flipkart, Meesho, and Etsy.",
    description:
      "Full stack product catalog platform built to simplify marketplace listing preparation. Users can search products, filter by category, explore color and size variants, and select products for export. Generates Excel files tailored to Amazon, Flipkart, Meesho, Etsy, and custom listing templates, mapping product details, SKUs, descriptions, prices, stock, and image URLs into the required columns. Includes an admin dashboard for catalog management and bulk product uploads, helping sellers reduce manual data entry and prepare listings across multiple marketplaces.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "XLSX",
    ],
    image: starsellingImage,
    imageAlt:
      "StarSellingz product catalog with category filters, product selection, and Excel exports for Amazon, Flipkart, Meesho, and Etsy",
    live: "https://test.starsellingz.com/" as string | null, // Add your live project URL
    github: null as string | null,
  },
  {
    id: "03",
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
    image: walletImage,
    imageAlt:
      "SaumicWallet dashboard for wallet transactions, payments, and order management",
    live: "https://a.digifycreation.in/" as string | null, // Add your live project URL
    github: null as string | null,
  },
];
export const experience = [
  {
    title: "Full Stack Software Engineer & AI Developer",
    subtitle: "Saumic Craft · Full Stack Development",
    date: "Jul 2024 – Present",
    icon: "work",

    description:
      "Designing and developing scalable full-stack business applications, CRM platforms, and enterprise management systems using React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, and Express.js. Building RESTful APIs, JWT authentication, RBAC, payment gateway integrations, wallet systems, order management workflows, and analytics dashboards. Working with MongoDB, PostgreSQL, MySQL, Prisma ORM, Redis, and BullMQ for database management, caching, background jobs, and workflow automation. Implementing automated reporting, secure backend architectures, and performance optimizations. Deploying and maintaining production applications using AWS EC2, VPS, Docker, Nginx, PM2, Git, GitHub Actions, and CI/CD pipelines.",
  },

  {
    title: "Full Stack Developer Intern",
    subtitle: "Saumic Craft · MERN Stack Development",
    date: "Jan 2024 – Jun 2024",
    icon: "work",
    description:
      "Contributed to the development and maintenance of full-stack web applications using React.js, JavaScript, Node.js, Express.js, and MongoDB. Built responsive user interfaces, integrated RESTful APIs, implemented CRUD operations, and assisted with backend development and database management. Collaborated on debugging, testing, authentication workflows, and application performance improvements while gaining hands-on experience with Git, GitHub, and real-world software development practices.",
  },
];
