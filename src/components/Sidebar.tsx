"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Mail,
  Map,
  Moon,
  Sparkles,
  Sun,
  UserRound,
  X,
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
  collapsed: boolean;
  onToggleCollapsed: () => void;
};

export function Sidebar({
  current,
  onNavigate,
  mobileOpen,
  onCloseMobile,
  collapsed,
  onToggleCollapsed,
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
        className={`fixed left-0 top-0 z-50 flex h-full flex-col border-r border-[color:var(--card-border)] bg-[color:var(--sidebar)] shadow-xl transition-all duration-300 ${
          collapsed ? "md:w-[4.5rem]" : "md:w-[18rem]"
        } w-[min(18rem,86vw)] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        aria-label="Quest navigation"
      >
        <div className={`flex items-start gap-2 px-3 pt-4 ${collapsed ? "md:justify-center" : "justify-between"}`}>
          <div className={`relative ${collapsed ? "md:hidden" : ""} w-[7.5rem] shrink-0`}>
            <Image
              src="/quest/banner.png"
              alt="TREADURE Quest to Create"
              width={380}
              height={570}
              className="banner-asset h-auto w-full"
              unoptimized
            />
            <div className="absolute inset-x-[14%] top-[17%] text-center text-[#fff8e6]">
              <p className="font-[family-name:var(--font-cinzel)] text-[0.7rem] font-bold tracking-[0.1em]">
                TREADURE
              </p>
              <p className="mt-0.5 text-[0.55rem] opacity-90">Quest to Create</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="btn-ghost !min-h-9 !px-2 md:hidden"
              onClick={onCloseMobile}
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
            <button
              type="button"
              className="btn-ghost hidden !min-h-9 !px-2 md:inline-flex"
              onClick={onToggleCollapsed}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-expanded={!collapsed}
            >
              {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
        </div>

        {collapsed && (
          <div className="mt-3 hidden justify-center md:flex" aria-hidden>
            <span className="font-[family-name:var(--font-cinzel)] text-[0.65rem] font-bold tracking-widest text-[color:var(--banner)]">
              TV
            </span>
          </div>
        )}

        <nav
          className={`mt-4 flex flex-1 flex-col gap-1.5 overflow-y-auto px-3 pb-3 ${collapsed ? "md:px-2" : ""}`}
          aria-label="Sections"
        >
          {items.map((item) => {
            const Icon = ICONS[item.id] ?? Map;
            const active = current === item.id;
            return (
              <button
                key={item.id}
                type="button"
                title={item.label}
                onClick={() => {
                  onNavigate(item.id);
                  onCloseMobile();
                }}
                className={`flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  collapsed ? "md:justify-center md:px-2" : ""
                } ${
                  active
                    ? "bg-[color:var(--surface-elevated)] text-[color:var(--nav-active)] shadow-sm"
                    : "text-[color:var(--parchment-muted)] hover:bg-[color:var(--surface-elevated)] hover:text-[color:var(--parchment-ink)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: active
                      ? "color-mix(in srgb, var(--banner) 18%, transparent)"
                      : "color-mix(in srgb, var(--parchment-ink) 6%, transparent)",
                    color: "pinColor" in item ? item.pinColor : "var(--gold)",
                  }}
                >
                  <Icon size={16} aria-hidden />
                </span>
                <span
                  className={`font-[family-name:var(--font-cinzel)] text-sm tracking-wide ${
                    collapsed ? "md:hidden" : ""
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className={`px-3 pb-4 ${collapsed ? "md:px-2" : ""}`}>
          <button
            type="button"
            onClick={toggleTheme}
            className={`btn-ghost w-full ${collapsed ? "md:justify-center md:!px-2" : "justify-center"}`}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            title={theme === "light" ? "Night Chart" : "Day Chart"}
            suppressHydrationWarning
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span className={collapsed ? "md:hidden" : ""} suppressHydrationWarning>
              {theme === "light" ? "Night Chart" : "Day Chart"}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
