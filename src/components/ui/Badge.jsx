import React from "react";

export default function Badge({ children, color = "blue" }) {
  const map = {
    blue: "bg-power-blue/12 text-power-blue border-power-blue/25 dark:text-white dark:bg-white/10 dark:border-white/10",
    cyan: "bg-power-cyan/12 text-power-navy border-power-cyan/25 dark:text-white dark:bg-white/10 dark:border-white/10",
    green: "bg-power-green/12 text-power-green border-power-green/25 dark:text-white dark:bg-white/10 dark:border-white/10",
    slate: "bg-slate-100 text-slate-700 border-slate-200 dark:text-white dark:bg-white/10 dark:border-white/10",
  };
  return (
    <span className={["inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", map[color]].join(" ")}>
      {children}
    </span>
  );
}
