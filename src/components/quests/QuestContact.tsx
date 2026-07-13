"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, FolderGit2, Link2, Mail, MapPin, Phone } from "lucide-react";
import { QuestPageHeader } from "@/components/QuestPageHeader";
import { Typewriter } from "@/components/Typewriter";
import { profile, QUEST_ORDER, type QuestId } from "@/data/portfolio";

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
  const total = QUEST_ORDER.length;

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
        <span className="mystical-mist left-[6%] top-[22%] h-28 w-28" aria-hidden />
        <span className="mystical-mist right-[10%] top-[30%] h-36 w-36" style={{ animationDelay: "1.6s" }} aria-hidden />
        <span className="mystical-spark left-[18%] top-[40%]" aria-hidden />
        <span className="mystical-spark right-[28%] bottom-[34%]" style={{ animationDelay: "1.3s" }} aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-6xl flex-col px-3 py-4 sm:px-6 sm:py-6 md:min-h-screen lg:px-8">
        <QuestPageHeader
          questLabel={`Quest ${total} of ${total}`}
          title="Contact"
          onBackToMap={() => onNavigate("map")}
        />

        <div className="grid flex-1 items-center gap-5 pb-2 lg:grid-cols-[1.05fr_0.95fr]">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="relative mx-auto w-full max-w-md"
          >
            <span className="mystical-spark left-[12%] top-[8%]" style={{ animationDelay: "0.6s" }} aria-hidden />
            <span className="mystical-spark right-[16%] top-[18%]" style={{ animationDelay: "1.7s" }} aria-hidden />
            <Image
              src="/quest/letters.webp"
              alt="Sealed parchment letters with purple wax"
              width={900}
              height={602}
              className="float-letters h-auto w-full"
              style={{ filter: "drop-shadow(0 16px 28px rgba(40, 20, 10, 0.35))" }}
              unoptimized
            />
          </motion.div>
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
