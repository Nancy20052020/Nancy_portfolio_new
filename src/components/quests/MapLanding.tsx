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
        <span className="mystical-mist left-[12%] top-[20%] h-24 w-24 opacity-60" aria-hidden />
        <span className="mystical-mist right-[18%] top-[28%] h-32 w-32 opacity-50" style={{ animationDelay: "1.8s" }} aria-hidden />
        <span className="mystical-spark left-[35%] top-[18%]" aria-hidden />
        <span className="mystical-spark right-[30%] bottom-[36%]" style={{ animationDelay: "1.4s" }} aria-hidden />
      </div>

      {/* Compass — bottom right */}
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
              className="map-cta-headline font-[family-name:var(--font-cinzel)] text-sm font-bold leading-snug tracking-wide sm:text-base md:text-lg"
              speed={28}
            />
            <p className="map-cta-hint mt-1 text-xs sm:text-sm">
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
