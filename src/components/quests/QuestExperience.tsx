"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Map as MapIcon } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-caveat)] text-lg sm:text-xl" style={{ color: ink.accent }}>
              Quest 5 of {total}
            </p>
            <h2
              className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
              style={{ color: ink.title }}
            >
              Experience
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
            text="Harbor of voyages"
            className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-xl"
            speed={28}
          />
          <p className="mt-1 text-sm" style={{ color: ink.body }}>
            Ports of call across tech, scholarship, and geospatial fieldwork.
          </p>
        </div>

        <div className="flex flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:snap-none md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {experience.map((item, i) => (
            <motion.article
              key={`${item.title}-${item.org}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
              className="quest-exp-card relative w-[min(86vw,20rem)] shrink-0 snap-center rounded-2xl p-4 sm:w-auto sm:min-w-0"
            >
              <div className="mb-3 flex items-start gap-3">
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
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: ink.body }}>
                {item.detail}
              </p>
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
