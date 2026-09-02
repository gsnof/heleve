import React from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  isLight?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  isLight = false,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={clsx("flex flex-col max-w-3xl mb-12 sm:mb-16", alignment[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-400 bg-gold-400/10 border border-gold-400/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          {eyebrow}
        </div>
      )}
      <h2
        className={clsx(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]",
          isLight ? "text-slate-900" : "text-gold-champagne"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed font-light",
            isLight ? "text-slate-600" : "text-slate-300/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
