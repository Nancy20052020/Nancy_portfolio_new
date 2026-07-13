"use client";

import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Map as MapIcon } from "lucide-react";
import { QUEST_ORDER, type QuestId } from "@/data/portfolio";

type QuestChromeProps = {
  title: string;
  questNumber: number;
  children: ReactNode;
  onBackToMap: () => void;
  onNext?: () => void;
  nextLabel?: string;
};

export function QuestChrome({
  title,
  questNumber,
  children,
  onBackToMap,
  onNext,
  nextLabel = "Next Quest",
}: QuestChromeProps) {
  return (
    <section className="relative mx-auto flex min-h-full w-full max-w-5xl flex-col px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
        <div className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-caveat)] text-lg text-[color:var(--banner)] sm:text-xl">
            Quest {questNumber} of {QUEST_ORDER.length}
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-xl font-bold tracking-wide text-[color:var(--parchment-ink)] sm:text-3xl">
            {title}
          </h2>
        </div>
        <button type="button" className="btn-ghost shrink-0 text-sm sm:text-base" onClick={onBackToMap}>
          <MapIcon size={16} aria-hidden />
          <span className="sm:hidden">Map</span>
          <span className="hidden sm:inline">Back to Map</span>
        </button>
      </header>

      <div className="quest-card relative flex-1 rounded-2xl p-4 sm:p-8">{children}</div>

      <footer className="safe-bottom mt-4 flex flex-wrap items-center justify-between gap-3 sm:mt-5">
        <button type="button" className="btn-ghost" onClick={onBackToMap}>
          <ArrowLeft size={16} aria-hidden />
          Map
        </button>
        {onNext ? (
          <button type="button" className="btn-quest" onClick={onNext}>
            {nextLabel}
            <ArrowRight size={16} aria-hidden />
          </button>
        ) : null}
      </footer>
    </section>
  );
}

export function nextQuest(current: QuestId): QuestId | null {
  const idx = QUEST_ORDER.indexOf(current as (typeof QUEST_ORDER)[number]);
  if (idx < 0 || idx >= QUEST_ORDER.length - 1) return null;
  return QUEST_ORDER[idx + 1];
}
