import React from "react";
import { PhoneCall, Clock, ShieldCheck } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";
import { JOIN } from "../shared/join";

function Field({ label, required, children }) {
  return (
    <div>
      <label className="text-sm font-bold text-power-ink dark:text-white">
        {label} {required ? <span className="text-power-cyan">*</span> : null}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-power-cyan/35 focus:border-power-cyan/40 text-power-ink dark:text-white placeholder:text-power-ink/45 dark:placeholder:text-white/45";

export default function Contact() {
  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title="Contact Us">
          <p className="text-lg">
            We are opened to your comments and/or suggestions. Let us know how we can improve below. If 
            you would like to lead the prayer line or preach for us, <a href="/volunteer">click here</a> to use our
            Volunteer form.
          </p>
        </Section>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <Card title="Send a message / prayer request" className="relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-cyan/15 blur-3xl" />
            <div className="relative">
              <form
                name="form_260038428455054"
                action="https://submit.jotform.com/submit/260038428455054"
                method="post"
                id="260038428455054"
                className="grid gap-4 md:grid-cols-2"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <Field label="First name" required>
                  <input name="q3_name[first]" required className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Last name" required>
                  <input name="q3_name[last]" required className={inputCls} placeholder="Your name" />
                </Field>

                <Field label="Email" required>
                  <input name="q4_email" type="email" required className={inputCls} placeholder="you@example.com" />
                </Field>

                <Field label="Phone">
                  <input name="q5_phone[full]" className={inputCls} placeholder="(optional)" />
                </Field>

                <div className="md:col-span-2">
                  <Field label="Subject">
                    <input name="q6_subject" className={inputCls} placeholder="How can we help?" />
                  </Field>
                </div>

                <div className="md:col-span-2">
                  <Field label="Message">
                    <textarea name="q8_typeA8" rows="7" className={inputCls} placeholder="Write your message or prayer request..." />
                  </Field>
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 items-center">
                  <Button type="submit" variant="primary">
                    Send
                  </Button>
                  <div className="text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-power-blue dark:text-power-cyan" />
                    Spam-protected
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-6">
            <Card title="Join the Prayer Line">
              <div className="space-y-3 text-power-ink/80 dark:text-white/75">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">Number</div>
                    <div>{JOIN.phone}</div>
                    <div className="mt-2 font-bold">Meeting room</div>
                    <div>{JOIN.meeting}</div>
                    <div className="mt-2 font-bold">Code</div>
                    <div>{JOIN.code}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">Schedule (EST)</div>
                    <div>Weekdays: 12:00pm–1:30pm</div>
                    <div>Weekdays: 9:00pm–10:00pm</div>
                    <div>Sundays: 5:00pm–7:00pm</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Button as="a" href="/flyer" variant="primary" className="w-full sm:w-auto">
                  Get our flyer
                </Button>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
