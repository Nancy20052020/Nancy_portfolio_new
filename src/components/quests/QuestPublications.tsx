"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, ScrollText } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { QuestPageHeader } from "@/components/QuestPageHeader";
import { Typewriter } from "@/components/Typewriter";
import { publicationsAndPatents, QUEST_ORDER, type QuestId } from "@/data/portfolio";
import { ink } from "@/lib/questInk";

type Props = {
  onNavigate: (id: QuestId) => void;
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
        <div className="quest-bg-wash" aria-hidden />
        <span className="mystical-mist left-[10%] top-[20%] h-32 w-32" aria-hidden />
        <span className="mystical-mist right-[8%] bottom-[18%] h-40 w-40" style={{ animationDelay: "1.2s" }} aria-hidden />
        <span className="mystical-spark left-[30%] top-[28%]" aria-hidden />
        <span className="mystical-spark right-[22%] top-[36%]" style={{ animationDelay: "1.1s" }} aria-hidden />
        <span className="mystical-spark left-[55%] bottom-[30%]" style={{ animationDelay: "2s" }} aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-4xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
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

        <div className="mx-auto grid w-full max-w-3xl flex-1 content-start gap-4 pb-2">
          {publicationsAndPatents.map((item, i) => {
            const Icon = item.kind === "Patent" ? ScrollText : FileText;
            const accent = item.kind === "Patent" ? "#7c3aed" : ink.accent;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="quest-relic-card flex flex-col rounded-2xl p-4 pl-5 sm:p-5 sm:pl-6"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      background: `${accent}22`,
                      color: accent,
                      boxShadow: `0 0 0 1px ${accent}44`,
                    }}
                  >
                    <Icon size={17} aria-hidden />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide"
                    style={{ background: accent, color: "#fff8e6" }}
                  >
                    {item.kind}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: accent }}>
                    {item.venue}
                  </span>
                </div>
                <h4
                  className="font-[family-name:var(--font-cinzel)] text-base font-bold leading-snug sm:text-lg"
                  style={{ color: ink.title }}
                >
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: ink.body }}>
                  {item.summary}
                </p>
                <p className="mt-2 text-sm font-medium" style={{ color: ink.muted }}>
                  {item.result}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md px-2 py-0.5 text-[0.65rem] font-semibold"
                      style={{
                        background: `${accent}14`,
                        color: ink.title,
                        border: `1px solid ${accent}40`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
