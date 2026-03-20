import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  PhoneCall,
  BookOpen,
  HandHeart,
  Users,
  Sparkles,
  Globe2,
} from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { JOIN } from "../shared/join";
import BibleGatewayVOTD from "../components/BibleGatewayVOTD";

export default function Home() {
  const { t, i18n } = useTranslation();

  const sessions = [
    {
      k: t("home.sessions.noon.title"),
      v: t("home.sessions.noon.time"),
      s: t("home.sessions.noon.meta"),
    },
    {
      k: t("home.sessions.night.title"),
      v: t("home.sessions.night.time"),
      s: t("home.sessions.night.meta"),
    },
    {
      k: t("home.sessions.sunday.title"),
      v: t("home.sessions.sunday.time"),
      s: t("home.sessions.sunday.meta"),
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-glow">
          <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-power-cyan/25 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-power-green/20 blur-3xl" />
          <div className="absolute top-10 right-10 h-28 w-28 rounded-full bg-power-blue/10 blur-2xl hidden md:block" />

          <div className="relative p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-2">
              <Badge color="cyan">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {t("home.badges.weekdaysAndSundays")}
                </span>
              </Badge>

              <Badge color="green">{t("home.badges.prayerAndBibleStudy")}</Badge>

              <Badge color="slate">
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4" />
                  {t("home.badges.internationalFamily")}
                </span>
              </Badge>
            </div>

            <h1 className="mt-6 text-3xl md:text-6xl font-black tracking-tight">
              {t("home.hero.title")}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-power-ink/75 dark:text-white/75 max-w-2xl leading-relaxed">
              {t("home.hero.introBefore")}{" "}
              <span className="font-semibold text-power-ink dark:text-white">
                {t("home.hero.powerMeaning")}
              </span>
              . {t("home.hero.introAfter")}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="/reunion-registration" variant="primary" className="w-full sm:w-auto">
                {t("home.hero.reunionRegistration")} <ArrowRight className="h-4 w-4" />
              </Button>

              <Button as="a" href="/volunteer" variant="secondary" className="w-full sm:w-auto">
                {t("home.hero.volunteer")}
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {sessions.map((x) => (
                <div key={x.k} className="glass rounded-3xl p-5 shadow-soft">
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-power-blue dark:text-power-cyan">
                    {x.k}
                  </div>
                  <div className="mt-2 text-xl font-black text-power-ink dark:text-white">
                    {x.v}
                  </div>
                  <div className="mt-1 text-sm text-power-ink/70 dark:text-white/70">
                    {x.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Vision */}
      <Reveal>
        <Section eyebrow={t("home.vision.eyebrow")} title="G.P.S">
          <p className="text-lg">{t("home.vision.intro")}</p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <FeatureCard icon={Users} title={t("home.vision.growing.title")}>
              {t("home.vision.growing.body")}
            </FeatureCard>

            <FeatureCard icon={BookOpen} title={t("home.vision.promoting.title")}>
              {t("home.vision.promoting.body")}
            </FeatureCard>

            <FeatureCard icon={HandHeart} title={t("home.vision.supporting.title")}>
              {t("home.vision.supporting.body")}
            </FeatureCard>
          </div>
        </Section>
      </Reveal>

      {/* Scripture + Get involved */}
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <Card title={t("home.verse.title")} className="relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-cyan/20 blur-3xl" />
            <div className="relative">
              <div className="mt-4">
                <BibleGatewayVOTD version={i18n.language === "fr" ? "LSG" : "NIV"} />
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <Card title={t("home.involved.title")}>
            <p className="text-lg">{t("home.involved.lead")}</p>

            <p className="mt-3">{t("home.involved.body")}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="/volunteer" variant="primary" className="w-full sm:w-auto">
                {t("home.involved.volunteer")} <ArrowRight className="h-4 w-4" />
              </Button>

              <Button as="a" href="/flyer" variant="secondary" className="w-full sm:w-auto">
                {t("home.involved.flyer")}
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* Bottom CTA */}
      <Reveal>
        <div className="rounded-4xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-gradient-to-r from-power-navy via-power-blue to-power-navy shadow-glow">
          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-black">
                {t("home.cta.title")}
              </div>

              <div className="mt-2 text-white/80 max-w-2xl">
                {t("home.cta.weekdays")}
                <div>{t("home.cta.sundays")}</div>

                <a
                  href={JOIN.zoomUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 underline decoration-white/30 hover:decoration-white hover:text-white transition"
                  title={t("home.cta.joinZoom")}
                >
                  <PhoneCall className="h-4 w-4" />
                  {t("home.cta.joinZoom")}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="a" href="/flyer" variant="primary" className="w-full sm:w-auto">
                {t("home.cta.getFlyer")} <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                as="a"
                href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UD5Z7E5WALD3C&ssrt=1767408433617"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {t("home.cta.donate")}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
