"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { VintageMap } from "@/components/VintageMap";
import { profile, type QuestId } from "@/data/portfolio";

type MapLandingProps = {
  onSelect: (id: QuestId) => void;
  onStart: () => void;
};

export function MapLanding({ onSelect, onStart }: MapLandingProps) {
  return (
    <section className="relative flex h-[calc(100svh-3.5rem)] flex-col overflow-hidden md:h-screen">
      <div className="absolute inset-0 bg-[color:var(--parchment-deep)]">
        <VintageMap onSelect={onSelect} />
      </div>

      <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-8 sm:pt-5 lg:px-10">
        <div className="flex items-start justify-between gap-3">
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-auto relative w-[7.5rem] sm:w-[10.5rem] md:w-[12rem]"
          >
            <Image
              src="/quest/banner.png"
              alt=""
              width={380}
              height={570}
              className="h-auto w-full drop-shadow-xl"
              style={{ mixBlendMode: "normal" }}
              priority
              unoptimized
            />
            <div className="absolute inset-x-[12%] top-[18%] text-center text-[#fff8e6] sm:top-[20%]">
              <p className="font-[family-name:var(--font-cinzel)] text-[0.7rem] font-bold leading-tight tracking-[0.08em] sm:text-sm md:text-base">
                {profile.brand}
              </p>
              <p className="mt-0.5 text-[0.55rem] opacity-95 sm:text-xs">{profile.tagline}</p>
              <p className="mt-1 font-[family-name:var(--font-caveat)] text-sm text-[color:var(--gold-bright)] sm:text-base md:text-lg">
                {profile.name}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="pointer-events-none w-[4.5rem] shrink-0 sm:w-[6.5rem] md:w-[8rem]"
            aria-hidden
          >
            <Image
              src="/quest/compass.png"
              alt=""
              width={280}
              height={280}
              className="float-decor h-auto w-full drop-shadow-lg"
              unoptimized
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="pointer-events-auto mx-auto mb-2 max-w-lg text-center sm:mb-8"
        >
          <div className="quest-card rounded-2xl px-4 py-4 sm:px-7 sm:py-7">
            <Typewriter
              text={profile.headline}
              className="font-[family-name:var(--font-cinzel)] text-lg font-bold leading-snug tracking-wide text-[color:var(--parchment-ink)] sm:text-3xl md:text-[2rem]"
              speed={32}
            />
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--parchment-muted)] sm:mt-3 sm:text-base">
              Tap any glowing pin on the atlas — About, Skills, Projects, Experience, Achievements, or
              Contact — or begin at the first quest.
            </p>
            <button type="button" className="btn-quest mt-4 w-full sm:mt-5 sm:w-auto" onClick={onStart}>
              <Send size={16} aria-hidden />
              Start the Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
