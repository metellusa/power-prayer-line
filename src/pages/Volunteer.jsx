import React from "react";
import { useTranslation } from "react-i18next";
import { PhoneCall, Clock, ShieldCheck, HandHelping } from "lucide-react";
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

const selectCls = inputCls + " appearance-none";

function startOfWeekMonday(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = x.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  x.setDate(x.getDate() + diff);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d, n) {
  const x = new Date(d.getTime());
  x.setDate(x.getDate() + n);
  return x;
}

function toYMD(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function isWeekendYMD(ymd) {
  if (!ymd) return false;
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  const day = dt.getDay();
  return day === 0 || day === 6;
}

function formatHumanDateYMD(ymd, locale) {
  if (!ymd) return "";
  const [y, m, d] = ymd.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(locale, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Volunteer() {
  const { t, i18n } = useTranslation();
  const [volunteerDate, setVolunteerDate] = React.useState("");
  const [dateError, setDateError] = React.useState("");

  const { minYmd, maxYmd } = React.useMemo(() => {
    const today = new Date();
    const mondayThisWeek = startOfWeekMonday(today);
    const minDate = addDays(mondayThisWeek, 7);
    const maxDate = addDays(minDate, 25);
    return { minYmd: toYMD(minDate), maxYmd: toYMD(maxDate) };
  }, []);

  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title={t("volunteer.title")}>
          <p className="text-lg">{t("volunteer.intro")}</p>
        </Section>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <Card title={t("volunteer.formTitle")} className="relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-cyan/15 blur-3xl" />
            <div className="relative">
              <form
                name="form_260061155541043"
                action="https://submit.jotform.com/submit/260061155541043"
                method="post"
                id="260061155541043"
                className="grid gap-4 md:grid-cols-2"
                onSubmit={(e) => {
                  if (isWeekendYMD(volunteerDate)) {
                    e.preventDefault();
                    setDateError(t("volunteer.date.weekdayError"));
                  }
                }}
              >
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <Field label={t("volunteer.fields.firstName")} required>
                  <input
                    name="q3_name[first]"
                    required
                    className={inputCls}
                    placeholder={t("volunteer.placeholders.firstName")}
                    autoComplete="given-name"
                  />
                </Field>

                <Field label={t("volunteer.fields.lastName")} required>
                  <input
                    name="q3_name[last]"
                    required
                    className={inputCls}
                    placeholder={t("volunteer.placeholders.lastName")}
                    autoComplete="family-name"
                  />
                </Field>

                <Field label={t("volunteer.fields.phone")} required>
                  <input
                    name="q4_phoneNumber[full]"
                    required
                    className={inputCls}
                    placeholder={t("volunteer.placeholders.phone")}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </Field>

                <Field label={t("volunteer.fields.email")} required>
                  <input
                    name="q5_email"
                    required
                    className={inputCls}
                    placeholder={t("volunteer.placeholders.email")}
                    autoComplete="email"
                  />
                </Field>

                <Field label={t("volunteer.fields.date")} required>
                  <input
                    type="date"
                    name="q6_date"
                    required
                    className={inputCls}
                    min={minYmd}
                    max={maxYmd}
                    value={volunteerDate}
                    onChange={(e) => {
                      const v = e.target.value;
                      setVolunteerDate(v);

                      if (!v) {
                        setDateError("");
                        return;
                      }

                      if (isWeekendYMD(v)) {
                        setDateError(t("volunteer.date.weekdayError"));
                      } else {
                        setDateError("");
                      }
                    }}
                  />

                  <div className="mt-2 text-xs text-power-ink/55 dark:text-white/55">
                    {t("volunteer.date.availableBefore")}{" "}
                    <span className="font-semibold">
                      {formatHumanDateYMD(minYmd, i18n.language)}
                    </span>{" "}
                    {t("volunteer.date.availableThrough")}{" "}
                    <span className="font-semibold">
                      {formatHumanDateYMD(maxYmd, i18n.language)}
                    </span>{" "}
                    {t("volunteer.date.availableAfter")}
                  </div>

                  {dateError ? (
                    <div className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold">
                      {dateError}
                    </div>
                  ) : null}
                </Field>

                <Field label={t("volunteer.fields.iWantTo")} required>
                  <div className="relative">
                    <select name="q7_iWant" required className={selectCls} defaultValue="">
                      <option value="" disabled>
                        {t("volunteer.placeholders.chooseOne")}
                      </option>
                      <option value="Lead">{t("volunteer.options.lead")}</option>
                      <option value="Speak">{t("volunteer.options.speak")}</option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-power-ink/50 dark:text-white/50">
                      ▾
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-power-ink/55 dark:text-white/55 inline-flex items-center gap-2">
                    <HandHelping className="h-4 w-4 text-power-blue dark:text-power-cyan" />
                    {t("volunteer.nextSteps")}
                  </div>
                </Field>

                <div className="md:col-span-2 flex flex-wrap gap-3 items-center">
                  <Button type="submit" variant="primary">
                    {t("volunteer.submit")}
                  </Button>
                  <div className="text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-power-blue dark:text-power-cyan" />
                    {t("volunteer.spamProtected")}
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-6">
            <Card title={t("volunteer.joinTitle")}>
              <div className="space-y-3 text-power-ink/80 dark:text-white/75">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("volunteer.join.number")}</div>
                    <div>{JOIN.phone}</div>

                    <div className="mt-2 font-bold">{t("volunteer.join.meetingRoom")}</div>
                    <div>{JOIN.meeting}</div>

                    <div className="mt-2 font-bold">{t("volunteer.join.code")}</div>
                    <div>{JOIN.code}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="h-5 w-5 text-power-blue dark:text-power-cyan mt-0.5" />
                  <div>
                    <div className="font-bold">{t("volunteer.join.schedule")}</div>
                    <div>{t("volunteer.join.weekdaysNoon")}</div>
                    <div>{t("volunteer.join.weekdaysNight")}</div>
                    <div>{t("volunteer.join.sundays")}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
