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

export function QuestAbout({ onNavigate }: Props) {
  const next = nextQuest("about");

  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] overflow-hidden md:min-h-screen">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/about-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/about-bg.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--parchment) 18%, transparent) 0%, transparent 25%, transparent 70%, color-mix(in srgb, var(--parchment) 35%, transparent) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-caveat)] text-lg text-[color:var(--banner)] sm:text-xl">
              Quest 1 of 6
            </p>
            <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide text-[color:var(--parchment-ink)] sm:text-3xl">
              About Me
            </h2>
          </div>
          <button type="button" className="btn-ghost shrink-0" onClick={() => onNavigate("map")}>
            <MapIcon size={16} aria-hidden />
            <span className="sm:hidden">Map</span>
            <span className="hidden sm:inline">Back to Map</span>
          </button>
        </header>

        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="order-2 lg:order-1"
          >
            <Typewriter
              as="h3"
              text={`Meet the explorer — ${profile.name}`}
              className="font-[family-name:var(--font-cinzel)] text-xl font-semibold text-[color:var(--parchment-ink)] sm:text-2xl"
              speed={26}
            />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--parchment-muted)] sm:text-base">
              {profile.bio}
            </p>

            <div className="relative mx-auto mt-5 w-full max-w-md sm:mt-7">
              <Image
                src="/quest/about-postcard.webp"
                alt=""
                width={800}
                height={560}
                className="h-auto w-full drop-shadow-xl"
                unoptimized
              />
              <div className="absolute inset-[12%] flex flex-col items-center justify-center gap-2 text-center sm:inset-[14%] sm:gap-3">
                <p className="font-[family-name:var(--font-cinzel)] text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--ink-soft)] sm:text-xs">
                  Field credentials
                </p>
                <p className="font-[family-name:var(--font-cinzel)] text-base font-bold text-[color:var(--parchment-ink)] sm:text-xl">
                  B.Tech AI &amp; ML
                </p>
                <p className="text-xs text-[color:var(--parchment-muted)] sm:text-sm">
                  {profile.education.school}
                </p>
                <div className="mt-1 grid w-full grid-cols-2 gap-2 text-xs sm:gap-3 sm:text-sm">
                  <div>
                    <p className="font-[family-name:var(--font-cinzel)] text-[0.6rem] uppercase tracking-wider text-[color:var(--ink-soft)]">
                      CGPA
                    </p>
                    <p className="font-semibold text-[color:var(--parchment-ink)]">
                      {profile.education.cgpa}
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-cinzel)] text-[0.6rem] uppercase tracking-wider text-[color:var(--ink-soft)]">
                      Based In
                    </p>
                    <p className="font-semibold text-[color:var(--parchment-ink)]">{profile.location}</p>
                  </div>
                </div>
                <p className="text-[0.65rem] text-[color:var(--ink-soft)] sm:text-xs">
                  {profile.education.years}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md"
          >
            <Image
              src="/quest/about-portrait.webp"
              alt={`${profile.name} illustrated portrait`}
              width={720}
              height={640}
              className="float-decor h-auto w-full drop-shadow-2xl"
              priority
              unoptimized
            />
          </motion.aside>
        </div>

        <footer className="safe-bottom mt-5 flex flex-wrap items-center justify-between gap-3">
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
