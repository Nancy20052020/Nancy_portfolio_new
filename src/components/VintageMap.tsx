"use client";

import { QUESTS, type QuestId } from "@/data/portfolio";

type VintageMapProps = {
  onSelect: (id: QuestId) => void;
  activeId?: QuestId;
};

export function VintageMap({ onSelect, activeId }: VintageMapProps) {
  const pathPoints = QUESTS.map((q) => `${q.mapPosition.x},${q.mapPosition.y}`).join(" ");

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Treasure map with quest locations"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--map-water)" />
            <stop offset="100%" stopColor="color-mix(in srgb, var(--map-water) 70%, #2a4a5c)" />
          </linearGradient>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--map-land)" />
            <stop offset="100%" stopColor="color-mix(in srgb, var(--map-land) 80%, #8a7040)" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0.4" stdDeviation="0.5" floodOpacity="0.25" />
          </filter>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="color-mix(in srgb, var(--parchment-ink) 12%, transparent)"
              strokeWidth="0.15"
            />
          </pattern>
        </defs>

        <rect width="100" height="100" fill="url(#water)" />
        <rect width="100" height="100" fill="url(#grid)" opacity="0.5" />

        <path
          d="M6,58 C10,38 20,28 36,26 C46,24 52,32 56,42 C62,54 50,66 40,72 C26,82 10,76 6,58 Z"
          fill="url(#land)"
          filter="url(#softShadow)"
        />
        <path
          d="M58,14 C72,8 86,14 92,28 C98,44 88,56 76,60 C64,64 56,50 54,36 C52,24 52,18 58,14 Z"
          fill="url(#land)"
          filter="url(#softShadow)"
        />
        <path
          d="M46,74 C58,70 72,76 80,84 C86,90 78,96 64,94 C50,92 40,84 46,74 Z"
          fill="url(#land)"
          filter="url(#softShadow)"
        />

        <path d="M68,28 L74,14 L80,28 Z" fill="color-mix(in srgb, var(--parchment-ink) 28%, var(--map-land))" />
        <path d="M74,30 L78,18 L82,30 Z" fill="color-mix(in srgb, var(--parchment-ink) 20%, var(--map-land))" />
        <path d="M20,40 L26,26 L32,40 Z" fill="color-mix(in srgb, var(--parchment-ink) 22%, var(--map-land))" />
        <circle cx="74" cy="16" r="1.1" fill="#dfefff" opacity="0.85" />
        <circle cx="78" cy="20" r="0.8" fill="#dfefff" opacity="0.7" />

        <circle cx="28" cy="58" r="3.2" fill="var(--forest)" opacity="0.45" />
        <circle cx="34" cy="55" r="2.4" fill="var(--forest)" opacity="0.4" />
        <circle cx="62" cy="78" r="2.8" fill="var(--forest)" opacity="0.4" />
        <circle cx="68" cy="82" r="2.2" fill="var(--forest)" opacity="0.35" />

        <rect x="18" y="32" width="2.4" height="5.5" fill="color-mix(in srgb, var(--parchment-ink) 35%, transparent)" />
        <rect x="21.2" y="34" width="1.8" height="3.5" fill="color-mix(in srgb, var(--parchment-ink) 28%, transparent)" />
        <rect x="16.5" y="31" width="1.2" height="1.2" fill="color-mix(in srgb, var(--parchment-ink) 32%, transparent)" />
        <rect x="76" y="46" width="3.2" height="2.4" fill="color-mix(in srgb, var(--parchment-ink) 30%, transparent)" />
        <rect x="78" y="44" width="1.2" height="2" fill="color-mix(in srgb, var(--parchment-ink) 28%, transparent)" />

        <g transform="translate(44,46)" opacity="0.75">
          <path d="M0,2 L7,2 L5.2,4.2 L1.8,4.2 Z" fill="color-mix(in srgb, var(--parchment-ink) 45%, transparent)" />
          <line x1="3.5" y1="-2.5" x2="3.5" y2="2" stroke="color-mix(in srgb, var(--parchment-ink) 45%, transparent)" strokeWidth="0.3" />
          <path d="M3.5,-2.5 L6,0 L3.5,0 Z" fill="var(--banner)" opacity="0.85" />
        </g>

        <g transform="translate(88,70)" opacity="0.55">
          <path d="M0,0 Q4,-4 8,0 Q4,4 0,0" fill="none" stroke="color-mix(in srgb, var(--parchment-ink) 40%, transparent)" strokeWidth="0.45" />
          <circle cx="0" cy="0" r="0.8" fill="color-mix(in srgb, var(--parchment-ink) 35%, transparent)" />
          <path d="M8,0 Q10,-2 11,1" fill="none" stroke="color-mix(in srgb, var(--parchment-ink) 35%, transparent)" strokeWidth="0.35" />
        </g>

        <g transform="translate(90,12)" opacity="0.8">
          <circle r="5.5" fill="none" stroke="var(--gold)" strokeWidth="0.35" />
          <circle r="3.4" fill="none" stroke="var(--gold)" strokeWidth="0.2" />
          <path d="M0,-4.5 L1.2,0 L0,4.5 L-1.2,0 Z" fill="var(--gold)" />
          <path d="M-4.5,0 L0,-1.2 L4.5,0 L0,1.2 Z" fill="var(--banner)" opacity="0.75" />
          <text x="0" y="-6.2" textAnchor="middle" fontSize="2.4" fill="var(--parchment-ink)" fontFamily="serif">
            N
          </text>
        </g>

        <polyline
          points={pathPoints}
          fill="none"
          stroke="var(--banner)"
          strokeWidth="0.55"
          className="map-path"
          opacity="0.75"
        />

        {QUESTS.map((quest) => {
          const active = activeId === quest.id;
          return (
            <g
              key={quest.id}
              transform={`translate(${quest.mapPosition.x}, ${quest.mapPosition.y})`}
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(quest.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(quest.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${quest.label} quest`}
            >
              <circle r="4" fill={quest.pinColor} className="pin-ring" opacity={active ? 0.5 : 0.35} />
              <path
                d="M0,-3.4 C1.9,-3.4 3,-1.7 3,0 C3,1.9 0,4.6 0,4.6 C0,4.6 -3,1.9 -3,0 C-3,-1.7 -1.9,-3.4 0,-3.4 Z"
                fill={quest.pinColor}
                stroke={active ? "var(--gold-bright)" : "color-mix(in srgb, white 40%, transparent)"}
                strokeWidth={active ? 0.45 : 0.25}
                filter="url(#softShadow)"
              />
              <circle r="1" fill="#fff8e6" cy="-0.65" />
            </g>
          );
        })}
      </svg>

      {QUESTS.map((quest) => (
        <button
          key={`label-${quest.id}`}
          type="button"
          onClick={() => onSelect(quest.id)}
          className="absolute -translate-x-1/2 map-pin-label rounded-md px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide shadow-sm sm:text-xs"
          style={{
            left: `${quest.mapPosition.x}%`,
            top: `calc(${quest.mapPosition.y}% + 1.1rem)`,
            background: "color-mix(in srgb, var(--surface-elevated) 92%, transparent)",
            color: "var(--parchment-ink)",
            border: "1px solid var(--card-border)",
          }}
        >
          {quest.label}
        </button>
      ))}
    </div>
  );
}
