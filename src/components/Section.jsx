import React from "react";
import Surface from "./ui/Surface";

export default function Section({ eyebrow, title, children, right, className = "" }) {
  return (
    <Surface className={["p-6 md:p-8", className].join(" ")}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="min-w-0">
          {eyebrow ? (
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-power-blue dark:text-power-cyan">
              {eyebrow}
            </div>
          ) : null}
          {title ? (
            <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-power-ink dark:text-white">
              {title}
            </h2>
          ) : null}
          <div className="mt-5 text-power-ink/80 dark:text-white/75 leading-relaxed">{children}</div>
        </div>
        {right ? <div className="md:w-[22rem] shrink-0">{right}</div> : null}
      </div>
    </Surface>
  );
}
