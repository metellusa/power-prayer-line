import React from "react";
import { CheckCircle, ArrowRight, HeartHandshake } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

export default function ThankYou() {
  return (
    <div className="space-y-10">
      <Reveal>
        <Section title="Thank You!">
          <p className="text-lg text-power-ink/75 dark:text-white/75 max-w-2xl">
            Your message has been received. We truly appreciate you taking the
            time to reach out and connect with the POWER Prayer Line family.
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
              We’re grateful for you
            </h2>

            <p className="mt-4 text-power-ink/70 dark:text-white/70 leading-relaxed">
              Whether this was a prayer request, a question, or a willingness to
              serve, please know that your submission matters to us.
              Someone from the ministry will follow up as soon as possible.
            </p>

            <div className="mt-6 flex justify-center">
              <Badge color="cyan">
                <span className="inline-flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4" />
                  You are part of the POWER family
                </span>
              </Badge>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button as="a" href="/" variant="primary">
                Back to Home <ArrowRight className="h-4 w-4" />
              </Button>

              <Button as="a" href="/topics-2026" variant="secondary">
                View 2026 Topics
              </Button>
            </div>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
