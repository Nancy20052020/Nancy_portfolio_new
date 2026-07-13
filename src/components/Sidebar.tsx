"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  Award,
  Briefcase,
  FolderKanban,
  Mail,
  Map,
  Moon,
  Sparkles,
  Sun,
  UserRound,
} from "lucide-react";
import { QUESTS, type QuestId } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

const ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  map: Map,
  about: UserRound,
  skills: Sparkles,
  projects: FolderKanban,
  experience: Briefcase,
  achievements: Award,
  contact: Mail,
};

type SidebarProps = {
  current: QuestId;
  onNavigate: (id: QuestId) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

export function Sidebar({
  current,
  onNavigate,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const items = [{ id: "map" as QuestId, label: "Map", pinColor: "var(--gold)" }, ...QUESTS];

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-label="Close navigation overlay"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[min(18rem,86vw)] flex-col border-r border-[color:var(--card-border)] bg-[color:var(--sidebar)] px-4 py-5 shadow-xl transition-transform duration-300 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Quest navigation"
      >
        <div className="mb-5 flex justify-center px-1">
          <div className="relative w-[8.5rem]">
            <Image
              src="/quest/banner.png"
              alt="TREADURE Quest to Create"
              width={380}
              height={570}
              className="h-auto w-full drop-shadow-md"
              unoptimized
            />
            <div className="absolute inset-x-[12%] top-[18%] text-center text-[#fff8e6]">
              <p className="font-[family-name:var(--font-cinzel)] text-xs font-bold tracking-[0.08em]">
                TREADURE
              </p>
              <p className="text-[0.6rem] opacity-95">Quest to Create</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto" aria-label="Sections">
          {items.map((item) => {
            const Icon = ICONS[item.id] ?? Map;
            const active = current === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  onCloseMobile();
                }}
                className={`flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  active
                    ? "bg-[color:var(--surface-elevated)] text-[color:var(--nav-active)] shadow-sm"
                    : "text-[color:var(--parchment-muted)] hover:bg-[color:var(--surface-elevated)] hover:text-[color:var(--parchment-ink)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{
                    background: active
                      ? "color-mix(in srgb, var(--banner) 18%, transparent)"
                      : "color-mix(in srgb, var(--parchment-ink) 6%, transparent)",
                    color: "pinColor" in item ? item.pinColor : "var(--gold)",
                  }}
                >
                  <Icon size={16} aria-hidden />
                </span>
                <span className="font-[family-name:var(--font-cinzel)] text-sm tracking-wide">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn-ghost mt-4 w-full justify-center"
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          suppressHydrationWarning
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          <span suppressHydrationWarning>
            {theme === "light" ? "Night Chart" : "Day Chart"}
          </span>
        </button>
      </aside>
    </>
  );
}
