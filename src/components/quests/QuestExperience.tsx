"use client";

import { motion } from "framer-motion";
import { QuestChrome, nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { experience, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

export function QuestExperience({ onNavigate }: Props) {
  const next = nextQuest("experience");

  return (
    <QuestChrome
      title="Experience"
      questNumber={4}
      onBackToMap={() => onNavigate("map")}
      onNext={next ? () => onNavigate(next) : undefined}
    >
      <Typewriter
        as="h3"
        text="Harbor of voyages"
        className="font-[family-name:var(--font-cinzel)] text-xl font-semibold sm:text-2xl"
      />
      <p className="mt-2 max-w-2xl text-[color:var(--parchment-muted)]">
        Ports of call across tech, scholarship, and geospatial fieldwork.
      </p>

      <ol className="relative mt-8 space-y-0 border-l-2 border-[color:var(--banner)] pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <motion.li
            key={`${item.title}-${item.org}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 * i }}
            className="relative pb-8 last:pb-0"
          >
            <span
              className="absolute -left-[1.9rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[color:var(--gold)] bg-[color:var(--banner)] sm:-left-[2.15rem]"
              aria-hidden
            />
            <div className="rounded-xl border border-[color:var(--card-border)] bg-[color:var(--surface-elevated)] p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-[family-name:var(--font-cinzel)] text-base font-semibold sm:text-lg">
                  {item.title}
                </h4>
                {item.current ? (
                  <span className="rounded-full bg-[color:var(--banner)] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-[color:var(--btn-primary-text)]">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-[color:var(--banner)]">
                {item.org} · {item.period}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--parchment-muted)]">
                {item.detail}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </QuestChrome>
  );
}
