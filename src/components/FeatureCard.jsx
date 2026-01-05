import React from "react";
import Surface from "./ui/Surface";
import { HoverLift } from "./Motion";

export default function FeatureCard({ icon: Icon, title, children }) {
  return (
    <HoverLift>
      <Surface className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-power-cyan/25 to-power-green/20 border border-slate-200/40 dark:border-white/10 flex items-center justify-center animate-floaty">
            {Icon ? <Icon className="h-6 w-6 text-power-navy dark:text-white" /> : null}
          </div>
          <div className="min-w-0">
            <div className="text-lg font-extrabold text-power-ink dark:text-white">{title}</div>
            <div className="mt-2 text-power-ink/75 dark:text-white/75 leading-relaxed">{children}</div>
          </div>
        </div>
      </Surface>
    </HoverLift>
  );
}
