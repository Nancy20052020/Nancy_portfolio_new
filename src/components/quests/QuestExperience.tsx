"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { QuestPageHeader } from "@/components/QuestPageHeader";
import { Typewriter } from "@/components/Typewriter";
import { experience, QUEST_ORDER, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
};

export function QuestExperience({ onNavigate }: Props) {
  const next = nextQuest("experience");
  const total = QUEST_ORDER.length;

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/experience-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/experience-bg.webp"
            alt=""
            className="h-full w-full object-cover object-[center_40%]"
            draggable={false}
          />
        </picture>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-3xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <QuestPageHeader
          questLabel={`Quest 5 of ${total}`}
          title="Experience"
          onBackToMap={() => onNavigate("map")}
        />

        <div className="quest-art-panel mb-4 rounded-2xl px-4 py-3 sm:px-5">
          <Typewriter
            as="h3"
            text="Harbor of voyages"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Ports of call across tech, scholarship, and geospatial fieldwork.
          </p>
        </div>

        <ol className="quest-timeline flex-1 space-y-4 pb-2">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.title}-${item.org}`}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * i }}
              className="quest-timeline-item"
            >
              <span
                className="quest-timeline-dot"
                style={{ background: item.accent }}
                aria-hidden
              />
              <article className="quest-relic-card rounded-2xl p-4 pl-5 sm:p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                    style={{
                      background: "rgba(20, 14, 10, 0.92)",
                      border: `1px solid ${item.accent}66`,
                      boxShadow: `0 0 0 1px rgba(255,248,230,0.2), 0 6px 14px ${item.accent}33`,
                    }}
                  >
                    <Image
                      src={item.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-11 w-11 object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4
                        className="font-[family-name:var(--font-cinzel)] text-base font-bold leading-tight"
                        style={{ color: ink.title }}
                      >
                        {item.title}
                      </h4>
                      {item.current ? (
                        <span
                          className="rounded-full px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide"
                          style={{ background: item.accent, color: "#fff8e6" }}
                        >
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm font-semibold" style={{ color: item.accent }}>
                      {item.org}
                    </p>
                    <p className="text-xs font-medium" style={{ color: ink.muted }}>
                      {item.period}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: ink.body }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>

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
