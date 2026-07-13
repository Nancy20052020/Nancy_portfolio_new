"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code2, Map as MapIcon, Medal, Star, Trophy } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { achievements, publications, type QuestId } from "@/data/portfolio";

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

export function QuestAchievements({ onNavigate }: Props) {
  const next = nextQuest("achievements");

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
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-caveat)] text-lg sm:text-xl" style={{ color: ink.accent }}>
              Quest 5 of 6
            </p>
            <h2
              className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
              style={{ color: ink.title }}
            >
              Achievements
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
            text="Ancient relic grounds"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Honors, patents, and publications collected along the trail.
          </p>
        </div>

        <div className="grid flex-1 gap-3 pb-2 sm:grid-cols-2 sm:gap-4">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 * i }}
                className="quest-exp-card rounded-2xl p-4 sm:p-5"
              >
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(166, 124, 26, 0.18)",
                    color: ink.gold,
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

        <div className="mt-4 space-y-3">
          <h4
            className="font-[family-name:var(--font-cinzel)] text-xs font-semibold uppercase tracking-wider"
            style={{ color: ink.accent }}
          >
            Publications & Patents
          </h4>
          {publications.map((pub) => (
            <article key={pub.title} className="quest-exp-card rounded-2xl p-4">
              <p className="font-semibold" style={{ color: ink.title }}>
                {pub.title}
              </p>
              <p className="mt-1 text-sm font-medium" style={{ color: ink.accent }}>
                {pub.venue}
              </p>
              <p className="mt-1 text-sm" style={{ color: ink.body }}>
                {pub.result}
              </p>
            </article>
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
