"use client";

import { useRef, useState } from "react";

type CourseCtaCardProps = {
  ariaLabel: string;
};

export function CourseCtaCard({ ariaLabel }: CourseCtaCardProps) {
  const [showNotice, setShowNotice] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleClick = () => {
    setShowNotice(true);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => setShowNotice(false), 1800);
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleClick}
      className="tool-card group relative flex min-h-[180px] items-center justify-center rounded-[1.5rem] p-6 text-center"
    >
      <div className="space-y-3">
        <p className="theme-text-primary text-lg font-semibold tracking-wide">Start Learning</p>
        <span
          className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
            showNotice ? "bg-[#0f766e] text-white" : "bg-transparent text-transparent"
          }`}
        >
          Coming Soon
        </span>
      </div>
    </button>
  );
}
