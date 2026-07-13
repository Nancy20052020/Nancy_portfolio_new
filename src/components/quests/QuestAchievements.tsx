"use client";

import { motion } from "framer-motion";
import { Code2, Medal, Star, Trophy } from "lucide-react";
import { QuestChrome, nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { achievements, publications, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ICONS = {
  trophy: Trophy,
  medal: Medal,
  code: Code2,
  star: Star,
};

export function QuestAchievements({ onNavigate }: Props) {
  const next = nextQuest("achievements");

  return (
    <QuestChrome
      title="Achievements"
      questNumber={5}
      onBackToMap={() => onNavigate("map")}
      onNext={next ? () => onNavigate(next) : undefined}
    >
      <Typewriter
        as="h3"
        text="Ancient relic grounds"
        className="font-[family-name:var(--font-cinzel)] text-xl font-semibold sm:text-2xl"
      />
      <p className="mt-2 max-w-2xl text-[color:var(--parchment-muted)]">
        Honors, patents, and publications collected along the trail.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              className="rounded-xl border border-[color:var(--card-border)] bg-[color:var(--surface-elevated)] p-5"
            >
              <div
                className="mb-3 flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  background: "color-mix(in srgb, var(--gold) 25%, transparent)",
                  color: "var(--gold)",
                }}
              >
                <Icon size={22} aria-hidden />
              </div>
              <h4 className="font-[family-name:var(--font-cinzel)] text-base font-semibold">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-[color:var(--parchment-muted)]">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 space-y-3">
        <h4 className="font-[family-name:var(--font-cinzel)] text-sm uppercase tracking-wider text-[color:var(--ink-soft)]">
          Publications & Patents
        </h4>
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="rounded-xl border border-[color:var(--card-border)] bg-[color:var(--parchment)]/50 p-4"
          >
            <p className="font-semibold text-[color:var(--parchment-ink)]">{pub.title}</p>
            <p className="mt-1 text-sm text-[color:var(--banner)]">{pub.venue}</p>
            <p className="mt-1 text-sm text-[color:var(--parchment-muted)]">{pub.result}</p>
          </article>
        ))}
      </div>
    </QuestChrome>
  );
}
