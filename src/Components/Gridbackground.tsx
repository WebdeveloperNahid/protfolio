"use client";

type GridBackgroundProps = {
  /** Opacity of the grid lines in light mode. Keep this low (0.02–0.04) for
   *  text-heavy sections so it never fights with readability. */
  opacity?: number;
  /** Opacity of the grid lines in dark mode — usually a touch higher than
   *  light mode since dark backgrounds absorb light lines more. */
  darkOpacity?: number;
  /** Size of one grid cell in pixels. Vary this slightly between sections
   *  (e.g. 56 in Hero, 64 in About) so the repetition doesn't feel identical
   *  everywhere. */
  size?: number;
  /** Grid line color. Defaults to the brand teal used across the site. */
  color?: string;
  /** Extra classes, e.g. to constrain the area it covers. */
  className?: string;
};

/**
 * Faint square-grid texture used as a background layer.
 *
 * Usage: drop this as the FIRST child inside any `relative` section wrapper,
 * behind your actual content. It never blocks clicks (pointer-events: none)
 * and never needs its own stacking context work — just make sure the parent
 * section has `position: relative` and your content has `position: relative
 * z-10` (or similar) so it renders above this layer.
 */
export default function GridBackground({
  opacity = 0.03,
  darkOpacity,
  size = 56,
  color = "#2DD3A8",
  className = "",
}: GridBackgroundProps) {
  const resolvedDarkOpacity = darkOpacity ?? opacity + 0.02;

  const gridStyle = {
    backgroundImage:
      "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
    backgroundSize: `${size}px ${size}px`,
    color,
  };

  // Two stacked layers, one per color scheme, since inline `style` can't
  // read Tailwind's `dark:` class directly — this keeps opacity fully
  // dynamic via props while still respecting class-based dark mode
  // (the same `dark` class strategy the rest of the site uses).
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="absolute inset-0 dark:hidden" style={{ ...gridStyle, opacity }} />
      <div className="absolute inset-0 hidden dark:block" style={{ ...gridStyle, opacity: resolvedDarkOpacity }} />
    </div>
  );
}