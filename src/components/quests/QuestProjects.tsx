"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { QuestChrome, nextQuest } from "@/components/QuestChrome";
import { Typewriter } from "@/components/Typewriter";
import { projects, type QuestId } from "@/data/portfolio";

type Props = {
  onNavigate: (id: QuestId) => void;
};

export function QuestProjects({ onNavigate }: Props) {
  const next = nextQuest("projects");
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <QuestChrome
      title="Projects"
      questNumber={3}
      onBackToMap={() => onNavigate("map")}
      onNext={next ? () => onNavigate(next) : undefined}
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <Typewriter
            as="h3"
            text="Ruins of creation"
            className="font-[family-name:var(--font-cinzel)] text-xl font-semibold sm:text-2xl"
          />
          <p className="mt-2 text-[color:var(--parchment-muted)]">
            Artifacts forged in code — from ML platforms to Earth Engine atlases.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn-ghost !px-3"
            onClick={() => scrollBy(-1)}
            aria-label="Previous projects"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="btn-ghost !px-3"
            onClick={() => scrollBy(1)}
            aria-label="Next projects"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i }}
            className="w-[min(85vw,19rem)] shrink-0 snap-start overflow-hidden rounded-xl border border-[color:var(--card-border)] bg-[color:var(--surface-elevated)]"
          >
            <div
              className="h-32"
              style={{
                background: `linear-gradient(135deg, ${project.accent}55, color-mix(in srgb, var(--parchment-deep) 70%, ${project.accent}))`,
              }}
              aria-hidden
            />
            <div className="p-4">
              <h4 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold">
                {project.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--parchment-muted)]">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md px-2 py-0.5 text-xs font-medium"
                    style={{
                      background: `${project.accent}22`,
                      color: "var(--parchment-ink)",
                      border: `1px solid ${project.accent}44`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-3 !py-1.5 text-xs"
                  >
                    GitHub <ExternalLink size={12} aria-hidden />
                  </a>
                ) : null}
                {project.links.earthEngine ? (
                  <a
                    href={project.links.earthEngine}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-3 !py-1.5 text-xs"
                  >
                    Earth Engine <ExternalLink size={12} aria-hidden />
                  </a>
                ) : null}
                {project.links.drive ? (
                  <a
                    href={project.links.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-3 !py-1.5 text-xs"
                  >
                    Drive <ExternalLink size={12} aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </QuestChrome>
  );
}
