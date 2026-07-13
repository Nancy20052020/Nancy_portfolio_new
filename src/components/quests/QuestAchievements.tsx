"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Medal, Star, Trophy } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { QuestPageHeader } from "@/components/QuestPageHeader";
import { Typewriter } from "@/components/Typewriter";
import { achievements, QUEST_ORDER, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
  gold: "#a67c1a",
};

const ICONS = {
  trophy: Trophy,
  medal: Medal,
  code: Code2,
  star: Star,
};

const ACCENTS = ["#c9a227", "#5b2d91", "#2f6fed", "#d97706"];

export function QuestAchievements({ onNavigate }: Props) {
  const next = nextQuest("achievements");
  const total = QUEST_ORDER.length;

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/achievements-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/achievements-bg.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </picture>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <QuestPageHeader
          questLabel={`Quest 6 of ${total}`}
          title="Achievements"
          onBackToMap={() => onNavigate("map")}
        />

        <div className="quest-art-panel mb-4 rounded-2xl px-4 py-3 sm:px-5">
          <Typewriter
            as="h3"
            text="Ancient relic grounds"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Honors and milestones collected along the trail.
          </p>
        </div>

        <div className="grid flex-1 gap-3 pb-2 sm:grid-cols-2 sm:gap-4">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 * i }}
                className="quest-relic-card rounded-2xl p-4 pl-6 sm:p-5"
              >
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    background: `${accent}22`,
                    color: accent,
                    boxShadow: `0 0 0 1px ${accent}55`,
                  }}
                >
                  <Icon size={22} aria-hidden />
                </div>
                <h4
                  className="font-[family-name:var(--font-cinzel)] text-base font-bold"
                  style={{ color: ink.title }}
                >
                  {item.title}
                </h4>
                <p className="mt-1 text-sm" style={{ color: ink.body }}>
                  {item.detail}
                </p>
              </motion.article>
            );
          })}
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
