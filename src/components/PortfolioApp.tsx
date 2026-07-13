"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MapLanding } from "@/components/quests/MapLanding";
import { QuestAbout } from "@/components/quests/QuestAbout";
import { QuestSkills } from "@/components/quests/QuestSkills";
import { QuestProjects } from "@/components/quests/QuestProjects";
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
  const stageRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback((id: QuestId) => {
    setCurrent(id);
    window.history.replaceState(null, "", id === "map" ? "#" : `#${id}`);
  }, []);

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
      />

      <div className="md:pl-[18rem]">
        <div className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-[color:var(--card-border)] bg-[color:var(--sidebar)]/90 px-4 py-3 backdrop-blur md:hidden">
          <button
            type="button"
            className="btn-ghost !px-3"
            onClick={() => setMobileOpen(true)}
            aria-label="Open quest menu"
          >
            <Menu size={18} />
            Menu
          </button>
          <p className="font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-wide">
            TREADURE
          </p>
        </div>

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
