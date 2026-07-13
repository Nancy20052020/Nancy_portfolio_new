"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Map as MapIcon } from "lucide-react";
import { ink } from "@/lib/questInk";

type Props = {
  questLabel: string;
  title: string;
  onBackToMap: () => void;
  actions?: ReactNode;
};

/** High-contrast title tab so quest labels stay readable on parchment art */
export function QuestPageHeader({ questLabel, title, onBackToMap, actions }: Props) {
  return (
    <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="quest-title-tab rounded-2xl px-4 py-2.5 sm:px-5"
      >
        <p
          className="font-[family-name:var(--font-caveat)] text-lg leading-none sm:text-xl"
          style={{ color: ink.accent }}
        >
          {questLabel}
        </p>
        <h2
          className="mt-1 font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
          style={{ color: ink.title }}
        >
          {title}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.12, duration: 0.4 }}
        className="flex items-center gap-2"
      >
        {actions}
        <button type="button" className="btn-ghost shrink-0" onClick={onBackToMap}>
          <MapIcon size={16} aria-hidden />
          <span className="sm:hidden">Map</span>
          <span className="hidden sm:inline">Back to Map</span>
        </button>
      </motion.div>
    </header>
  );
}
