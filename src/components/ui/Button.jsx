import React from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-power-cyan/40 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-r from-power-blue via-power-cyan to-power-green text-white dark:text-white shadow-soft hover:brightness-95 active:brightness-90",
  secondary:
    "glass text-power-ink dark:text-white hover:bg-white/80 dark:hover:bg-white/10",
  green:
    "bg-power-green text-white shadow-soft hover:brightness-95 active:brightness-90",
  ghost:
    "text-power-ink/80 dark:text-white/80 hover:text-power-ink dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/10",
};

export default function Button({ as: As = "button", variant = "primary", className = "", ...props }) {
  return <As className={[base, variants[variant], className].join(" ")} {...props} />;
}
