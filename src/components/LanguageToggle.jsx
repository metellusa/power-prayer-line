import React from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language || "en");

  function changeLanguage(next) {
    i18n.changeLanguage(next);
    localStorage.setItem("ppl-lang", next);
    setLang(next);
  }

  return (
    <div className="glass rounded-2xl p-1 inline-flex items-center gap-1">
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={[
          "px-3 py-2 rounded-xl text-sm font-semibold transition inline-flex items-center gap-2",
          lang === "en"
            ? "bg-white/80 dark:bg-white/10 text-power-ink dark:text-white"
            : "text-power-ink/70 dark:text-white/70 hover:bg-white/60 dark:hover:bg-white/10",
        ].join(" ")}
        aria-label="Switch to English"
      >
        <Languages className="h-4 w-4" />
        EN
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("fr")}
        className={[
          "px-3 py-2 rounded-xl text-sm font-semibold transition",
          lang === "fr"
            ? "bg-white/80 dark:bg-white/10 text-power-ink dark:text-white"
            : "text-power-ink/70 dark:text-white/70 hover:bg-white/60 dark:hover:bg-white/10",
        ].join(" ")}
        aria-label="Passer au français"
      >
        FR
      </button>
    </div>
  );
}
