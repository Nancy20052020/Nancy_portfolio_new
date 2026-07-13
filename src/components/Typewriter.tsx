"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  showCaret?: boolean;
  onDone?: () => void;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotion() {
  return false;
}

export function Typewriter({
  text,
  className = "",
  speed = 38,
  delay = 200,
  as: Tag = "h1",
  showCaret = true,
  onDone,
}: TypewriterProps) {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    if (reduceMotion) {
      timeoutId = window.setTimeout(() => {
        setShown(text);
        setDone(true);
        onDone?.();
      }, 0);
      return () => window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      setShown("");
      setDone(false);
      let i = 0;
      intervalId = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, delay, reduceMotion, onDone]);

  return (
    <Tag
      className={`${className} ${showCaret && !done ? "typewriter-caret" : ""}`}
      aria-label={text}
    >
      {shown || "\u00A0"}
    </Tag>
  );
}
