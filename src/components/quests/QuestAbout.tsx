"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { QuestChrome, nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { profile, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

export function QuestAbout({ onNavigate }: Props) {
  const next = nextQuest("about");

  return (
    <QuestChrome
      title="About Me"
      questNumber={1}
      onBackToMap={() => onNavigate("map")}
      onNext={next ? () => onNavigate(next) : undefined}
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <Typewriter
            as="h3"
            text={`Meet the explorer — ${profile.name}`}
            className="font-[family-name:var(--font-cinzel)] text-xl font-semibold sm:text-2xl"
            speed={28}
          />
          <p className="mt-4 text-base leading-relaxed text-[color:var(--parchment-muted)] sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                label: "Education",
                value: "B.Tech AI & ML",
                sub: profile.education.school,
              },
              {
                icon: Sparkles,
                label: "CGPA",
                value: profile.education.cgpa,
                sub: profile.education.years,
              },
              {
                icon: MapPin,
                label: "Based In",
                value: profile.location,
                sub: "Ready for remote quests",
              },
            ].map((stat, i) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i }}
                className="rounded-xl border border-[color:var(--card-border)] bg-[color:var(--surface-elevated)] p-4"
              >
                <stat.icon
                  className="mb-2 text-[color:var(--banner)]"
                  size={20}
                  aria-hidden
                />
                <p className="font-[family-name:var(--font-cinzel)] text-xs uppercase tracking-wider text-[color:var(--ink-soft)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-[color:var(--parchment-ink)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[color:var(--parchment-muted)]">{stat.sub}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="float-decor relative rotate-2 rounded-sm bg-[color:var(--surface-elevated)] p-3 shadow-xl">
            <svg
              viewBox="0 0 160 200"
              className="aspect-[4/5] w-full rounded-sm"
              role="img"
              aria-label="Illustrated portrait of Nancy watching a sunset"
            >
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f6c28b" />
                  <stop offset="45%" stopColor="#e07a5f" />
                  <stop offset="75%" stopColor="#6b3fa0" />
                  <stop offset="100%" stopColor="#1a2233" />
                </linearGradient>
              </defs>
              <rect width="160" height="200" fill="url(#sky)" />
              <circle cx="118" cy="72" r="18" fill="#ffd27a" opacity="0.9" />
              <path d="M0,150 Q40,130 80,148 T160,142 L160,200 L0,200 Z" fill="#3d2a1f" opacity="0.85" />
              <path d="M55,148 C58,120 70,110 78,110 C86,110 94,122 96,148 Z" fill="#1f1520" />
              <circle cx="78" cy="98" r="10" fill="#2a1c24" />
              <path d="M20,40 Q35,28 48,42" fill="none" stroke="#fff8e6" strokeWidth="1.2" opacity="0.35" />
              <path d="M110,38 Q125,26 138,40" fill="none" stroke="#fff8e6" strokeWidth="1.2" opacity="0.3" />
            </svg>
            <p className="mt-3 text-center font-[family-name:var(--font-caveat)] text-xl text-[color:var(--parchment-ink)]">
              Field notes · {profile.name}
            </p>
          </div>
          <div
            className="pointer-events-none absolute -right-3 top-8 h-16 w-10 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #c45c5c, #7a2f2f 60%, transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-4 bottom-16 h-14 w-14 rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(circle, #9b6dd4 0%, transparent 70%)",
            }}
            aria-hidden
          />
        </motion.aside>
      </div>
    </QuestChrome>
  );
}
