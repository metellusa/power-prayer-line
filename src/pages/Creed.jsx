import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import * as englishCreed from "../creed/english";
import * as frenchCreed from "../creed/french";

function Item({ h, p, expandLabel }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="glass rounded-4xl p-6">
      <button
        className="w-full flex items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <div className="text-xl font-black text-power-ink dark:text-white">{h}</div>
        <ChevronDown
          className={[
            "h-5 w-5 text-power-ink/70 dark:text-white/70 transition-transform",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open ? (
        <div className="mt-4 space-y-3 text-power-ink/80 dark:text-white/75 leading-relaxed">
          {p.map((x, idx) => (
            <p key={idx}>{x}</p>
          ))}
        </div>
      ) : (
        <div className="mt-3 text-sm text-power-ink/60 dark:text-white/60">
          {expandLabel}
        </div>
      )}
    </div>
  );
}

export default function Creed() {
  const { t, i18n } = useTranslation();

  const source = i18n.language === "fr" ? frenchCreed : englishCreed;
  const { creed } = source;

  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title={t("creed.title")}>
          <p className="text-lg">
            {t("creed.introBefore")}{" "}
            <a className="underline font-semibold" href="/flyer">
              {t("creed.flyerLink")}
            </a>{" "}
            {t("creed.introAfter")}
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <div className="grid gap-4">
          {creed.map((s) => (
            <Item
              key={s.h}
              {...s}
              expandLabel={t("creed.tapToExpand")}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
