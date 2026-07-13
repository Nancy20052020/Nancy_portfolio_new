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
      {/* Map stays fully visible — overlays are sparse and tucked into corners */}
      <div className="absolute inset-0 bg-[color:var(--parchment-deep)]">
        <VintageMap onSelect={onSelect} />
      </div>

      {/* Brand banner — top left */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65 }}
        className="pointer-events-none absolute left-3 top-3 z-20 w-[7.25rem] sm:left-5 sm:top-5 sm:w-[9.5rem] md:w-[11rem]"
      >
        <div className="relative">
          <Image
            src="/quest/banner.png"
            alt=""
            width={380}
            height={570}
            className="banner-asset h-auto w-full"
            priority
            unoptimized
          />
          <div className="absolute inset-x-[12%] top-[16%] flex flex-col items-center text-center text-[#fff8e6]">
            <p className="font-[family-name:var(--font-cinzel)] text-[0.7rem] font-bold leading-tight tracking-[0.03em] sm:text-[0.85rem] md:text-[0.95rem]">
              {profile.brand}
            </p>
            <p className="mt-1 text-[0.55rem] leading-tight opacity-95 sm:text-[0.7rem]">
              {profile.tagline}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Compass — bottom right, clear of banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="pointer-events-none absolute bottom-24 right-3 z-20 w-[3.75rem] sm:bottom-28 sm:right-5 sm:w-[5.25rem] md:bottom-8 md:w-[6.25rem]"
        aria-hidden
      >
        <Image
          src="/quest/compass.png"
          alt=""
          width={280}
          height={280}
          className="compass-asset float-decor h-auto w-full"
          unoptimized
        />
      </motion.div>

      {/* Compact CTA dock — does not cover the map center */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.55 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-center px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2"
      >
        <div className="pointer-events-auto map-cta-dock flex w-full max-w-xl flex-col items-center gap-2 rounded-2xl px-4 py-3 text-center sm:flex-row sm:gap-4 sm:px-5 sm:py-3.5 sm:text-left">
          <div className="min-w-0 flex-1">
            <Typewriter
              text={profile.headline}
              className="font-[family-name:var(--font-cinzel)] text-sm font-bold leading-snug tracking-wide text-[color:var(--parchment-ink)] sm:text-base md:text-lg"
              speed={28}
            />
            <p className="mt-1 hidden text-xs text-[color:var(--parchment-muted)] sm:block">
              Tap any glowing pin on the map to open that section.
            </p>
          </div>
          <button type="button" className="btn-quest shrink-0 !min-h-10 !px-4 !py-2 text-sm" onClick={onStart}>
            <Send size={15} aria-hidden />
            Start
          </button>
        </div>
      </motion.div>
    </section>
  );
}
