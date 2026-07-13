"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, ScrollText } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { QuestPageHeader } from "@/components/QuestPageHeader";
import { Typewriter } from "@/components/Typewriter";
import { publicationsAndPatents, QUEST_ORDER, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
};

export function QuestPublications({ onNavigate }: Props) {
  const next = nextQuest("publications");
  const total = QUEST_ORDER.length;

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/publications-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/publications-bg.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </picture>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <QuestPageHeader
          questLabel={`Quest 4 of ${total}`}
          title="Publications & Patents"
          onBackToMap={() => onNavigate("map")}
        />

        <div className="quest-art-panel mb-4 rounded-2xl px-4 py-3 sm:px-5">
          <Typewriter
            as="h3"
            text="Scrolls of discovery"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Research papers and patents charted on one shared map of invention.
          </p>
        </div>

        <div className="grid flex-1 gap-4 pb-2 lg:grid-cols-2">
          {publicationsAndPatents.map((item, i) => {
            const Icon = item.kind === "Patent" ? ScrollText : FileText;
            const accent = item.kind === "Patent" ? "#7c3aed" : ink.accent;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="quest-relic-card flex flex-col rounded-2xl p-5 pl-6"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{
                      background: `${accent}22`,
                      color: accent,
                      boxShadow: `0 0 0 1px ${accent}44`,
                    }}
                  >
                    <Icon size={18} aria-hidden />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide"
                    style={{ background: accent, color: "#fff8e6" }}
                  >
                    {item.kind}
                  </span>
                </div>
                <h4
                  className="font-[family-name:var(--font-cinzel)] text-base font-bold leading-snug sm:text-lg"
                  style={{ color: ink.title }}
                >
                  {item.title}
                </h4>
                <p className="mt-2 text-sm font-semibold" style={{ color: accent }}>
                  {item.venue}
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: ink.body }}>
                  {item.result}
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
