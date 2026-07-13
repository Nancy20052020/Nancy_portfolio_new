"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { QuestPageHeader } from "@/components/QuestPageHeader";
import { Typewriter } from "@/components/Typewriter";
import { profile, QUEST_ORDER, type QuestId } from "@/data/portfolio";
import { ink } from "@/lib/questInk";

type Props = {
  onNavigate: (id: QuestId) => void;
};

export function QuestAbout({ onNavigate }: Props) {
  const next = nextQuest("about");
  const total = QUEST_ORDER.length;

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/about-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/about-bg.webp"
            alt=""
            className="h-full w-full object-cover object-[center_top] sm:object-center"
            draggable={false}
          />
        </picture>
        <div className="quest-bg-wash" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <QuestPageHeader
          questLabel={`Quest 1 of ${total}`}
          title="About Me"
          onBackToMap={() => onNavigate("map")}
        />

        <div className="grid flex-1 gap-5 pb-2 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-8">
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-md"
          >
            <Image
              src="/quest/about-portrait.webp"
              alt={`${profile.name} illustrated portrait`}
              width={720}
              height={640}
              className="portrait-float h-auto w-full drop-shadow-2xl"
              priority
              unoptimized
            />
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="about-copy-panel rounded-2xl px-4 py-4 sm:px-5 sm:py-5"
          >
            <Typewriter
              as="h3"
              text={`Meet the explorer — ${profile.name}`}
              className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-2xl"
              speed={26}
            />
            <p
              className="mt-3 text-sm leading-relaxed sm:text-base"
              style={{ color: ink.body }}
            >
              {profile.bio}
            </p>

            <div className="relative mx-auto mt-5 w-full max-w-lg">
              <Image
                src="/quest/about-postcard.png"
                alt=""
                width={900}
                height={452}
                className="h-auto w-full"
                unoptimized
              />
              <div className="absolute inset-[10%_8%] flex flex-col items-center justify-center gap-1.5 text-center sm:inset-[12%_10%] sm:gap-2">
                <p
                  className="font-[family-name:var(--font-cinzel)] text-lg font-extrabold leading-tight sm:text-2xl"
                  style={{ color: ink.title }}
                >
                  B.Tech AI &amp; ML
                </p>
                <p className="text-xs font-medium sm:text-sm" style={{ color: ink.body }}>
                  {profile.education.school}
                </p>
                <p className="text-[0.75rem] font-semibold sm:text-sm" style={{ color: ink.muted }}>
                  {profile.education.years}
                </p>
                <div className="mt-1 grid w-full max-w-xs grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <p
                      className="font-[family-name:var(--font-cinzel)] text-[0.6rem] font-semibold uppercase tracking-wider"
                      style={{ color: ink.accent }}
                    >
                      CGPA
                    </p>
                    <p className="text-base font-bold sm:text-lg" style={{ color: ink.title }}>
                      {profile.education.cgpa}
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-[family-name:var(--font-cinzel)] text-[0.6rem] font-semibold uppercase tracking-wider"
                      style={{ color: ink.accent }}
                    >
                      Based In
                    </p>
                    <p className="text-base font-bold sm:text-lg" style={{ color: ink.title }}>
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
