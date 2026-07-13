"use client";

import { QUESTS, type QuestId } from "@/data/portfolio";

type VintageMapProps = {
  onSelect: (id: QuestId) => void;
  activeId?: QuestId;
};

export function VintageMap({ onSelect, activeId }: VintageMapProps) {
  const pathPoints = QUESTS.map((q) => `${q.mapPosition.x},${q.mapPosition.y}`).join(" ");

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      role="img"
      aria-label="Treasure map with quest locations"
      preserveAspectRatio="xMidYMid slice"
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

      {/* Continents */}
      <path
        d="M8,55 C12,40 22,32 34,30 C42,28 48,34 52,42 C58,52 48,62 40,68 C28,78 14,72 8,55 Z"
        fill="url(#land)"
        filter="url(#softShadow)"
        opacity="0.95"
      />
      <path
        d="M55,18 C68,12 82,16 88,28 C94,42 86,54 76,58 C66,62 58,50 55,38 C52,28 50,22 55,18 Z"
        fill="url(#land)"
        filter="url(#softShadow)"
        opacity="0.95"
      />
      <path
        d="M48,70 C58,66 70,72 78,80 C84,86 78,94 66,92 C54,90 44,82 48,70 Z"
        fill="url(#land)"
        filter="url(#softShadow)"
        opacity="0.92"
      />

      {/* Mountains */}
      <path d="M64,30 L70,18 L76,30 Z" fill="color-mix(in srgb, var(--parchment-ink) 28%, var(--map-land))" />
      <path d="M70,32 L74,22 L78,32 Z" fill="color-mix(in srgb, var(--parchment-ink) 20%, var(--map-land))" />
      <path d="M18,42 L24,30 L30,42 Z" fill="color-mix(in srgb, var(--parchment-ink) 22%, var(--map-land))" />

      {/* Forest patches */}
      <circle cx="28" cy="58" r="3.2" fill="var(--forest)" opacity="0.45" />
      <circle cx="34" cy="55" r="2.4" fill="var(--forest)" opacity="0.4" />
      <circle cx="62" cy="74" r="2.8" fill="var(--forest)" opacity="0.4" />
      <circle cx="68" cy="78" r="2.2" fill="var(--forest)" opacity="0.35" />

      {/* Ruins / castle hints */}
      <rect x="18" y="34" width="2.2" height="5" fill="color-mix(in srgb, var(--parchment-ink) 35%, transparent)" />
      <rect x="21" y="36" width="1.6" height="3" fill="color-mix(in srgb, var(--parchment-ink) 28%, transparent)" />
      <rect x="74" y="44" width="3" height="2.2" fill="color-mix(in srgb, var(--parchment-ink) 30%, transparent)" />

      {/* Ship */}
      <g transform="translate(42,48)" opacity="0.7">
        <path d="M0,2 L6,2 L4.5,4 L1.5,4 Z" fill="color-mix(in srgb, var(--parchment-ink) 45%, transparent)" />
        <line x1="3" y1="-2" x2="3" y2="2" stroke="color-mix(in srgb, var(--parchment-ink) 45%, transparent)" strokeWidth="0.3" />
        <path d="M3,-2 L5,0 L3,0 Z" fill="var(--banner)" opacity="0.8" />
      </g>

      {/* Sea creature */}
      <path
        d="M86,68 Q90,64 94,68 Q90,72 86,68"
        fill="none"
        stroke="color-mix(in srgb, var(--parchment-ink) 25%, transparent)"
        strokeWidth="0.4"
      />
      <circle cx="86" cy="68" r="0.6" fill="color-mix(in srgb, var(--parchment-ink) 30%, transparent)" />

      {/* Compass rose */}
      <g transform="translate(88,14)" opacity="0.75">
        <circle r="5" fill="none" stroke="var(--gold)" strokeWidth="0.35" />
        <circle r="3.2" fill="none" stroke="var(--gold)" strokeWidth="0.2" />
        <path d="M0,-4.2 L1.1,0 L0,4.2 L-1.1,0 Z" fill="var(--gold)" />
        <path d="M-4.2,0 L0,-1.1 L4.2,0 L0,1.1 Z" fill="var(--banner)" opacity="0.7" />
        <text x="0" y="-5.5" textAnchor="middle" fontSize="2.2" fill="var(--parchment-ink)" fontFamily="serif">
          N
        </text>
      </g>

      {/* Quest path */}
      <polyline
        points={pathPoints}
        fill="none"
        stroke="var(--banner)"
        strokeWidth="0.55"
        className="map-path"
        opacity="0.75"
      />

      {/* Pins */}
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
            <circle r="3.8" fill={quest.pinColor} className="pin-ring" opacity={active ? 0.5 : 0.35} />
            <path
              d="M0,-3.2 C1.8,-3.2 2.8,-1.6 2.8,0 C2.8,1.8 0,4.4 0,4.4 C0,4.4 -2.8,1.8 -2.8,0 C-2.8,-1.6 -1.8,-3.2 0,-3.2 Z"
              fill={quest.pinColor}
              stroke={active ? "var(--gold-bright)" : "color-mix(in srgb, white 40%, transparent)"}
              strokeWidth={active ? 0.45 : 0.25}
              filter="url(#softShadow)"
            />
            <circle r="0.9" fill="#fff8e6" cy="-0.6" />
            <text
              y="8"
              textAnchor="middle"
              fontSize="2.4"
              fontFamily="serif"
              fontWeight="700"
              fill="var(--parchment-ink)"
              style={{ pointerEvents: "none" }}
            >
              {quest.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
