import React from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle, ArrowRight, HeartHandshake } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

export default function ThankYou() {
  const { t } = useTranslation();
  return (
    <div className="space-y-10">
      <Reveal>
        <Section title={t("thankYou.title")}>
          <p className="text-lg text-power-ink/75 dark:text-white/75 max-w-2xl">
            {t("thankYou.intro")}
          </p>
        </Section>
      </Reveal>

      <Reveal>
        <Card className="relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-green/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-power-cyan/20 blur-3xl" />

          <div className="relative text-center px-6 py-10">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-14 w-14 text-power-green" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-power-ink dark:text-white">
              {t("thankYou.heading")}
            </h2>

            <p className="mt-4 text-power-ink/70 dark:text-white/70 leading-relaxed">
              {t("thankYou.body")}
            </p>

            <div className="mt-6 flex justify-center">
              <Badge color="cyan">
                <span className="inline-flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4" />
                  {t("thankYou.badge")}
                </span>
              </Badge>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button as="a" href="/" variant="primary">
                {t("thankYou.backHome")} <ArrowRight className="h-4 w-4" />
              </Button>

              <Button as="a" href="/topics-2026" variant="secondary">
                {t("home.hero.viewTopics")}
              </Button>
            </div>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
