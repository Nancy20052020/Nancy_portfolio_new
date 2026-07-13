"use client";

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
    <section className="relative flex h-[100svh] flex-col overflow-hidden md:h-screen">
      <div
        className="absolute inset-0"
        style={{ background: "var(--map-water)" }}
      >
        <VintageMap onSelect={onSelect} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, color-mix(in srgb, var(--parchment) 45%, transparent) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-4 py-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="banner-ribbon max-w-[14rem] px-4 pb-5 pt-3 sm:max-w-[16rem]"
        >
          <p className="font-[family-name:var(--font-cinzel)] text-lg font-bold tracking-[0.08em] sm:text-xl">
            {profile.brand}
          </p>
          <p className="text-xs opacity-95 sm:text-sm">{profile.tagline}</p>
          <p className="mt-1 font-[family-name:var(--font-caveat)] text-base text-[color:var(--gold-bright)]">
            {profile.name}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="mx-auto mb-4 max-w-lg text-center sm:mb-8"
        >
          <div className="quest-card rounded-2xl px-5 py-5 sm:px-7 sm:py-7">
            <Typewriter
              text={profile.headline}
              className="font-[family-name:var(--font-cinzel)] text-xl font-bold leading-snug tracking-wide text-[color:var(--parchment-ink)] sm:text-3xl md:text-[2rem]"
              speed={32}
            />
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--parchment-muted)] sm:text-base">
              Chart Nancy&apos;s path through AI, GIS, and creative engineering — six quests across an
              explorer&apos;s atlas.
            </p>
            <button type="button" className="btn-quest mt-5" onClick={onStart}>
              <Send size={16} aria-hidden />
              Start the Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
