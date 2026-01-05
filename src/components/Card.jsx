import React from "react";
import Surface from "./ui/Surface";

export default function Card({ title, children, className = "" }) {
  return (
    <Surface className={["p-6", className].join(" ")}>
      {title ? <div className="text-lg font-extrabold mb-3 text-power-ink dark:text-white">{title}</div> : null}
      <div className="text-power-ink/80 dark:text-white/75 leading-relaxed">{children}</div>
    </Surface>
  );
}
