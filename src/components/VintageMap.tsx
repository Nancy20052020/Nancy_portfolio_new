"use client";

import Image from "next/image";
import { QUESTS, type QuestId } from "@/data/portfolio";

type VintageMapProps = {
  onSelect: (id: QuestId) => void;
  activeId?: QuestId;
};

/** Smooth path through quest landmarks (percent coords) */
function buildTrailPath() {
  if (QUESTS.length === 0) return "";
  const [first, ...rest] = QUESTS;
  return `M ${first.mapPosition.x} ${first.mapPosition.y} ${rest
    .map((q) => `L ${q.mapPosition.x} ${q.mapPosition.y}`)
    .join(" ")}`;
}

export function VintageMap({ onSelect, activeId }: VintageMapProps) {
  const trail = buildTrailPath();

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

      <div className="map-night-wash" aria-hidden />

      <svg
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className="map-path"
          d={trail}
          fill="none"
          stroke="color-mix(in srgb, var(--gold) 70%, transparent)"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
          opacity="0.7"
        />
      </svg>

      <span className="mystical-mist left-[8%] top-[14%] h-28 w-28 opacity-50" aria-hidden />
      <span
        className="mystical-mist right-[12%] top-[22%] h-36 w-36 opacity-45"
        style={{ animationDelay: "1.6s" }}
        aria-hidden
      />
      <span className="mystical-spark left-[28%] top-[18%]" aria-hidden />
      <span className="mystical-spark right-[26%] bottom-[28%]" style={{ animationDelay: "1.3s" }} aria-hidden />
      <span className="night-star left-[15%] top-[40%]" style={{ animationDelay: "0.5s" }} aria-hidden />
      <span className="night-star right-[20%] top-[55%]" style={{ animationDelay: "1.8s" }} aria-hidden />
      <span className="night-star left-[48%] top-[12%]" style={{ animationDelay: "2.4s" }} aria-hidden />

      {QUESTS.map((quest, index) => {
        const active = activeId === quest.id;
        return (
          <button
            key={quest.id}
            type="button"
            onClick={() => onSelect(quest.id)}
            className="group absolute z-20 flex -translate-x-1/2 flex-col items-center focus-visible:outline-none"
            style={{
              left: `${quest.mapPosition.x}%`,
              top: `${quest.mapPosition.y}%`,
              width: "clamp(4.5rem, 11vw, 7rem)",
            }}
            aria-label={`Open ${quest.label} — ${quest.description}`}
            aria-current={active ? "page" : undefined}
          >
            {/* Anchor line: tip of pin = top of this button = island coords */}
            <span className="relative h-0 w-full">
              <span
                className="pin-ground pointer-events-none absolute left-1/2 top-0 z-20"
                style={{
                  background: quest.pinColor,
                  boxShadow: `0 0 14px 3px ${quest.pinColor}aa`,
                }}
                aria-hidden
              />
              <span
                className="map-pin-bob absolute bottom-0 left-1/2 z-10 origin-bottom"
                style={{ animationDelay: `${index * 0.22}s` }}
              >
                <span
                  className="pointer-events-none absolute bottom-[8%] left-1/2 h-12 w-12 -translate-x-1/2 rounded-full opacity-55 blur-xl pin-ring sm:h-14 sm:w-14"
                  style={{ background: quest.pinColor }}
                  aria-hidden
                />
                <Image
                  src={quest.pinSrc}
                  alt=""
                  width={96}
                  height={144}
                  className={`map-quest-pin relative block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${
                    active ? "scale-110 -translate-y-1" : ""
                  }`}
                  style={{
                    width: "clamp(3.25rem, 7.5vw, 5.25rem)",
                    height: "auto",
                    filter: `drop-shadow(0 0 10px ${quest.pinColor}) drop-shadow(0 6px 14px rgba(0,0,0,0.45))`,
                  }}
                  unoptimized
                />
              </span>
            </span>

            <span
              className={`map-pin-label relative z-20 mt-3 rounded-md px-2 py-1 text-center text-[0.7rem] font-bold tracking-wide shadow-md sm:mt-3.5 sm:text-sm ${
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
          </button>
        );
      })}
    </div>
  );
}
