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
        <source media="(max-width: 768px)" srcSet="/quest/map-mobile.webp" type="image/webp" />
        <img
          src="/quest/map.webp"
          alt="Treasure hunt atlas map of Nancy Verma's portfolio"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
      </picture>

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
            }}
            aria-label={`Open ${quest.label} — ${quest.description}`}
            aria-current={active ? "page" : undefined}
          >
            <span
              className="relative block animate-[floaty_3.6s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.18}s` }}
            >
              {/* Outer glow bloom */}
              <span
                className="pointer-events-none absolute bottom-[8%] left-1/2 h-14 w-14 -translate-x-1/2 rounded-full opacity-70 blur-xl pin-ring sm:h-16 sm:w-16"
                style={{ background: quest.pinColor }}
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-[12%] left-1/2 h-8 w-8 -translate-x-1/2 rounded-full opacity-80 blur-md"
                style={{
                  background: quest.pinColor,
                  boxShadow: `0 0 22px 8px ${quest.pinColor}`,
                }}
                aria-hidden
              />
              <Image
                src={quest.pinSrc}
                alt=""
                width={96}
                height={144}
                className={`map-quest-pin relative transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 ${
                  active ? "scale-110 -translate-y-1.5" : ""
                }`}
                style={{
                  width: "clamp(3.6rem, 8.5vw, 5.75rem)",
                  height: "auto",
                  filter: `drop-shadow(0 0 10px ${quest.pinColor}) drop-shadow(0 6px 14px rgba(0,0,0,0.45))`,
                }}
                unoptimized
              />
              <span
                className={`map-pin-label absolute left-1/2 top-[102%] -translate-x-1/2 rounded-md px-2 py-1 text-center text-[0.7rem] font-bold tracking-wide shadow-md sm:text-sm ${
                  quest.id === "publications"
                    ? "max-w-[7.5rem] whitespace-normal leading-tight sm:max-w-[9rem]"
                    : "whitespace-nowrap"
                }`}
                style={{
                  background: "color-mix(in srgb, var(--surface-elevated) 96%, transparent)",
                  color: "var(--parchment-ink)",
                  border: `1.5px solid ${quest.pinColor}`,
                  boxShadow: `0 0 12px ${quest.pinColor}55`,
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
