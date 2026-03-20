import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title={t("contact.title")}>
          <p className="text-lg">
            {t("contact.introBefore")}{" "}
            <a className="underline font-semibold" href="/volunteer">
              {t("contact.volunteerLink")}
            </a>{" "}
            {t("contact.introAfter")}
          </p>
        </Section>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <Card title={t("contact.formTitle")} className="relative overflow-hidden">
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

                <Field label={t("contact.fields.firstName")} required>
                  <input
                    name="q3_name[first]"
                    required
                    className={inputCls}
                    placeholder={t("contact.placeholders.firstName")}
                  />
                </Field>

                <Field label={t("contact.fields.lastName")} required>
                  <input
                    name="q3_name[last]"
                    required
                    className={inputCls}
                    placeholder={t("contact.placeholders.lastName")}
                  />
                </Field>

                <Field label={t("contact.fields.email")} required>
                  <input
                    name="q4_email"
                    type="email"
                    required
                    className={inputCls}
                    placeholder={t("contact.placeholders.email")}
                  />
                </Field>

                <Field label={t("contact.fields.phone")}>
                  <input
                    name="q5_phone[full]"
                    className={inputCls}
                    placeholder={t("contact.placeholders.phone")}
                  />
                </Field>

                <div className="md:col-span-2">
                  <Field label={t("contact.fields.subject")}>
                    <input
                      name="q6_subject"
                      className={inputCls}
                      placeholder={t("contact.placeholders.subject")}
                    />
                  </Field>
                </div>

                <div className="md:col-span-2">
                  <Field label={t("contact.fields.message")}>
                    <textarea
                      name="q8_typeA8"
                      rows="7"
                      className={inputCls}
                      placeholder={t("contact.placeholders.message")}
                    />
                  </Field>
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 items-center">
                  <Button type="submit" variant="primary">
                    {t("contact.send")}
                  </Button>
                  <div className="text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-power-blue dark:text-power-cyan" />
                    {t("contact.spamProtected")}
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-6">
            <Card title={t("contact.joinTitle")}>
              <div className="space-y-3 text-power-ink/80 dark:text-white/75">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("contact.join.number")}</div>
                    <div>{JOIN.phone}</div>

                    <div className="mt-2 font-bold">{t("contact.join.meetingRoom")}</div>
                    <div>{JOIN.meeting}</div>

                    <div className="mt-2 font-bold">{t("contact.join.code")}</div>
                    <div>{JOIN.code}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("contact.join.schedule")}</div>
                    <div>{t("contact.join.weekdaysNoon")}</div>
                    <div>{t("contact.join.weekdaysNight")}</div>
                    <div>{t("contact.join.sundays")}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Button as="a" href="/flyer" variant="primary" className="w-full sm:w-auto">
                  {t("contact.getFlyer")}
                </Button>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
