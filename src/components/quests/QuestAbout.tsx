"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Map as MapIcon } from "lucide-react";
import { nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { profile, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

/** Fixed ink colors — About parchment art is always light, even in dark theme */
const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
};

export function QuestAbout({ onNavigate }: Props) {
  const next = nextQuest("about");

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
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p
              className="font-[family-name:var(--font-caveat)] text-lg sm:text-xl"
              style={{ color: ink.accent }}
            >
              Quest 1 of 6
            </p>
            <h2
              className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
              style={{ color: ink.title }}
            >
              About Me
            </h2>
          </div>
          <button type="button" className="btn-ghost shrink-0" onClick={() => onNavigate("map")}>
            <MapIcon size={16} aria-hidden />
            <span className="sm:hidden">Map</span>
            <span className="hidden sm:inline">Back to Map</span>
          </button>
        </header>

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
              className="h-auto w-full drop-shadow-2xl"
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
                  className="font-[family-name:var(--font-cinzel)] text-[0.65rem] font-semibold uppercase tracking-[0.16em] sm:text-xs"
                  style={{ color: ink.accent }}
                >
                  Field credentials
                </p>
                <p
                  className="font-[family-name:var(--font-cinzel)] text-lg font-extrabold leading-tight sm:text-2xl"
                  style={{ color: ink.title }}
                >
                  B.Tech AI &amp; ML
                </p>
                <p className="text-xs font-medium sm:text-sm" style={{ color: ink.body }}>
                  {profile.education.school}
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
                <p className="text-[0.7rem] font-medium sm:text-xs" style={{ color: ink.muted }}>
                  {profile.education.years}
                </p>
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
