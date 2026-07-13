"use client";

import Image from "next/image";
import { QUESTS, type QuestId } from "@/data/portfolio";

type VintageMapProps = {
  onSelect: (id: QuestId) => void;
  activeId?: QuestId;
};

export function VintageMap({ onSelect, activeId }: VintageMapProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/quest/map-mobile.webp"
          type="image/webp"
        />
        <img
          src="/quest/map.webp"
          alt="Treasure hunt atlas map of Nancy's quests"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
      </picture>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 42%, color-mix(in srgb, var(--parchment) 35%, transparent) 100%)",
        }}
      />

      {QUESTS.map((quest) => {
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
            }}
            aria-label={`Open ${quest.label} quest — ${quest.description}`}
            aria-current={active ? "page" : undefined}
          >
            <span className="relative block">
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
                className={`map-quest-pin relative drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${
                  active ? "scale-110 -translate-y-1" : ""
                }`}
                style={{
                  width: "clamp(2.6rem, 5.5vw, 4.25rem)",
                  height: "auto",
                  mixBlendMode: "normal",
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
