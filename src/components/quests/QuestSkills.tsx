"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Cpu, HeartHandshake, Map as MapIcon, Wrench } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { skills, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
};

const categories = [
  {
    title: "Languages",
    icon: Code2,
    items: skills.languages,
    tint: "#6b3fa0",
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    items: skills.machineLearning,
    tint: "#2f6fed",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: skills.tools,
    tint: "#2f8f5b",
  },
  {
    title: "Soft Skills",
    icon: HeartHandshake,
    items: skills.softSkills,
    tint: "#d97706",
  },
];

export function QuestSkills({ onNavigate }: Props) {
  const next = nextQuest("skills");

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/skills-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/skills-bg.webp"
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
              Quest 2 of 6
            </p>
            <h2
              className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
              style={{ color: ink.title }}
            >
              Skills
            </h2>
          </div>
          <button type="button" className="btn-ghost shrink-0" onClick={() => onNavigate("map")}>
            <MapIcon size={16} aria-hidden />
            <span className="sm:hidden">Map</span>
            <span className="hidden sm:inline">Back to Map</span>
          </button>
        </header>

        <div className="quest-art-panel mb-4 rounded-2xl px-4 py-3 sm:px-5">
          <Typewriter
            as="h3"
            text="Crystal peak arsenal"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Tools and crafts gathered across classrooms, hackathons, and internship expeditions.
          </p>
        </div>

        <div className="grid flex-1 gap-3 pb-2 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
              className="quest-exp-card rounded-2xl p-4"
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ background: `${cat.tint}22`, color: cat.tint }}
                >
                  <cat.icon size={18} aria-hidden />
                </span>
                <h4
                  className="font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-wide"
                  style={{ color: ink.title }}
                >
                  {cat.title}
                </h4>
              </div>
              <ul className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg px-2.5 py-1.5 text-sm"
                    style={{
                      color: ink.body,
                      background: "rgba(255, 248, 230, 0.55)",
                      border: "1px solid rgba(90, 60, 30, 0.12)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
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
