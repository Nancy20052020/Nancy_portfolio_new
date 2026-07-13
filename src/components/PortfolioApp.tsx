"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { Menu, PanelLeft } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MapLanding } from "@/components/quests/MapLanding";
import { QuestAbout } from "@/components/quests/QuestAbout";
import { QuestSkills } from "@/components/quests/QuestSkills";
import { QuestProjects } from "@/components/quests/QuestProjects";
import { QuestPublications } from "@/components/quests/QuestPublications";
import { QuestExperience } from "@/components/quests/QuestExperience";
import { QuestAchievements } from "@/components/quests/QuestAchievements";
import { QuestContact } from "@/components/quests/QuestContact";
import { QUEST_ORDER, type QuestId } from "@/data/portfolio";

export function PortfolioApp() {
  const [current, setCurrent] = useState<QuestId>(() => {
    if (typeof window === "undefined") return "map";
    const hash = window.location.hash.replace("#", "") as QuestId | "";
    if (hash === "map" || QUEST_ORDER.includes(hash as (typeof QUEST_ORDER)[number])) {
      return (hash || "map") as QuestId;
    }
    return "map";
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((id: QuestId) => {
    setCurrent(id);
    window.history.replaceState(null, "", id === "map" ? "#" : `#${id}`);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("treadure-sidebar");
    if (stored === "collapsed") {
      queueMicrotask(() => setCollapsed(true));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("treadure-sidebar", collapsed ? "collapsed" : "open");
  }, [collapsed]);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "") as QuestId | "";
      if (hash === "map" || QUEST_ORDER.includes(hash as (typeof QUEST_ORDER)[number])) {
        setCurrent((hash || "map") as QuestId);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0.35, y: 18, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power2.out" },
      );
    }, el);

    return () => ctx.revert();
  }, [current]);

  return (
    <div className="parchment-bg min-h-screen">
      <a
        href="#main-quest"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[color:var(--surface-elevated)] focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>

      <Sidebar
        current={current}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed((v) => !v)}
      />

      <div
        className={`transition-[padding] duration-300 ${collapsed ? "md:pl-[4.75rem]" : "md:pl-[18rem]"}`}
      >
        <div className="quest-mobile-bar sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-3 safe-top md:hidden">
          <button
            type="button"
            className="quest-sidebar-icon-btn !min-h-10 !min-w-auto gap-2 !rounded-full !px-3"
            onClick={() => setMobileOpen(true)}
            aria-label="Open quest menu"
          >
            <Menu size={18} />
            Menu
          </button>
          <p className="font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-wide text-[color:var(--quest-ink-title)]">
            Nancy Verma
          </p>
        </div>

        {/* Desktop expand affordance when collapsed */}
        {collapsed && (
          <button
            type="button"
            className="btn-ghost fixed left-[4.75rem] top-4 z-40 hidden !min-h-9 !px-2 md:inline-flex"
            onClick={() => setCollapsed(false)}
            aria-label="Expand sidebar"
          >
            <PanelLeft size={16} />
          </button>
        )}

        <main id="main-quest" className="min-h-screen" tabIndex={-1}>
          <div ref={stageRef} className="min-h-[calc(100vh-3.5rem)] md:min-h-screen">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="min-h-full"
              >
                {current === "map" && (
                  <MapLanding onSelect={navigate} onStart={() => navigate("about")} />
                )}
                {current === "about" && <QuestAbout onNavigate={navigate} />}
                {current === "skills" && <QuestSkills onNavigate={navigate} />}
                {current === "projects" && <QuestProjects onNavigate={navigate} />}
                {current === "publications" && <QuestPublications onNavigate={navigate} />}
                {current === "experience" && <QuestExperience onNavigate={navigate} />}
                {current === "achievements" && <QuestAchievements onNavigate={navigate} />}
                {current === "contact" && <QuestContact onNavigate={navigate} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
