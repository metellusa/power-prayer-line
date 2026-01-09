import React from "react";
import { ArrowRight, PhoneCall, BookOpen, HandHeart, Users, Sparkles, Globe2 } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { JOIN } from "../shared/join";
import BibleGatewayVOTD from "../components/BibleGatewayVOTD";


export default function Home() {
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
              <Badge color="cyan"><span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Weekdays and Sundays</span></Badge>
              <Badge color="green">Prayer and Bible Study</Badge>
              <Badge color="slate"><span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4" /> International family</span></Badge>
            </div>

            <h1 className="mt-6 text-3xl md:text-6xl font-black tracking-tight">
              Plug into the POWER of Prayer
            </h1>

            <p className="mt-5 text-lg md:text-xl text-power-ink/75 dark:text-white/75 max-w-2xl leading-relaxed">
              POWER stands for{" "}
              <span className="font-semibold text-power-ink dark:text-white">
                Promoters Of the Word Empowering Reality
              </span>
              . We are an international group of Christians who seek continuous spiritual growth through love, daily prayer and Bible study.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="/topics-2026" variant="primary" className="w-full sm:w-auto">
                View 2026 Topics <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href="/volunteer" variant="secondary" className="w-full sm:w-auto">
                Volunteer to lead or preach on the line
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Noon Session", v: "12:00pm–1:30pm", s: "EST • Weekdays" },
                { k: "Night Session", v: "9:00pm–10:00pm", s: "EST • Weekdays" },
                { k: "Sunday Session", v: "5:00pm–7:00pm", s: "EST • Weekends" },
              ].map((x) => (
                <div key={x.k} className="glass rounded-3xl p-5 shadow-soft">
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-power-blue dark:text-power-cyan">
                    {x.k}
                  </div>
                  <div className="mt-2 text-xl font-black text-power-ink dark:text-white">{x.v}</div>
                  <div className="mt-1 text-sm text-power-ink/70 dark:text-white/70">{x.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Vision */}
      <Reveal>
        <Section eyebrow="Power's Vision" title="G.P.S">
          <p className="text-lg">We see a family of believers who are:</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <FeatureCard icon={Users} title="GROWING">
              In Christ through love, daily prayer, and Bible study.
            </FeatureCard>
            <FeatureCard icon={BookOpen} title="PROMOTING">
              The word of God that has the ability to transform lives.
            </FeatureCard>
            <FeatureCard icon={HandHeart} title="SUPPORTING">
              One another spiritually, emotionally, and even financially.
            </FeatureCard>
          </div>
        </Section>
      </Reveal>

      {/* Scripture + Get involved */}
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <Card title="Verse of the Day" className="relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-cyan/20 blur-3xl" />
            <div className="relative">
              <div className="mt-4">
                <BibleGatewayVOTD version="NIV" />
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <Card title="Get Involved">
            <p className="text-lg">
              If you are genuinely seeking spiritual growth, then you are in great company!
            </p>
            <p className="mt-3">
              Our members share this goal, and it is what keeps us going. We seek to glorify God by ardently studying His Word, striving daily to follow in the footsteps of Jesus Christ, and sharing His message within the communities we serve.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="/volunteer" variant="primary" className="w-full sm:w-auto">
                Volunteer <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href="/flyer" variant="secondary" className="w-full sm:w-auto">
                Get our flyer
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
              <div className="text-2xl md:text-3xl font-black">Join us this week.</div>
              <div className="mt-2 text-white/80 max-w-2xl">
                Weekdays: noon to 1:30pm and 9:00pm to 10:00pm (EST).
                <div>Sundays: 5:00pm to 7:00pm (EST)</div>
                <a
                  href={JOIN.zoomUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 underline decoration-white/30 hover:decoration-white hover:text-white transition"
                  title="Join on Zoom"
                ><PhoneCall className="h-4 w-4" />
                  Join on Zoom
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="a" href="/flyer" variant="primary" className="w-full sm:w-auto">
                Get our flyer <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UD5Z7E5WALD3C&ssrt=1767408433617"
                target="_blank" rel="noreferrer" variant="secondary" className="w-full sm:w-auto">
                Donate to the Ministry
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
