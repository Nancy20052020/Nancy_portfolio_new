"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FolderGit2, Link2, Mail, Map as MapIcon, MapPin, Phone } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";
import { profile, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

const ink = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
};

export function QuestContact({ onNavigate }: Props) {
  return (
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/quest/contact-bg-mobile.webp" type="image/webp" />
          <img
            src="/quest/contact-bg.webp"
            alt=""
            className="h-full w-full object-cover object-[center_35%]"
            draggable={false}
          />
        </picture>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-caveat)] text-lg sm:text-xl" style={{ color: ink.accent }}>
              Quest 6 of 6
            </p>
            <h2
              className="font-[family-name:var(--font-cinzel)] text-2xl font-bold tracking-wide sm:text-3xl"
              style={{ color: ink.title }}
            >
              Contact
            </h2>
          </div>
          <button type="button" className="btn-ghost shrink-0" onClick={() => onNavigate("map")}>
            <MapIcon size={16} aria-hidden />
            <span className="sm:hidden">Map</span>
            <span className="hidden sm:inline">Back to Map</span>
          </button>
        </header>

        <div className="grid flex-1 items-start gap-5 pb-2 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="quest-art-panel rounded-2xl px-4 py-5 sm:px-6 sm:py-6"
          >
            <Typewriter
              as="h3"
              text="Send a signal from the lighthouse"
              className="font-[family-name:var(--font-cinzel)] text-lg font-bold sm:text-2xl"
              speed={26}
            />
            <p className="mt-3 max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: ink.body }}>
              Whether it&apos;s a collaboration, internship chat, or a new quest idea — drop a letter.
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 transition-opacity hover:opacity-80"
                  style={{ color: ink.title }}
                >
                  <Mail style={{ color: ink.accent }} size={18} aria-hidden />
                  <span className="text-sm sm:text-base">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-opacity hover:opacity-80"
                  style={{ color: ink.title }}
                >
                  <Phone style={{ color: ink.accent }} size={18} aria-hidden />
                  <span className="text-sm sm:text-base">{profile.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3" style={{ color: ink.title }}>
                <MapPin style={{ color: ink.accent }} size={18} aria-hidden />
                <span className="text-sm sm:text-base">{profile.location}</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FolderGit2 size={16} aria-hidden /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Link2 size={16} aria-hidden /> LinkedIn
              </a>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LeetCode
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="quest-art-panel hidden rounded-2xl px-4 py-4 text-sm leading-relaxed lg:block"
            style={{ color: ink.muted }}
          >
            The sealed envelope waits at the lighthouse — seal your message and set a new course together.
          </motion.p>
        </div>

        <footer className="safe-bottom mt-4 flex flex-wrap items-center justify-between gap-3">
          <button type="button" className="btn-ghost" onClick={() => onNavigate("map")}>
            <ArrowLeft size={16} aria-hidden />
            Map
          </button>
        </footer>
      </div>
    </section>
  );
}
