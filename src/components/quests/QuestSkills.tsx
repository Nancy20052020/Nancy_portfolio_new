"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, HeartHandshake, Wrench } from "lucide-react";
import { QuestChrome, nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { skills, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
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
    <QuestChrome
      title="Skills"
      questNumber={2}
      onBackToMap={() => onNavigate("map")}
      onNext={next ? () => onNavigate(next) : undefined}
    >
      <Typewriter
        as="h3"
        text="Crystal peak arsenal"
        className="font-[family-name:var(--font-cinzel)] text-xl font-semibold sm:text-2xl"
      />
      <p className="mt-2 max-w-2xl text-[color:var(--parchment-muted)]">
        Tools and crafts gathered across classrooms, hackathons, and internship expeditions.
      </p>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.article
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl border border-[color:var(--card-border)] bg-[color:var(--surface-elevated)] p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: `${cat.tint}22`, color: cat.tint }}
              >
                <cat.icon size={18} aria-hidden />
              </span>
              <h4 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-wide">
                {cat.title}
              </h4>
            </div>
            <ul className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg px-2 py-1.5 text-sm text-[color:var(--parchment-ink)]"
                  style={{
                    background: "color-mix(in srgb, var(--parchment) 55%, transparent)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        <div
          className="pointer-events-none absolute -bottom-4 right-2 hidden h-20 w-16 opacity-40 lg:block"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 40% 30%, #9b6dd4, transparent 65%), radial-gradient(circle at 70% 80%, #e8c547, transparent 55%)",
          }}
        />
      </div>
    </QuestChrome>
  );
}
