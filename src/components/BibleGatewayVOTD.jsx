import React from "react";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const CACHE_KEY_PREFIX = "bg-votd:";

function cacheKey(version) {
  return `${CACHE_KEY_PREFIX}${version}`;
}

function readCache(version) {
  try {
    const raw = localStorage.getItem(cacheKey(version));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.ts || !parsed?.data) return null;
    if (Date.now() - parsed.ts > ONE_DAY_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(version, data) {
  try {
    localStorage.setItem(cacheKey(version), JSON.stringify({ ts: Date.now(), data }));
  } catch {
    // ignore
  }
}

// More permissive (still safe) so BG formatting doesn't get stripped to empty.
function sanitizeVotdHtml(html) {
  if (!html) return "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Allow common container tags BG may use
  const allowedTags = new Set([
    "A",
    "BR",
    "EM",
    "I",
    "STRONG",
    "B",
    "SUP",
    "SPAN",
    "P",
    "DIV",
    "BLOCKQUOTE",
    "SMALL",
  ]);

  const allowedAttrs = new Set(["href", "title", "target", "rel", "class"]);

  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT, null);
  const toUnwrap = [];

  while (walker.nextNode()) {
    const el = walker.currentNode;

    if (!allowedTags.has(el.tagName)) {
      toUnwrap.push(el);
      continue;
    }

    // Remove potentially styling-related attributes except class.
    [...el.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      if (!allowedAttrs.has(name)) el.removeAttribute(attr.name);
    });

    if (el.tagName === "A") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noreferrer noopener");
    }
  }

  // unwrap disallowed nodes (preserve text)
  for (const el of toUnwrap) {
    const parent = el.parentNode;
    if (!parent) continue;
    while (el.firstChild) parent.insertBefore(el.firstChild, el);
    parent.removeChild(el);
  }

  return doc.body.innerHTML.trim();
}

export default function BibleGatewayVOTD({ version = "NIV", className = "" }) {
  const [state, setState] = React.useState({
    status: "idle", // idle | loading | loaded | error
    reference: "",
    verseHtml: "",
    error: "",
  });

  React.useEffect(() => {
    const cached = readCache(version);
    if (cached?.verseHtml || cached?.reference) {
      setState({ status: "loaded", reference: cached.reference || "", verseHtml: cached.verseHtml || "", error: "" });
      return;
    }

    setState({ status: "loading", reference: "", verseHtml: "", error: "" });

    const cbName = `__bgVotdCb_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const scriptId = `bg-votd-${cbName}`;
    let cleaned = false;

    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;

      try {
        delete window[cbName];
      } catch {
        window[cbName] = undefined;
      }

      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };

    window[cbName] = (json) => {
      try {
        // 👇 Log once so you can see the payload shape
        // (Remove later when confirmed)
        // eslint-disable-next-line no-console
        console.log("[BibleGateway VOTD payload]", json);

        // BibleGateway sometimes uses different keys.
        const reference =
          json?.reference ||
          json?.votd?.reference ||
          json?.passage?.reference ||
          "";

        const rawHtml =
          json?.text ||
          json?.content ||
          json?.votd?.text ||
          json?.votd?.content ||
          "";

        const verseHtml = sanitizeVotdHtml(rawHtml);

        const data = { reference, verseHtml };
        writeCache(version, data);

        setState({ status: "loaded", reference, verseHtml, error: "" });
      } catch (e) {
        setState({ status: "error", reference: "", verseHtml: "", error: e?.message || "Unable to parse verse." });
      } finally {
        cleanup();
      }
    };

    const s = document.createElement("script");
    s.id = scriptId;
    s.async = true;
    s.src = `https://www.biblegateway.com/votd/get/?format=json&version=${encodeURIComponent(
      version
    )}&callback=${encodeURIComponent(cbName)}`;

    s.onerror = () => {
      setState({ status: "error", reference: "", verseHtml: "", error: "Failed to load verse script." });
      cleanup();
    };

    document.body.appendChild(s);

    const t = setTimeout(() => {
      setState({ status: "error", reference: "", verseHtml: "", error: "Timed out loading verse." });
      cleanup();
    }, 12000);

    return () => {
      clearTimeout(t);
      cleanup();
    };
  }, [version]);

  const wrapperCls = [
    "min-h-[120px]", // ensures you can SEE the area even if empty
    "text-power-ink dark:text-white",
    "text-base leading-relaxed font-sans",
    "[&_a]:text-power-blue dark:[&_a]:text-power-cyan",
    "[&_a]:underline [&_a]:decoration-power-blue/30 dark:[&_a]:decoration-power-cyan/30",
    "[&_a:hover]:decoration-power-blue dark:[&_a:hover]:decoration-power-cyan",
    "[&_sup]:text-xs [&_sup]:align-super",
    "[&_p]:mt-3 [&_p:first-child]:mt-0",
    "[&_blockquote]:mt-3 [&_blockquote]:border-l-2 [&_blockquote]:border-slate-200/70 dark:[&_blockquote]:border-white/10 [&_blockquote]:pl-3 [&_blockquote]:text-power-ink/80 dark:[&_blockquote]:text-white/80",
    className,
  ].join(" ");

  if (state.status === "loading" || state.status === "idle") {
    return (
      <div className={wrapperCls} aria-busy="true">
        <div className="animate-pulse space-y-3">
          <div className="h-4 w-1/3 rounded bg-slate-200/70 dark:bg-white/10" />
          <div className="h-4 w-full rounded bg-slate-200/70 dark:bg-white/10" />
          <div className="h-4 w-11/12 rounded bg-slate-200/70 dark:bg-white/10" />
        </div>
        <div className="mt-4 text-xs text-power-ink/55 dark:text-white/55">
          Powered by{" "}
          <a href="https://www.biblegateway.com/" target="_blank" rel="noreferrer noopener">
            BibleGateway.com
          </a>
        </div>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className={wrapperCls}>
        <div className="text-sm text-power-ink/70 dark:text-white/70">Couldn’t load Verse of the Day.</div>
        <div className="mt-1 text-xs text-power-ink/50 dark:text-white/50">{state.error}</div>
        <div className="mt-3 text-xs text-power-ink/55 dark:text-white/55">
          You can still view it on{" "}
          <a href="https://www.biblegateway.com/votd/" target="_blank" rel="noreferrer noopener">
            BibleGateway
          </a>
          .
        </div>
      </div>
    );
  }

  const hasContent = Boolean(state.verseHtml?.trim());

  return (
    <div className={wrapperCls}>
      {state.reference ? (
        <div className="text-sm font-semibold text-power-ink/70 dark:text-white/70">
          {state.reference} ({version})
        </div>
      ) : null}

      {hasContent ? (
        <div
          className="mt-3 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: state.verseHtml }}
        />
      ) : (
        <div className="mt-3 text-sm text-power-ink/65 dark:text-white/65">
          Loaded, but no verse text was returned. Check console: <code className="px-1 py-0.5 rounded bg-white/40 dark:bg-white/10">[BibleGateway VOTD payload]</code>
        </div>
      )}

      <div className="mt-4 text-xs text-power-ink/55 dark:text-white/55">
        Powered by{" "}
        <a href="https://www.biblegateway.com/" target="_blank" rel="noreferrer noopener">
          BibleGateway.com
        </a>
      </div>
    </div>
  );
}
