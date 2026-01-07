import React from "react";
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

const selectCls =
    inputCls + " appearance-none";

function startOfWeekMonday(d) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const day = x.getDay(); // 0 Sun..6 Sat
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
    // Local YYYY-MM-DD for <input type="date">
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}

function isWeekendYMD(ymd) {
    if (!ymd) return false;
    const [y, m, d] = ymd.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    const day = dt.getDay(); // 0 Sun..6 Sat
    return day === 0 || day === 6;
}

function formatHumanDateYMD(ymd) {
    if (!ymd) return "";
    const [y, m, d] = ymd.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function Volunteer() {
    const [volunteerDate, setVolunteerDate] = React.useState("");
    const [dateError, setDateError] = React.useState("");

    const { minYmd, maxYmd } = React.useMemo(() => {
        const today = new Date();
        const mondayThisWeek = startOfWeekMonday(today);

        // "following week" => next Monday after the current week
        const minDate = addDays(mondayThisWeek, 7);

        // 4-week window ending on the Friday of week 4:
        // start Monday + 28 days = Monday of week 5, so subtract 3 => Friday of week 4
        const maxDate = addDays(minDate, 28 - 3);

        return { minYmd: toYMD(minDate), maxYmd: toYMD(maxDate) };
    }, []);

    return (
        <div className="space-y-6">
            <Reveal>
                <Section eyebrow="POWER" title="Volunteer to Lead or Preach">
                    <p className="text-lg">
                        POWER members can volunteer to lead prayer or to preach on a particular day of the week.
                        Fill out the form below and someone will follow up with you.
                    </p>
                </Section>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
                <Reveal className="md:col-span-2">
                    <Card title="Volunteer form" className="relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-power-cyan/15 blur-3xl" />
                        <div className="relative">
                            {/* NOTE:
                  Replace the action + form id with your *Volunteer* Jotform.
                  Right now this is the Contact form id as a placeholder. */}
                            <form
                                name="form_260061155541043"
                                action="https://submit.jotform.com/submit/260061155541043"
                                method="post"
                                id="260038428455054"
                                className="grid gap-4 md:grid-cols-2"
                                onSubmit={(e) => {
                                    if (isWeekendYMD(volunteerDate)) {
                                        e.preventDefault();
                                        setDateError("Please pick a weekday (Mon–Fri).");
                                    }
                                }}
                            >
                                {/* Honeypot */}
                                <p className="hidden">
                                    <label>
                                        Don’t fill this out if you’re human: <input name="bot-field" />
                                    </label>
                                </p>

                                <Field label="First name" required>
                                    {/* Update the q#_* field names to match your Volunteer Jotform */}
                                    <input
                                        name="q3_name[first]"
                                        required
                                        className={inputCls}
                                        placeholder="First name"
                                        autoComplete="given-name"
                                    />
                                </Field>

                                <Field label="Last name" required>
                                    <input
                                        name="q3_name[last]"
                                        required
                                        className={inputCls}
                                        placeholder="Last name"
                                        autoComplete="family-name"
                                    />
                                </Field>

                                <Field label="Phone number" required>
                                    <input
                                        name="q4_phoneNumber[full]"
                                        required
                                        className={inputCls}
                                        placeholder="(###) ###-####"
                                        autoComplete="tel"
                                        inputMode="tel"
                                    />
                                </Field>

                                <Field label="Email" required>
                                    <input
                                        name="q5_email"
                                        required
                                        className={inputCls}
                                        placeholder="Email"
                                        autoComplete="email"
                                    />
                                </Field>

                                <Field label="Date to volunteer (Mon–Fri)" required>
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
                                                setDateError("Please pick a weekday (Mon–Fri).");
                                            } else {
                                                setDateError("");
                                            }
                                        }}
                                    />

                                    <div className="mt-2 text-xs text-power-ink/55 dark:text-white/55">
                                        Available dates: <span className="font-semibold">{formatHumanDateYMD(minYmd)}</span> through{" "}
                                        <span className="font-semibold">{formatHumanDateYMD(maxYmd)}</span> (weekdays only).
                                    </div>

                                    {dateError ? (
                                        <div className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold">
                                            {dateError}
                                        </div>
                                    ) : null}
                                </Field>


                                <Field label="I want to" required>
                                    <div className="relative">
                                        <select name="q7_iWant" required className={selectCls} defaultValue="">
                                            <option value="" disabled>
                                                Choose one…
                                            </option>
                                            <option value="Lead">Lead the service</option>
                                            <option value="Preach">Preach on the line</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-power-ink/50 dark:text-white/50">
                                            ▾
                                        </span>
                                    </div>
                                    <div className="mt-2 text-xs text-power-ink/55 dark:text-white/55 inline-flex items-center gap-2">
                                        <HandHelping className="h-4 w-4 text-power-blue dark:text-power-cyan" />
                                        We’ll confirm the schedule and share next steps.
                                    </div>
                                </Field>

                                <div className="md:col-span-2 flex flex-wrap gap-3 items-center">
                                    <Button type="submit" variant="primary">
                                        Submit
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
                        </Card>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
