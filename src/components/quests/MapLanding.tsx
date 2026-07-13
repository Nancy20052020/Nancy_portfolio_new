"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Send } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { VintageMap } from "@/components/VintageMap";
import { profile, type QuestId } from "@/data/portfolio";

type MapLandingProps = {
  onSelect: (id: QuestId) => void;
  onStart: () => void;
};

export function MapLanding({ onSelect, onStart }: MapLandingProps) {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = stageRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pins = root.querySelectorAll<HTMLElement>("[data-map-pin]");
    const trail = root.querySelector<SVGPathElement>("[data-map-trail]");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (trail) {
        const length = trail.getTotalLength();
        gsap.set(trail, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.85,
        });
        tl.to(trail, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }, 0.15);
      }

      tl.fromTo(
        pins,
        { opacity: 0, scale: 0.35, y: -28 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.11,
          ease: "back.out(1.7)",
          clearProps: "transform",
        },
        0.35,
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={stageRef}
      className="relative flex h-[calc(100svh-3.5rem)] flex-col overflow-hidden md:h-screen"
    >
      <div className="aurora-band pointer-events-none absolute inset-x-0 top-0 z-[5] h-40" aria-hidden />

      <div className="absolute inset-0 bg-[color:var(--parchment-deep)]">
        <VintageMap onSelect={onSelect} />
        <span className="mystical-mist left-[12%] top-[20%] h-24 w-24 opacity-60" aria-hidden />
        <span
          className="mystical-mist right-[18%] top-[28%] h-32 w-32 opacity-50"
          style={{ animationDelay: "1.8s" }}
          aria-hidden
        />
        <span className="mystical-spark left-[35%] top-[18%]" aria-hidden />
        <span className="mystical-spark right-[30%] bottom-[36%]" style={{ animationDelay: "1.4s" }} aria-hidden />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -18 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-24 right-3 z-20 w-[3.75rem] sm:bottom-28 sm:right-5 sm:w-[5.25rem] md:bottom-8 md:w-[6.25rem]"
        aria-hidden
      >
        <div className="float-decor">
          <Image
            src="/quest/compass.png"
            alt=""
            width={280}
            height={280}
            className="compass-asset compass-spin h-auto w-full"
            unoptimized
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
          <button
            type="button"
            className="btn-quest btn-quest-pulse shrink-0 !min-h-10 !px-4 !py-2 text-sm"
            onClick={onStart}
          >
            <Send size={15} aria-hidden />
            Start
          </button>
        </div>
      </motion.div>
    </section>
  );
}
