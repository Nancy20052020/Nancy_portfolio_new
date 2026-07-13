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

const ICONS: Record<string, ComponentType<{ size?: number; className?: string; color?: string }>> = {
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
  const isNight = theme === "dark";

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
          <span className="night-star left-[18%] top-[8%]" style={{ animationDelay: "0.4s" }} aria-hidden />
          <span className="night-star right-[22%] top-[14%]" style={{ animationDelay: "1.2s" }} aria-hidden />
          <span className="night-star left-[42%] top-[22%]" style={{ animationDelay: "2.1s" }} aria-hidden />
          <span className="night-star right-[14%] bottom-[28%]" style={{ animationDelay: "0.9s" }} aria-hidden />

          <div
            className={`flex items-start gap-2 px-3 pt-4 ${
              collapsed ? "md:justify-center" : "justify-between"
            }`}
          >
            <div className={`min-w-0 ${collapsed ? "md:hidden" : ""} flex-1 pt-1`}>
              <p className="quest-sidebar-brand font-[family-name:var(--font-caveat)] text-base leading-none">
                Explorer&apos;s Journal
              </p>
              <p className="quest-sidebar-title mt-1 font-[family-name:var(--font-cinzel)] text-lg font-extrabold tracking-wide">
                {profile.brand}
              </p>
              <p className="quest-sidebar-tag mt-0.5 text-xs font-semibold uppercase tracking-[0.14em]">
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
              <span className="quest-sidebar-brand font-[family-name:var(--font-cinzel)] text-[0.7rem] font-bold tracking-[0.2em]">
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
                    className={`quest-nav-gem ${active ? "quest-gem-pulse" : ""}`}
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
                    <span className="quest-nav-label block font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-wide">
                      {item.label}
                    </span>
                    {item.id !== "map" && "questNumber" in item ? (
                      <span className="quest-nav-meta block font-[family-name:var(--font-caveat)] text-xs">
                        Quest {item.questNumber}
                      </span>
                    ) : (
                      <span className="quest-nav-meta block font-[family-name:var(--font-caveat)] text-xs">
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
              aria-label={isNight ? "Switch to day chart (light theme)" : "Switch to night chart (dark theme)"}
              title={isNight ? "Day Chart" : "Night Chart"}
              suppressHydrationWarning
            >
              {isNight ? (
                <Sun size={16} color="var(--gold)" />
              ) : (
                <Moon size={16} color="var(--quest-ink-accent)" />
              )}
              <span
                className={`quest-nav-label font-[family-name:var(--font-cinzel)] text-sm font-semibold ${
                  collapsed ? "md:hidden" : ""
                }`}
                suppressHydrationWarning
              >
                {isNight ? "Day Chart" : "Night Chart"}
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
