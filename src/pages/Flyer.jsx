import React from "react";
import { useTranslation } from "react-i18next";
import { Download, Share2 } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";

export default function Flyer() {
  const { t } = useTranslation();
  const flyer = t("flyer.link");

  return (
    <div className="space-y-8">
      <Reveal>
        <Section eyebrow="POWER" title={t("flyer.title")}>
          <p className="text-lg text-power-ink/75 dark:text-white/75 max-w-2xl">
            {t("flyer.description")}
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Card className="relative overflow-hidden">
          <div className="relative flex flex-col items-center gap-6">
            {/* Flyer preview */}
            <div className="w-full max-w-3xl rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-soft">
              <img
                src={flyer}
                alt={t("flyer.alt")}
                className="w-full h-auto object-contain bg-white"
                draggable={false}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href={flyer}
                download={flyer}
                variant="primary"
              >
                <Download className="h-4 w-4" />
                {t("flyer.download")}
              </Button>

              <Button
                as="a"
                href={flyer}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Share2 className="h-4 w-4" />
                {t("flyer.open")}
              </Button>
            </div>

            <p className="text-sm text-power-ink/60 dark:text-white/60 text-center max-w-xl">
              {t("flyer.tip")}
            </p>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
