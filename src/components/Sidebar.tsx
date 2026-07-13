"use client";

import type { ComponentType } from "react";
import {
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Mail,
  Map,
  Moon,
  ScrollText,
  Sparkles,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { QUESTS, profile, type QuestId } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

const ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  map: Map,
  about: UserRound,
  skills: Sparkles,
  projects: FolderKanban,
  publications: ScrollText,
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
  const items = [{ id: "map" as QuestId, label: "Map", pinColor: "#c9a227" }, ...QUESTS];

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-[rgba(40,20,10,0.45)] md:hidden"
          aria-label="Close navigation overlay"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`quest-sidebar fixed left-0 top-0 z-50 flex h-full flex-col transition-all duration-300 ${
          collapsed ? "md:w-[4.75rem]" : "md:w-[18rem]"
        } w-[min(18rem,86vw)] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        aria-label="Quest navigation"
      >
        <div className="quest-sidebar-inner flex h-full flex-col">
          <div
            className={`flex items-start gap-2 px-3 pt-4 ${
              collapsed ? "md:justify-center" : "justify-between"
            }`}
          >
            <div className={`min-w-0 ${collapsed ? "md:hidden" : ""} flex-1 pt-1`}>
              <p className="font-[family-name:var(--font-caveat)] text-base leading-none text-[#5b2d91]">
                Explorer&apos;s Journal
              </p>
              <p className="mt-1 font-[family-name:var(--font-cinzel)] text-lg font-extrabold tracking-wide text-[#1f140c]">
                {profile.brand}
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6a1a]">
                {profile.tagline}
              </p>
            </div>

            <button
              type="button"
              className="quest-sidebar-icon-btn md:!hidden"
              onClick={onCloseMobile}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <button
              type="button"
              className="quest-sidebar-icon-btn !hidden md:!inline-flex"
              onClick={onToggleCollapsed}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-expanded={!collapsed}
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>

          {collapsed && (
            <div className="mt-3 hidden justify-center md:flex" aria-hidden>
              <span className="font-[family-name:var(--font-cinzel)] text-[0.7rem] font-bold tracking-[0.2em] text-[#5b2d91]">
                NV
              </span>
            </div>
          )}

          <div className={`mx-3 mt-4 ${collapsed ? "md:mx-2" : ""}`} aria-hidden>
            <div className="quest-sidebar-rule" />
          </div>

          <nav
            className={`mt-3 flex flex-1 flex-col gap-1.5 overflow-y-auto px-3 pb-3 ${collapsed ? "md:px-2" : ""}`}
            aria-label="Sections"
          >
            {items.map((item, index) => {
              const Icon = ICONS[item.id] ?? Map;
              const active = current === item.id;
              const pinColor = "pinColor" in item ? item.pinColor : "#c9a227";
              return (
                <button
                  key={item.id}
                  type="button"
                  title={item.label}
                  onClick={() => {
                    onNavigate(item.id);
                    onCloseMobile();
                  }}
                  className={`quest-nav-item ${collapsed ? "md:justify-center md:px-2" : ""} ${
                    active ? "quest-nav-item-active" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className="quest-nav-gem"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, #fff8e6, ${pinColor})`,
                      boxShadow: active
                        ? `0 0 0 2px rgba(255,248,230,0.9), 0 0 12px ${pinColor}88`
                        : `0 0 0 1px ${pinColor}55`,
                    }}
                  >
                    <Icon size={14} aria-hidden color="#1f140c" />
                  </span>
                  <span className={`min-w-0 ${collapsed ? "md:hidden" : ""}`}>
                    <span className="block font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-wide text-[#1f140c]">
                      {item.label}
                    </span>
                    {item.id !== "map" && "questNumber" in item ? (
                      <span className="block font-[family-name:var(--font-caveat)] text-xs text-[#5b2d91]">
                        Quest {item.questNumber}
                      </span>
                    ) : (
                      <span className="block font-[family-name:var(--font-caveat)] text-xs text-[#5b2d91]">
                        Chart {index + 1}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className={`px-3 pb-4 ${collapsed ? "md:px-2" : ""}`}>
            <div className="quest-sidebar-rule mb-3" aria-hidden />
            <button
              type="button"
              onClick={toggleTheme}
              className={`quest-nav-item w-full ${collapsed ? "md:justify-center md:!px-2" : "justify-center"}`}
              aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
              title={theme === "light" ? "Night Chart" : "Day Chart"}
              suppressHydrationWarning
            >
              {theme === "light" ? <Moon size={16} color="#5b2d91" /> : <Sun size={16} color="#a67c1a" />}
              <span
                className={`font-[family-name:var(--font-cinzel)] text-sm font-semibold text-[#1f140c] ${
                  collapsed ? "md:hidden" : ""
                }`}
                suppressHydrationWarning
              >
                {theme === "light" ? "Night Chart" : "Day Chart"}
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
