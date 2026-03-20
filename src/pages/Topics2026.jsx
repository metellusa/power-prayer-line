import React from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, RotateCcw, Info } from "lucide-react";
import { Reveal } from "../components/Motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/ui/Button";
import * as englishTopics from "../topics/english";
import * as frenchTopics from "../topics/french";

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

function dayKeyLocal(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function atStartOfDay(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
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

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfWeekSunday(d) {
  const x = atStartOfDay(d);
  x.setDate(x.getDate() - x.getDay());
  return x;
}

function clampToMonthStart(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function formatShort(d, locale) {
  return d.toLocaleDateString(locale, { month: "short", day: "2-digit" });
}

function formatLong(d, locale) {
  return d.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function buildMonthGrid(monthAnchor) {
  const first = new Date(monthAnchor.getFullYear(), monthAnchor.getMonth(), 1);
  const gridStart = startOfWeekSunday(first);
  const days = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));
  return Array.from({ length: 6 }, (_, w) => days.slice(w * 7, w * 7 + 7));
}

function splitTitleAndVerse(title) {
  const m = title.match(/^(.*)\s\(([^)]+)\)\s*$/);
  return m ? { main: m[1], ref: m[2] } : { main: title, ref: "" };
}

function parseTopic(s) {
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
  end.setHours(23, 59, 59, 999);

  return { raw: s, title, start, end };
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

function isWeekdayMonFri(d) {
  const k = d.getDay();
  return k >= 1 && k <= 5;
}

function getTopicForWeek(topics, weekStart, weekEnd) {
  return topics.find((t) => !(t.end < weekStart || t.start > weekEnd)) || null;
}

function buildTopicDayKeySet(topics) {
  const keys = new Set();
  for (const t of topics) {
    for (let d = atStartOfDay(t.start); d <= t.end; d = addDays(d, 1)) {
      keys.add(dayKeyLocal(d));
    }
  }
  return keys;
}

function buildWeekTopicMap(topics) {
  const map = new Map();
  for (const t of topics) {
    const wkStart = startOfWeekSunday(t.start);
    const parts = splitTitleAndVerse(t.title);
    map.set(dayKeyLocal(wkStart), parts);
  }
  return map;
}

export default function Topics2026() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "fr" ? "fr-FR" : "en-US";

  const source = i18n.language === "fr" ? frenchTopics : englishTopics;
  const { topicsRaw, monthlyThemes } = source;

  const topics = React.useMemo(
    () => topicsRaw.map(parseTopic).filter(Boolean).sort((a, b) => a.start - b.start),
    [topicsRaw]
  );

  const range = React.useMemo(() => {
    const min = topics[0]?.start ?? new Date(2026, 0, 4);
    const max =
      topics[topics.length - 1]?.end ?? new Date(2027, 0, 2, 23, 59, 59, 999);
    return { min, max };
  }, [topics]);

  const topicDayKeys = React.useMemo(() => buildTopicDayKeySet(topics), [topics]);
  const weekTopicMap = React.useMemo(() => buildWeekTopicMap(topics), [topics]);

  const defaultSelectedDate = React.useMemo(() => {
    const now = new Date();
    if (topics.length === 0) return new Date(2026, 0, 4);

    if (now < range.min || now > range.max) return new Date(topics[0].start);

    const found = findTopicForDate(topics, now);
    return found ? new Date(found.start) : new Date(topics[0].start);
  }, [topics, range.min, range.max]);

  const [selectedDate, setSelectedDate] = React.useState(defaultSelectedDate);

  React.useEffect(() => {
    setSelectedDate((prev) => clampDate(prev, range.min, range.max));
  }, [range.min, range.max]);

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

  const selectedTopicParts = React.useMemo(
    () => (selectedTopic ? splitTitleAndVerse(selectedTopic.title) : { main: "", ref: "" }),
    [selectedTopic]
  );

  function goToTodayWeek() {
    const found = findTopicForDate(topics, new Date());
    const next = found ? new Date(found.start) : new Date(topics[0]?.start ?? new Date());
    setSelectedDate(clampDate(next, range.min, range.max));
  }

  function navWeek(delta) {
    setSelectedDate((d) => clampDate(addWeeks(d, delta), range.min, range.max));
  }

  function setWeekFromDay(day) {
    setSelectedDate(clampDate(new Date(day), range.min, range.max));
  }

  function isInSelectedWeek(day) {
    return day >= selectedWeekStart && day <= selectedWeekEnd;
  }

  const dow = React.useMemo(() => {
    const base = new Date(2026, 0, 4); // Sunday
    return Array.from({ length: 7 }, (_, i) =>
      addDays(base, i).toLocaleDateString(locale, { weekday: "short" })
    );
  }, [locale]);

  return (
    <div className="space-y-6">
      <Reveal>
        <Section eyebrow="POWER" title={t("topics2026.title")}>
          <p className="text-lg">
            {t("topics2026.introBefore")}{" "}
            <a className="underline font-semibold" href="/volunteer">
              {t("topics2026.volunteerLink")}
            </a>{" "}
            {t("topics2026.introAfter")}
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
                    {formatShort(selectedWeekStart, locale)} — {formatShort(selectedWeekEnd, locale)}
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
                    {t("topics2026.prev")}
                  </Button>

                  <Button
                    variant="secondary"
                    className="px-3 py-2"
                    onClick={() => navWeek(1)}
                    type="button"
                  >
                    {t("topics2026.next")} <ChevronRight className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="secondary"
                    className="px-3 py-2"
                    onClick={goToTodayWeek}
                    type="button"
                    title={t("topics2026.jumpToCurrentWeek")}
                  >
                    <RotateCcw className="h-4 w-4" />
                    {t("topics2026.today")}
                  </Button>
                </div>
              </div>
            }
          >
            <div className="mt-2 glass rounded-4xl p-4">
              {/* Week topic banner */}
              <div className="mb-4 rounded-3xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
                {selectedTopic ? (
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-bold tracking-[0.2em] uppercase text-power-blue dark:text-power-cyan">
                      {t("topics2026.topicFor")} {formatShort(selectedWeekStart, locale)} —{" "}
                      {formatShort(selectedWeekEnd, locale)}
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
                    {t("topics2026.noTopic")}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="text-xl font-black text-power-ink dark:text-white">
                  {monthAnchor.toLocaleDateString(locale, { month: "long", year: "numeric" })}
                  {monthlyThemes[monthAnchor.getMonth()]
                    ? ` (${monthlyThemes[monthAnchor.getMonth()]})`
                    : ""}
                </div>

                <div className="text-xs text-power-ink/55 dark:text-white/55 inline-flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-power-cyan/70" />
                  {t("topics2026.selectedWeek")}
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
                      const key = dayKeyLocal(day);
                      const isCurrentMonth = day.getMonth() === monthAnchor.getMonth();
                      const inWeek = isInSelectedWeek(day);
                      const isToday = sameDay(day, new Date());
                      const inAnyTopic = topicDayKeys.has(key);

                      const weekStartKey = dayKeyLocal(startOfWeekSunday(day));
                      const weekTopicParts = weekTopicMap.get(weekStartKey);

                      const base =
                        "relative aspect-square rounded-2xl p-1.5 sm:p-2 text-left text-sm font-semibold transition select-none flex flex-col justify-between";

                      const cls = [
                        base,
                        "border",
                        inWeek
                          ? "border-power-cyan/40 bg-power-cyan/12 dark:bg-white/10"
                          : "border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10",
                        isCurrentMonth
                          ? "text-power-ink dark:text-white"
                          : "text-power-ink/40 dark:text-white/35",
                      ].join(" ");

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setWeekFromDay(day)}
                          className={cls}
                          title={formatLong(day, locale)}
                        >
                          {inWeek ? (
                            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-power-cyan/10 to-power-blue/5 dark:from-white/10 dark:to-white/5" />
                          ) : null}

                          <div className="relative z-10 flex h-full flex-col">
                            <div className="flex items-start justify-between">
                              <span className="text-sm leading-none">{day.getDate()}</span>
                              {isToday ? <span className="h-2 w-2 rounded-full bg-power-green" /> : null}
                            </div>

                            <div className="mt-2 flex-1">
                              {inWeek && isWeekdayMonFri(day) ? (
                                <div className="hidden sm:block text-left">
                                  {weekTopicParts ? (
                                    <>
                                      <div className="text-[11px] font-black leading-snug text-power-ink dark:text-white">
                                        {weekTopicParts.main}
                                      </div>
                                      {weekTopicParts.ref ? (
                                        <div className="mt-1 text-[10px] font-semibold text-power-ink/65 dark:text-white/65 leading-snug">
                                          {weekTopicParts.ref}
                                        </div>
                                      ) : null}
                                    </>
                                  ) : null}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          {inAnyTopic ? (
                            <span className="absolute left-2 right-2 bottom-2 h-1 rounded-full bg-gradient-to-r from-power-blue via-power-cyan to-power-green opacity-90" />
                          ) : null}
                        </button>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-4 text-sm text-power-ink/60 dark:text-white/60 inline-flex items-center gap-2">
                <Info className="h-4 w-4" />
                {t("topics2026.note")}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
