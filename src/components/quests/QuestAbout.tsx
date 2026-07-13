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
          <div className="float-decor rotate-2 rounded-sm bg-[color:var(--surface-elevated)] p-3 shadow-xl">
            <div
              className="aspect-[4/5] rounded-sm"
              style={{
                background:
                  "linear-gradient(160deg, #f0b27a 0%, #c0392b 35%, #5b2d91 70%, #1a2233 100%)",
              }}
              role="img"
              aria-label="Illustrated portrait placeholder of Nancy watching a sunset"
            />
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
