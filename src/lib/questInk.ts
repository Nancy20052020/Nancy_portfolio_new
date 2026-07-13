/** Theme-aware ink — flips with Night Chart via CSS variables in globals.css */
export const ink = {
  title: "var(--quest-ink-title)",
  body: "var(--quest-ink-body)",
  muted: "var(--quest-ink-muted)",
  accent: "var(--quest-ink-accent)",
} as const;

/**
 * Fixed dark ink for text painted on light postcard / parchment art assets.
 * Never flips in Night Chart — light cream art would wash out theme-aware ink.
 */
export const paperInk = {
  title: "#1f140c",
  body: "#3a2a1c",
  muted: "#5a4532",
  accent: "#5b2d91",
} as const;
