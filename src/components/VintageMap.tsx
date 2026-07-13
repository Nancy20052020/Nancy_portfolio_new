"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { QUESTS, MAP_PATH_ORDER, type QuestId } from "@/data/portfolio";

type VintageMapProps = {
  onSelect: (id: QuestId) => void;
  activeId?: QuestId;
};

export function VintageMap({ onSelect, activeId }: VintageMapProps) {
  const pathRef = useRef<SVGPolylineElement>(null);
  const glowRef = useRef<SVGPolylineElement>(null);
  const gradId = useId().replace(/:/g, "");

  const pathPoints = MAP_PATH_ORDER.map((id) => {
    const q = QUESTS.find((item) => item.id === id);
    return q ? `${q.mapPosition.x},${q.mapPosition.y}` : null;
  })
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const line = pathRef.current;
    const glow = glowRef.current;
    if (!line) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const length = line.getTotalLength();

    if (reduce) {
      line.style.strokeDasharray = "1.8 2.4";
      line.style.strokeDashoffset = "0";
      if (glow) {
        glow.style.strokeDasharray = "none";
        glow.style.strokeDashoffset = "0";
      }
      return;
    }

    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
    if (glow) {
      glow.style.strokeDasharray = `${length}`;
      glow.style.strokeDashoffset = `${length}`;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to([glow, line].filter(Boolean), {
        strokeDashoffset: 0,
        duration: 2.2,
        ease: "power2.inOut",
      }).add(() => {
        line.style.strokeDasharray = "1.8 2.4";
        gsap.to(line, {
          strokeDashoffset: -40,
          duration: 14,
          repeat: -1,
          ease: "none",
        });
      });
    });

    return () => ctx.revert();
  }, [pathPoints]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <picture>
        <source media="(max-width: 768px)" srcSet="/quest/map-mobile.webp" type="image/webp" />
        <img
          src="/quest/map.webp"
          alt="Treasure hunt atlas map of Nancy's quests"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
      </picture>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={`quest-path-${gradId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b3fa0" />
            <stop offset="50%" stopColor="#c9a227" />
            <stop offset="100%" stopColor="#c45c5c" />
          </linearGradient>
        </defs>
        <polyline
          ref={glowRef}
          points={pathPoints}
          fill="none"
          stroke="rgba(232, 197, 71, 0.35)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          ref={pathRef}
          points={pathPoints}
          fill="none"
          stroke={`url(#quest-path-${gradId})`}
          strokeWidth="0.55"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1.8 2.4"
          className="map-path"
        />
      </svg>

      {QUESTS.map((quest, index) => {
        const active = activeId === quest.id;
        return (
          <button
            key={quest.id}
            type="button"
            onClick={() => onSelect(quest.id)}
            className="group absolute z-20 -translate-x-1/2 -translate-y-full focus-visible:outline-none"
            style={{
              left: `${quest.mapPosition.x}%`,
              top: `${quest.mapPosition.y}%`,
              animationDelay: `${index * 0.12}s`,
            }}
            aria-label={`Open ${quest.label} quest — ${quest.description}`}
            aria-current={active ? "page" : undefined}
          >
            <span className="relative block animate-[floaty_3.6s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.2}s` }}>
              <span
                className="pointer-events-none absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full opacity-50 blur-md pin-ring"
                style={{ background: quest.pinColor }}
                aria-hidden
              />
              <Image
                src={quest.pinSrc}
                alt=""
                width={72}
                height={108}
                className={`map-quest-pin relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${
                  active ? "scale-110 -translate-y-1" : ""
                }`}
                style={{
                  width: "clamp(2.4rem, 5vw, 3.8rem)",
                  height: "auto",
                }}
                unoptimized
              />
              <span
                className="map-pin-label absolute left-1/2 top-[102%] -translate-x-1/2 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[0.62rem] font-semibold tracking-wide shadow-sm sm:text-xs"
                style={{
                  background: "color-mix(in srgb, var(--surface-elevated) 94%, transparent)",
                  color: "var(--parchment-ink)",
                  border: `1px solid ${quest.pinColor}55`,
                }}
              >
                {quest.label}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
