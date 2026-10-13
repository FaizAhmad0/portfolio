import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Sparkles,
  Terminal,
  Layers3,
  ArrowUp,
} from "lucide-react";
import { Github } from "@/components/brand-icons";
import { Suspense } from "react";
import { profile, projects, experience } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLogo } from "@/components/nav-logo";
import { Reveal } from "@/components/reveal";
import { ExperienceRow } from "@/components/experience-row";
import { ProjectCardHeight } from "@/components/project-card-height";
import { GitHubActivity, ActivitySkeleton } from "@/components/github-activity";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: `${profile.url}/`,
  image: `${profile.url}${profile.avatar}`,
  jobTitle: profile.role,
  description: profile.introduction,
  sameAs: [profile.github, ...(profile.linkedin ? [profile.linkedin] : [])],
  knowsAbout: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "TypeScript",
    "Artificial Intelligence",
  ],
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <header className="pt-6 sm:pt-8">
          <nav
            aria-label="Main navigation"
            className="flex h-12 items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 sm:px-5"
          >
            <a
              href="#"
              aria-label="Faiz Ahmad home"
              className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
            >
              <NavLogo />
            </a>
            <div className="flex items-center gap-3 text-[11px] sm:gap-5 sm:text-xs">
              <a className="nav-link" href="#projects">
                Projects
              </a>
              <a className="nav-link" href="#experience">
                Experience
              </a>
              <Separator orientation="vertical" className="!h-4" />
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main id="main">
          <ProjectCardHeight />
          <section aria-labelledby="hero-title" className="hero-section">
            <Reveal>
              <Hero />
            </Reveal>
          </section>
          <section aria-labelledby="activity-title" className="section-space">
            <Reveal>
              <div className="section-heading">
                <div className="flex items-center gap-2.5">
                  <Github
                    className="size-4 text-[var(--muted)]"
                    aria-hidden="true"
                  />
                  <h2 id="activity-title">A little progress, every day.</h2>
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-link"
                >
                  @{profile.username}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
              <Suspense fallback={<ActivitySkeleton />}>
                <GitHubActivity />
              </Suspense>
            </Reveal>
          </section>
          <section
            id="projects"
            aria-labelledby="projects-title"
            className="section-space scroll-mt-8"
          >
            <Reveal>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="eyebrow mb-2">IDEAS INTO INTERFACES</p>
                  <h2 id="projects-title" className="section-title">
                    Selected projects
                    <span className="text-[var(--accent)]">.</span>
                  </h2>
                </div>
                <span className="hidden text-xs text-[var(--muted)] sm:block">
                  Built with care, from the ground up.
                </span>
              </div>
            </Reveal>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.06}>
                  <Card
                    role="article"
                    className="project-card group gap-0 py-0 shadow-none"
                  >
                    <div className="project-preview">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="project-screen"
                        sizes="(max-width: 640px) 90vw, 180px"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">
                        <span>{project.title}</span>
                        <span
                          className="project-title-divider"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                        <span className="project-category">
                          {project.category}
                        </span>
                      </h3>
                      <p className="project-summary text-[var(--muted)]">
                        {project.summary}
                      </p>
                      <div className="project-stack flex flex-wrap">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="tech-tag"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {(project.live || project.github) && (
                        <div className="project-actions mt-2 flex gap-2">
                          {project.live ? (
                            <Button
                              asChild
                              size="xs"
                              variant="outline"
                              className=""
                            >
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Live demo of ${project.title}`}
                              >
                                Live Demo
                                <ArrowUpRight />
                              </a>
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              disabled
                              title="Live demo URL to be added"
                            >
                              Live Demo
                              <ArrowUpRight />
                            </Button>
                          )}
                          {project.github ? (
                            <Button asChild size="sm" variant="ghost">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Source code for ${project.title}`}
                              >
                                <Github />
                                GitHub
                              </a>
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="ghost"
                              disabled
                              title="Repository URL to be added"
                            >
                              <Github />
                              GitHub
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
          <section
            id="experience"
            aria-labelledby="experience-title"
            className="section-space scroll-mt-8"
          >
            <Reveal>
              <div className="mb-4">
                <p className="eyebrow mb-2">THE JOURNEY SO FAR</p>
                <h2 id="experience-title" className="section-title">
                  Experience & impact
                  <span className="text-[var(--accent)]">.</span>
                </h2>
              </div>
              <Card className="experience-card gap-0 overflow-hidden py-0 shadow-none">
                {experience.map((item, index) => (
                  <ExperienceRow key={item.title} description={item.description}>
                      <span
                        className={`experience-icon ${index === 0 ? "accent-icon" : ""}`}
                      >
                        {item.icon === "work" ? (
                          <BriefcaseBusiness />
                        ) : item.icon === "code" ? (
                          <Code2 />
                        ) : (
                          <Layers3 />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs text-[var(--muted)]">
                          {item.subtitle}
                        </span>
                      </span>
                      <span className="hidden text-right text-[10px] text-[var(--muted)] sm:block">
                        {item.date}
                        <span className="mt-1 block font-mono text-[9px] uppercase tracking-wider">
                          Placeholder
                        </span>
                      </span>
                  </ExperienceRow>
                ))}
              </Card>
              <p className="mt-3 text-[10px] text-[var(--muted)]">
                Experience details are placeholders awaiting verified
                information.
              </p>
            </Reveal>
          </section>
          <section
            id="contact"
            aria-labelledby="contact-title"
            className="section-space scroll-mt-8"
          >
            <Reveal>
              <Card className="contact-card px-5 py-5 shadow-none">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="eyebrow mb-3 flex items-center gap-2">
                      <Sparkles className="size-3.5" />
                      GOOD THINGS START WITH A CONVERSATION
                    </p>
                    <h2
                      id="contact-title"
                      className="text-lg font-semibold tracking-tight"
                    >
                      Have something in mind?
                    </h2>
                    <p className="mt-2 max-w-md text-xs leading-6 text-[var(--muted)]">
                      Let’s talk web development, AI, or your next idea.
                      <br />
                      {profile.email
                        ? "I’d love to hear from you."
                        : "Direct email contact will be available once added."}
                    </p>
                  </div>
                  <Button asChild>
                    <a
                      href={
                        profile.email
                          ? `mailto:${profile.email}`
                          : profile.github
                      }
                      target={profile.email ? undefined : "_blank"}
                      rel={profile.email ? undefined : "noopener noreferrer"}
                    >
                      {profile.email ? "Say hello" : "Find me on GitHub"}
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </Card>
            </Reveal>
          </section>
        </main>
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pb-5 pt-4 text-[11px] text-[var(--muted)] sm:flex-row">
          <p>
            © 2026 Faiz Ahmad <span className="mx-2 opacity-40">/</span> Built
            with intention.
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Terminal className="size-3" />
              Next.js & a little curiosity
            </span>
            <a href="#" className="quiet-link" aria-label="Back to top">
              Back to top
              <ArrowUp className="size-3" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
