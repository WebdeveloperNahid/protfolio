"use client";

type GridBackgroundProps = {
  /** Light mode-এ দাগগুলো পরিষ্কার বোঝার জন্য opacity 0.18 */
  opacity?: number;
  /** Dark mode-এ দৃশ্যমানতা বজায় রাখতে opacity 0.14 */
  darkOpacity?: number;
  /**
   * টিক চিহ্ন দেওয়া ছোট স্কয়ার খোপের জন্য size কমিয়ে 32px করা হয়েছে।
   * আপনি চাইলে 32-40 এর মধ্যে রেখে অ্যাডজাস্ট করতে পারেন।
   */
  size?: number;
  /** Grid line color */
  color?: string;
  /** Extra utility classes */
  className?: string;
};

/**
 * Perfect Square Grid Background Component
 */
export default function GridBackground({
  opacity = 0.18,
  darkOpacity = 0.14,
  size = 32, // <--- ছোট ও পারফেক্ট খোপের জন্য 32px করা হয়েছে
  color = "#2DD3A8",
  className = "",
}: GridBackgroundProps) {
  const gridStyle = {
    backgroundImage:
      "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
    backgroundSize: `${size}px ${size}px`,
    color,
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      {/* Light Mode Layer */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{ ...gridStyle, opacity }}
      />
      {/* Dark Mode Layer */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ ...gridStyle, opacity: darkOpacity }}
      />
    </div>
  );
}