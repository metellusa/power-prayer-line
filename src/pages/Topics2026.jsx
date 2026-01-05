import React from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Info } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";

// Source list (keep editing here)
const topicsRaw = [
  // JANUARY — Foundations & Renewal
  "Jan 4 to Jan 10 - A New Beginning in God (Isaiah 43:18–19)",
  "Jan 11 to Jan 17 - Seeking God First (Matthew 6:33)",
  "Jan 18 to Jan 24 - Faith That Moves Mountains (Matthew 17:20)",
  "Jan 25 to Jan 31 - Learning to Hear God’s Voice (John 10:27)",

  // FEBRUARY — Trust, Identity, Love
  "Feb 1 to Feb 7 - Trusting God in Uncertain Times (Proverbs 3:5–6)",
  "Feb 8 to Feb 14 - Loving God and Loving Others (Matthew 22:37–39)",
  "Feb 15 to Feb 21 - Rooted and Established in Christ (Colossians 2:6–7)",
  "Feb 22 to Feb 28 - The Power of Forgiveness (Matthew 18:21–22)",

  // MARCH — Repentance, Growth, Preparation (Lent begins Feb 18, 2026)
  "Mar 1 to Mar 7 - Returning to God with the Heart (Joel 2:12–13)",
  "Mar 8 to Mar 14 - Humility Before God (James 4:6–10)",
  "Mar 15 to Mar 21 - A Clean Heart and Right Spirit (Psalm 51:10)",
  "Mar 22 to Mar 28 - Dying to Self, Living for Christ (Luke 9:23)",
  "Mar 29 to Apr 4 - Walking with Jesus to the Cross (Luke 23:26)",

  // APRIL — Resurrection & New Life (Easter April 5, 2026)
  "Apr 5 to Apr 11 - The Power of the Resurrection (1 Corinthians 15:20–22)",
  "Apr 12 to Apr 18 - New Life in Christ (2 Corinthians 5:17)",
  "Apr 19 to Apr 25 - Living as Resurrection People (Romans 6:4)",

  // MAY — Obedience, Prayer, Purpose
  "Apr 26 to May 2 - Abiding in Christ Daily (John 15:4–5)",
  "May 3 to May 9 - A Life of Obedience (John 14:15)",
  "May 10 to May 16 - God’s Calling on Our Lives (Jeremiah 29:11)",
  "May 17 to May 23 - The Power of Persistent Prayer (Luke 18:1)",
  "May 24 to May 30 - Waiting on the Lord (Isaiah 40:31)",

  // JUNE — Holy Spirit & Community (Pentecost May 24, 2026)
  "May 31 to Jun 6 - Life in the Spirit (Romans 8:1–11)",
  "Jun 7 to Jun 13 - Bearing the Fruit of the Spirit (Galatians 5:22–23)",
  "Jun 14 to Jun 20 - Being Led by the Spirit (Galatians 5:16)",
  "Jun 21 to Jun 27 - Unity in the Body of Christ (Ephesians 4:3–6)",

  // JULY — Character, Endurance, Spiritual Maturity
  "Jun 28 to Jul 4 - Freedom in Christ (Galatians 5:1)",
  "Jul 5 to Jul 11 - Growing Through Trials (James 1:2–4)",
  "Jul 12 to Jul 18 - Strength in Weakness (2 Corinthians 12:9)",
  "Jul 19 to Jul 25 - Developing Godly Character (Romans 5:3–5)",

  // AUGUST — Wisdom, Discernment, Daily Faith
  "Jul 26 to Aug 1 - Walking in Godly Wisdom (James 1:5)",
  "Aug 2 to Aug 8 - Discernment in a Confusing World (Romans 12:2)",
  "Aug 9 to Aug 15 - Faithfulness in the Small Things (Luke 16:10)",
  "Aug 16 to Aug 22 - Trusting God with Our Future (Psalm 37:5)",
  "Aug 23 to Aug 29 - Living with Eternal Perspective (Colossians 3:1–2)",

  // SEPTEMBER — Relationships & Reconciliation
  "Aug 30 to Sep 5 - Loving One Another Deeply (John 13:34–35)",
  "Sep 6 to Sep 12 - Peacemakers in a Divided World (Matthew 5:9)",
  "Sep 13 to Sep 19 - Healing Broken Relationships (Romans 12:18)",
  "Sep 20 to Sep 26 - Bearing One Another’s Burdens (Galatians 6:2)",

  // OCTOBER — Spiritual Warfare & Perseverance
  "Sep 27 to Oct 3 - Standing Firm in Faith (Ephesians 6:13)",
  "Oct 4 to Oct 10 - Overcoming Fear with Faith (2 Timothy 1:7)",
  "Oct 11 to Oct 17 - Victory Through Christ (Romans 8:37)",
  "Oct 18 to Oct 24 - Persevering to the End (Hebrews 12:1–2)",
  "Oct 25 to Oct 31 - Living as Light in Darkness (Matthew 5:14–16)",

  // NOVEMBER — Gratitude & Stewardship (Thanksgiving Nov 26, 2026)
  "Nov 1 to Nov 7 - A Heart of Gratitude (1 Thessalonians 5:18)",
  "Nov 8 to Nov 14 - Contentment in Christ (Philippians 4:11–13)",
  "Nov 15 to Nov 21 - Thankful in All Circumstances (Psalm 107:1)",
  "Nov 22 to Nov 28 - Remembering God’s Faithfulness (Lamentations 3:22–23)",

  // DECEMBER — Hope, Advent, Incarnation
  "Nov 29 to Dec 5 - Hope That Does Not Disappoint (Romans 5:5)",
  "Dec 6 to Dec 12 - Preparing Our Hearts for Christ (Luke 1:38)",
  "Dec 13 to Dec 19 - The Gift of God with Us (Matthew 1:23)",
  "Dec 20 to Dec 26 - The Birth of Our Savior (Luke 2:10–11)",
  "Dec 27 to Jan 2 - Finishing the Year with Faith (Psalm 65:11)",
];

const monthMap = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseTopic(s) {
  // Accept 1- or 2-digit days, e.g. "Jan 4" or "Jan 04"
  const m = s.match(
    /^([A-Za-z]{3})\s(\d{1,2})\s+to\s+([A-Za-z]{3})\s(\d{1,2})\s+-\s+(.*)$/
  );
  if (!m) return null;

  const startMon = m[1];
  const startDay = Number(m[2]);
  const endMon = m[3];
  const endDay = Number(m[4]);
  const title = m[5];

  const startYear = 2026;
  const endYear = monthMap[endMon] < monthMap[startMon] ? 2027 : 2026;

  const start = new Date(startYear, monthMap[startMon], startDay);
  const end = new Date(endYear, monthMap[endMon], endDay);

  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999); // include the whole end day

  return { raw: s, title, start, end };
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Topics are Sun -> Sat, so weeks must start Sunday.
function startOfWeekSunday(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = x.getDay(); // 0 Sun..6 Sat
  x.setDate(x.getDate() - day);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d, n) {
  const x = new Date(d.getTime());
  x.setDate(x.getDate() + n);
  return x;
}

function addWeeks(d, n) {
  return addDays(d, n * 7);
}

function clampToMonthStart(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function formatShort(d) {
  return d.toLocaleDateString(undefined, { month: "short", day: "2-digit" });
}

function formatLong(d) {
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function buildMonthGrid(monthAnchor) {
  const first = new Date(monthAnchor.getFullYear(), monthAnchor.getMonth(), 1);
  const gridStart = startOfWeekSunday(first);
  const days = [];
  for (let i = 0; i < 42; i++) days.push(addDays(gridStart, i)); // 6 weeks
  const weeks = [];
  for (let w = 0; w < 6; w++) weeks.push(days.slice(w * 7, w * 7 + 7));
  return weeks;
}

function findTopicForDate(topics, date) {
  const t = topics.find((x) => date >= x.start && date <= x.end);
  if (t) return t;
  const upcoming = topics.find((x) => x.start >= date);
  return upcoming || topics[0] || null;
}

function clampDate(d, min, max) {
  const t = d.getTime();
  if (t < min.getTime()) return new Date(min);
  if (t > max.getTime()) return new Date(max);
  return d;
}

function dayKeyLocal(d) {
  // Stable local key; avoids UTC shifting from toISOString()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function getTopicForWeek(topics, weekStart, weekEnd) {
  // For this schedule, there should be exactly 1 per week.
  return topics.find((t) => !(t.end < weekStart || t.start > weekEnd)) || null;
}

function splitTitleAndVerse(title) {
  // "A New Beginning in God (Isaiah 43:18–19)"
  const m = title.match(/^(.*)\s\(([^)]+)\)\s*$/);
  return m ? { main: m[1], ref: m[2] } : { main: title, ref: "" };
}

export default function Topics2026() {
  const topics = React.useMemo(
    () =>
      topicsRaw
        .map(parseTopic)
        .filter(Boolean)
        .sort((a, b) => a.start - b.start),
    []
  );

  const range = React.useMemo(() => {
    const min = topics[0]?.start ?? new Date(2026, 0, 4);
    const max =
      topics[topics.length - 1]?.end ?? new Date(2027, 0, 2, 23, 59, 59, 999);
    return { min, max };
  }, [topics]);

  const defaultSelectedDate = React.useMemo(() => {
    const now = new Date();

    if (topics.length === 0) return new Date(2026, 0, 4);

    // If we're not inside the schedule range, default to first week of 2026 topics.
    if (now < range.min || now > range.max) return new Date(topics[0].start);

    const t = findTopicForDate(topics, now);
    return t ? new Date(t.start) : new Date(topics[0].start);
  }, [topics, range.min, range.max]);

  const [selectedDate, setSelectedDate] = React.useState(defaultSelectedDate);

  const selectedWeekStart = React.useMemo(
    () => startOfWeekSunday(selectedDate),
    [selectedDate]
  );
  const selectedWeekEnd = React.useMemo(
    () => addDays(selectedWeekStart, 6),
    [selectedWeekStart]
  );

  const monthAnchor = React.useMemo(
    () => clampToMonthStart(selectedDate),
    [selectedDate]
  );
  const weeks = React.useMemo(() => buildMonthGrid(monthAnchor), [monthAnchor]);

  const selectedTopic = React.useMemo(
    () => getTopicForWeek(topics, selectedWeekStart, selectedWeekEnd),
    [topics, selectedWeekStart, selectedWeekEnd]
  );

  const selectedTopicParts = React.useMemo(() => {
    return selectedTopic ? splitTitleAndVerse(selectedTopic.title) : { main: "", ref: "" };
  }, [selectedTopic]);

  function goToTodayWeek() {
    const t = findTopicForDate(topics, new Date());
    const next = t ? new Date(t.start) : new Date(topics[0]?.start ?? new Date());
    setSelectedDate(clampDate(next, range.min, range.max));
  }

  function navWeek(delta) {
    setSelectedDate((d) => {
      const next = addWeeks(d, delta);
      return clampDate(next, range.min, range.max);
    });
  }

  function setWeekFromDay(day) {
    setSelectedDate(clampDate(new Date(day), range.min, range.max));
  }

  function isInSelectedWeek(day) {
    return day >= selectedWeekStart && day <= selectedWeekEnd;
  }

  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title="2026 Topics">
          <p className="text-lg">
            These topics are preselected for the entire year (subject to change).
            Tap any date to jump to that week.
          </p>
        </Section>
      </Reveal>

      <div className="grid gap-6">
        <Reveal>
          <Card
            title={
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xl font-black text-power-ink dark:text-white">
                    {formatShort(selectedWeekStart)} — {formatShort(selectedWeekEnd)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    className="px-3 py-2"
                    onClick={() => navWeek(-1)}
                    type="button"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </Button>
                  <Button
                    variant="secondary"
                    className="px-3 py-2"
                    onClick={() => navWeek(1)}
                    type="button"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    className="px-3 py-2"
                    onClick={goToTodayWeek}
                    type="button"
                    title="Jump to current week"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Today
                  </Button>
                </div>
              </div>
            }
          >
            <div className="mt-2 glass rounded-4xl p-4">
              {/* Week topic banner (embedded in the calendar card) */}
              <div className="mb-4 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
                {selectedTopic ? (
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-bold tracking-[0.2em] uppercase text-power-blue dark:text-power-cyan">
                      Topic for {formatShort(selectedWeekStart)} — {formatShort(selectedWeekEnd)}
                    </div>

                    <div className="text-lg font-black text-power-ink dark:text-white leading-snug">
                      {selectedTopicParts.main}
                    </div>

                    {selectedTopicParts.ref ? (
                      <div className="text-sm text-power-ink/70 dark:text-white/70">
                        {selectedTopicParts.ref}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="text-sm text-power-ink/70 dark:text-white/70">
                    No topic found for this week.
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="text-sm font-semibold text-power-ink/70 dark:text-white/70">
                  {monthAnchor.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
                </div>
                <div className="text-xs text-power-ink/55 dark:text-white/55 inline-flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-power-cyan/70" />
                  selected week
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {dow.map((d) => (
                  <div
                    key={d}
                    className="text-xs font-bold tracking-[0.2em] uppercase text-power-ink/55 dark:text-white/55 text-center"
                  >
                    {d}
                  </div>
                ))}

                {weeks.map((week, wi) => (
                  <React.Fragment key={wi}>
                    {week.map((day) => {
                      const isCurrentMonth = day.getMonth() === monthAnchor.getMonth();
                      const inWeek = isInSelectedWeek(day);
                      const isToday = sameDay(day, new Date());
                      const inAnyTopic = topics.some((t) => day >= t.start && day <= t.end);

                      const base =
                        "relative rounded-2xl px-2 py-3 text-center text-sm font-semibold transition select-none";
                      const cls = [
                        base,
                        "border",
                        inWeek
                          ? "border-power-cyan/40 bg-power-cyan/12 dark:bg-white/10"
                          : "border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10",
                        isCurrentMonth ? "text-power-ink dark:text-white" : "text-power-ink/40 dark:text-white/35",
                      ].join(" ");

                      return (
                        <button
                          key={dayKeyLocal(day)}
                          type="button"
                          onClick={() => setWeekFromDay(day)}
                          className={cls}
                          title={formatLong(day)}
                        >
                          <span className="relative z-10">{day.getDate()}</span>

                          {inAnyTopic ? (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-8 rounded-full bg-gradient-to-r from-power-blue via-power-cyan to-power-green opacity-90" />
                          ) : null}

                          {isToday ? (
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-power-green" />
                          ) : null}
                        </button>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-4 text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                <Info className="h-4 w-4" />
                Tip: the colored bar under a date means it falls within a scheduled topic range.
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
