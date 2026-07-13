"use client";

import { motion } from "framer-motion";
import { FolderGit2, Link2, Mail, MapPin, Phone } from "lucide-react";
import { QuestChrome } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { profile, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

export function QuestContact({ onNavigate }: Props) {
  return (
    <QuestChrome title="Contact" questNumber={6} onBackToMap={() => onNavigate("map")}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Typewriter
            as="h3"
            text="Send a signal from the lighthouse"
            className="font-[family-name:var(--font-cinzel)] text-xl font-semibold sm:text-2xl"
          />
          <p className="mt-3 max-w-lg text-[color:var(--parchment-muted)]">
            Whether it&apos;s a collaboration, internship chat, or a new quest idea — drop a letter.
          </p>

          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-[color:var(--parchment-ink)] transition-colors hover:text-[color:var(--banner)]"
              >
                <Mail className="text-[color:var(--banner)]" size={18} aria-hidden />
                <span>{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-[color:var(--parchment-ink)] transition-colors hover:text-[color:var(--banner)]"
              >
                <Phone className="text-[color:var(--banner)]" size={18} aria-hidden />
                <span>{profile.phone}</span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[color:var(--banner)]" size={18} aria-hidden />
              <span>{profile.location}</span>
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
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -4 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
          aria-hidden
        >
          <div
            className="float-decor aspect-[4/3] rounded-2xl shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, color-mix(in srgb, var(--envelope) 85%, #fff) 0%, var(--envelope) 55%, color-mix(in srgb, var(--envelope) 70%, #1a1028) 100%)",
            }}
          >
            <div className="absolute inset-6 rounded-lg border border-white/25 bg-white/10" />
            <div
              className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, var(--gold-bright), var(--gold) 55%, #8a6a10)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 h-px bg-white/30" />
            <div className="absolute bottom-5 left-10 right-10 h-px bg-white/20" />
          </div>
          <div
            className="pointer-events-none absolute -right-2 top-6 h-24 w-8 opacity-70"
            style={{
              background:
                "linear-gradient(180deg, #9b6dd4, #6b3fa0 40%, transparent)",
              borderRadius: "40% 60% 50% 50%",
            }}
          />
        </motion.div>
      </div>
    </QuestChrome>
  );
}
