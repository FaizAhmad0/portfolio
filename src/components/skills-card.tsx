import Image from "next/image";
import { Card } from "@/components/ui/card";

const technologies: {
  name: string;
  logo?: string;
  monochrome?: boolean;
  lightLogo?: boolean;
  label?: string;
  file?: string;
}[] = [
  { name: "JavaScript", logo: "javascript/javascript-original" },
  { name: "TypeScript", logo: "typescript/typescript-original" },
  { name: "Python", logo: "python/python-original" },
  { name: "React", logo: "react/react-original" },
  { name: "Next.js", logo: "nextjs/nextjs-original", monochrome: true },
  { name: "Tailwind CSS", logo: "tailwindcss/tailwindcss-original" },
  { name: "Bootstrap", logo: "bootstrap/bootstrap-original" },
  { name: "Ant Design", logo: "antdesign/antdesign-original" },
  { name: "shadcn/ui", logo: "shadcnui", monochrome: true },
  { name: "Motion", logo: "motion" },
  { name: "TanStack Query", logo: "reactquery/reactquery-original" },
  { name: "Zustand", logo: "zustand/zustand-original" },
  { name: "Axios", logo: "axios/axios-plain" },
  { name: "Zod", logo: "zod" },
  { name: "Node.js", logo: "nodejs/nodejs-original" },
  { name: "Express.js", logo: "express/express-original", monochrome: true },
  { name: "FastAPI", logo: "fastapi/fastapi-original" },
  { name: "REST APIs", label: "REST" },
  { name: "WebSockets", label: "WS" },
  { name: "JWT", logo: "jwt" },
  { name: "bcrypt", label: "bcrypt" },
  { name: "BullMQ", file: "bullmq.png" },
  { name: "Nodemailer", file: "nodemailer.png" },
  { name: "MongoDB", logo: "mongodb/mongodb-original" },
  { name: "MySQL", logo: "mysql/mysql-original" },
  { name: "PostgreSQL", logo: "postgresql/postgresql-original" },
  { name: "Redis", logo: "redis/redis-original" },
  { name: "Prisma", logo: "prisma/prisma-original", monochrome: true },
  { name: "Qdrant", logo: "qdrant" },
  { name: "OpenAI API", logo: "openai", monochrome: true },
  { name: "Groq", logo: "groq", monochrome: true },
  { name: "Google Gemini", logo: "gemini" },
  { name: "Claude API", logo: "claude" },
  { name: "LangChain", logo: "langchain", monochrome: true },
  { name: "LangGraph", logo: "langgraph", monochrome: true },
  { name: "PydanticAI", logo: "pydanticai" },
  { name: "RAG", label: "RAG" },
  { name: "AI / LLMs", label: "LLM" },
  { name: "Prompt Engineering", label: "Prompt" },
  { name: "n8n", logo: "n8n" },
  { name: "Git", logo: "git/git-original" },
  { name: "GitHub", logo: "github/github-original", monochrome: true },
  { name: "Docker", logo: "docker/docker-original" },
  { name: "Nginx", logo: "nginx/nginx-original" },
  {
    name: "AWS EC2",
    logo: "amazonwebservices/amazonwebservices-original-wordmark",
  },
  { name: "GitHub Actions", logo: "githubactions/githubactions-original" },
  { name: "CI/CD", label: "CI/CD" },
  { name: "PM2", logo: "pm2" },
  { name: "VPS", label: "VPS" },
  { name: "Jest", logo: "jest/jest-plain" },
  { name: "Postman", logo: "postman/postman-original" },
  { name: "VS Code", logo: "vscode/vscode-original" },
  { name: "Cloudinary", logo: "cloudinary" },
  { name: "XLSX", label: "XLSX" },
  { name: "PayU", file: "payu.png" },
  { name: "Cashfree", file: "cashfree.png" },
  { name: "PhonePe", logo: "phonepe" },
  { name: "PayGlocal", file: "payglocal.png" },
  { name: "Instamojo", file: "instamojo.png" },
];

export function SkillsCard() {
  const midpoint = Math.ceil(technologies.length / 2);
  return (
    <>
      <div className="mb-4">
        <p className="eyebrow mb-2">THE TOOLS I BUILD WITH</p>
        <h2 id="skills-title" className="section-title">
          Tech Stack &amp; Tools<span className="text-[var(--accent)]">.</span>
        </h2>
      </div>
      <Card className="experience-card gap-0 overflow-hidden px-3.5 py-3.5 shadow-none">
        <div className="skills-marquee space-y-3">
          {[technologies.slice(0, midpoint), technologies.slice(midpoint)].map(
            (row, index) => (
              <div className="overflow-hidden" key={index}>
                <div
                  className={`skills-track ${index === 1 ? "skills-track-reverse" : ""}`}
                  style={{ animationDuration: `${row.length * 2.7}s` }}
                >
                  {[0, 1].map((copy) => (
                    <div
                      className="skills-group"
                      key={copy}
                      aria-hidden={copy === 1 ? true : undefined}
                    >
                      {row.map((skill) => (
                        <span
                          className="skills-tile"
                          key={skill.name}
                          title={skill.name}
                        >
                          {skill.logo || skill.file ? (
                            <Image
                              src={`/skill-icons/${skill.file ?? `${skill.logo?.split("/")[0]}.svg`}`}
                              alt=""
                              width={22}
                              height={22}
                              unoptimized
                              loading="eager"
                              className={
                                skill.monochrome
                                  ? "skills-monochrome"
                                  : skill.lightLogo
                                    ? "skills-light-logo"
                                    : undefined
                              }
                            />
                          ) : skill.label ? (
                            <span
                              className="text-[8px] font-semibold text-[var(--foreground)]"
                              aria-hidden="true"
                            >
                              {skill.label}
                            </span>
                          ) : null}
                          <span className="sr-only">{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </Card>
    </>
  );
}
