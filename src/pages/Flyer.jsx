import React from "react";
import { Download, Share2 } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";

import flyer from "../assets/POWER_Prayer_Line_Flyer.jpg";

export default function Flyer() {
  return (
    <div className="space-y-8">
      <Reveal>
        <Section eyebrow="POWER" title="Share the Prayer Line">
          <p className="text-lg text-power-ink/75 dark:text-white/75 max-w-2xl">
            Help us spread the word. You can view and download the POWER Prayer
            Line flyer below and share it with family, friends, or your church
            community.
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
                alt="POWER Prayer Line Flyer"
                className="w-full h-auto object-contain bg-white"
                draggable={false}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href={flyer}
                download="POWER_Prayer_Line_Flyer.jpg"
                variant="primary"
              >
                <Download className="h-4 w-4" />
                Download Flyer
              </Button>

              <Button
                as="a"
                href={flyer}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                <Share2 className="h-4 w-4" />
                Open Full Size
              </Button>
            </div>

            <p className="text-sm text-power-ink/60 dark:text-white/60 text-center max-w-xl">
              Tip: On mobile, long-press the image to save it directly to your
              phone and share it via text or social media.
            </p>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
