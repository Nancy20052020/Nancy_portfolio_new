"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Map as MapIcon } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { projects, QUEST_ORDER, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
};

export function QuestProjects({ onNavigate }: Props) {
  const next = nextQuest("projects");
  const scroller = useRef<HTMLDivElement>(null);
  const total = QUEST_ORDER.length;

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/projects-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/projects-bg.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </picture>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-caveat)] text-lg sm:text-xl" style={{ color: ink.accent }}>
              Quest 3 of {total}
            </p>
            <h2
              className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
              style={{ color: ink.title }}
            >
              Projects
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="btn-ghost !min-h-10 !px-3" onClick={() => scrollBy(-1)} aria-label="Previous projects">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="btn-ghost !min-h-10 !px-3" onClick={() => scrollBy(1)} aria-label="Next projects">
              <ChevronRight size={18} />
            </button>
            <button type="button" className="btn-ghost shrink-0" onClick={() => onNavigate("map")}>
              <MapIcon size={16} aria-hidden />
              <span className="sm:hidden">Map</span>
              <span className="hidden sm:inline">Back to Map</span>
            </button>
          </div>
        </header>

        <div className="projects-copy-panel mb-4 rounded-2xl px-4 py-3 sm:px-5">
          <Typewriter
            as="h3"
            text="Ruins of creation"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Slide through each quest postcard — AutEye, PrepPilot, Multi PDF Bot, Drought Sentinel, and Urban Pulse.
          </p>
        </div>

        <div
          ref={scroller}
          className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
              className="project-postcard relative w-[min(82vw,19.5rem)] shrink-0 snap-center sm:w-[20.5rem]"
            >
              <picture>
                <source srcSet={project.postcard} type="image/webp" />
                <img
                  src={project.postcard.replace(/\.webp$/, ".png")}
                  alt=""
                  width={866}
                  height={1154}
                  className="project-postcard-img h-auto w-full"
                  decoding="async"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </picture>
              <div
                className={`absolute inset-x-[10%] flex flex-col ${
                  project.layout === "lower"
                    ? "bottom-[14%] top-[38%]"
                    : "bottom-[16%] top-[28%]"
                }`}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 px-1 text-center">
                  <h4
                    className="font-[family-name:var(--font-cinzel)] text-lg font-extrabold leading-tight sm:text-xl"
                    style={{ color: ink.title }}
                  >
                    {project.title}
                  </h4>
                  <p className="line-clamp-4 text-[0.72rem] leading-snug sm:text-xs" style={{ color: ink.body }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded px-1.5 py-0.5 text-[0.6rem] font-semibold"
                        style={{
                          background: `${project.accent}22`,
                          color: ink.title,
                          border: `1px solid ${project.accent}55`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                    {project.links.github ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold"
                        style={{ background: ink.accent, color: "#fff8e6" }}
                      >
                        GitHub <ExternalLink size={10} aria-hidden />
                      </a>
                    ) : null}
                    {project.links.earthEngine ? (
                      <a
                        href={project.links.earthEngine}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold"
                        style={{ background: project.accent, color: "#fff8e6" }}
                      >
                        Earth Engine <ExternalLink size={10} aria-hidden />
                      </a>
                    ) : null}
                    {project.links.drive ? (
                      <a
                        href={project.links.drive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold"
                        style={{ borderColor: ink.title, color: ink.title, background: "rgba(255,248,230,0.75)" }}
                      >
                        Drive <ExternalLink size={10} aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="safe-bottom mt-4 flex flex-wrap items-center justify-between gap-3">
          <button type="button" className="btn-ghost" onClick={() => onNavigate("map")}>
            <ArrowLeft size={16} aria-hidden />
            Map
          </button>
          {next ? (
            <button type="button" className="btn-quest" onClick={() => onNavigate(next)}>
              Next Quest
              <ArrowRight size={16} aria-hidden />
            </button>
          ) : null}
        </footer>
      </div>
    </section>
  );
}
