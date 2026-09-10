"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Accessibility,
  Plus,
  Minus,
  Contrast,
  AlignJustify,
  Underline,
  ZapOff,
  Volume2,
  Square,
  RotateCcw,
  X,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ---- settings model ------------------------------------------------------ */

type Settings = {
  text: 1 | 2 | 3 | 4;
  contrast: boolean;
  spacing: boolean;
  links: boolean;
  motion: boolean;
};

const DEFAULTS: Settings = {
  text: 1,
  contrast: false,
  spacing: false,
  links: false,
  motion: false,
};

const STORAGE_KEY = "weenable-a11y";
const TEXT_LABELS = ["100%", "112%", "125%", "140%"];

function loadSettings(): Settings {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

/** Reflect settings onto <html> data-attributes (what globals.css reads). */
function applySettings(s: Settings) {
  const root = document.documentElement;
  const set = (name: string, on: boolean, value = "") =>
    on ? root.setAttribute(name, value) : root.removeAttribute(name);

  set("data-a11y-text", s.text > 1, String(s.text));
  set("data-a11y-contrast", s.contrast, "high");
  set("data-a11y-spacing", s.spacing, "loose");
  set("data-a11y-links", s.links, "on");
  set("data-a11y-motion", s.motion, "reduce");
}

/* ---- component ----------------------------------------------------------- */

export function AccessibilityWidget() {
  const [open, setOpen] = React.useState(false);
  const [settings, setSettings] = React.useState<Settings>(loadSettings);
  const [speaking, setSpeaking] = React.useState(false);

  // Sync settings → DOM + storage whenever they change.
  React.useEffect(() => {
    applySettings(settings);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* storage may be unavailable; the in-memory settings still apply */
    }
  }, [settings]);

  // Stop any speech when the widget unmounts.
  React.useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  const update = (patch: Partial<Settings>) =>
    setSettings((s) => ({ ...s, ...patch }));

  const changeText = (dir: 1 | -1) =>
    setSettings((s) => {
      const next = Math.min(4, Math.max(1, s.text + dir)) as Settings["text"];
      return { ...s, text: next };
    });

  const reset = () => {
    setSettings(DEFAULTS);
    stopReading();
  };

  /* ---- read aloud (text-to-speech) ---- */
  function readAloud() {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const main = document.getElementById("main");
    const raw = main?.innerText?.replace(/\s+/g, " ").trim();
    if (!raw) return;

    // Chunk into sentence-sized utterances (avoids the long-text cutoff bug).
    const chunks = raw.match(/[^.!?]+[.!?]*/g) ?? [raw];
    const utterances = chunks
      .map((c) => c.trim())
      .filter(Boolean)
      .map((c) => {
        const u = new SpeechSynthesisUtterance(c);
        u.lang = "en";
        u.rate = 1;
        return u;
      });
    if (utterances.length === 0) return;
    utterances[utterances.length - 1].onend = () => setSpeaking(false);
    utterances[utterances.length - 1].onerror = () => setSpeaking(false);
    utterances.forEach((u) => synth.speak(u));
    setSpeaking(true);
  }

  function stopReading() {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Accessibility settings"
          className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-ink text-paper shadow-lg ring-1 ring-black/5 transition-colors hover:bg-coral hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Accessibility aria-hidden="true" className="size-7" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Non-modal so people can watch changes apply live behind the panel. */}
        <Dialog.Content
          onInteractOutside={() => setOpen(false)}
          className="fixed bottom-5 right-5 z-50 flex max-h-[85vh] w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-card border border-border bg-paper text-ink shadow-2xl focus-visible:outline-2"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Dialog.Title className="flex items-center gap-2 text-base font-extrabold">
              <Accessibility aria-hidden="true" className="size-5 text-coral-text" />
              Accessibility
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close accessibility settings"
                className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-ink focus-visible:outline-2"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto p-5">
            {/* Text size */}
            <div>
              <p className="mb-2 text-sm font-semibold">Text size</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changeText(-1)}
                  disabled={settings.text === 1}
                  aria-label="Decrease text size"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-ink transition-colors hover:border-ink disabled:opacity-40 focus-visible:outline-2"
                >
                  <Minus aria-hidden="true" className="size-5" />
                </button>
                <div
                  aria-live="polite"
                  className="flex-1 rounded-xl bg-surface py-2.5 text-center text-sm font-semibold"
                >
                  {TEXT_LABELS[settings.text - 1]}
                </div>
                <button
                  type="button"
                  onClick={() => changeText(1)}
                  disabled={settings.text === 4}
                  aria-label="Increase text size"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-ink transition-colors hover:border-ink disabled:opacity-40 focus-visible:outline-2"
                >
                  <Plus aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>

            {/* Toggles */}
            <ul className="space-y-2">
              <ToggleRow
                icon={Contrast}
                label="High contrast"
                pressed={settings.contrast}
                onClick={() => update({ contrast: !settings.contrast })}
              />
              <ToggleRow
                icon={AlignJustify}
                label="More spacing"
                pressed={settings.spacing}
                onClick={() => update({ spacing: !settings.spacing })}
              />
              <ToggleRow
                icon={Underline}
                label="Highlight links"
                pressed={settings.links}
                onClick={() => update({ links: !settings.links })}
              />
              <ToggleRow
                icon={ZapOff}
                label="Reduce motion"
                pressed={settings.motion}
                onClick={() => update({ motion: !settings.motion })}
              />
            </ul>

            {/* Read aloud */}
            <div>
              <p className="mb-2 text-sm font-semibold">Read this page aloud</p>
              <button
                type="button"
                onClick={speaking ? stopReading : readAloud}
                aria-pressed={speaking}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2",
                  speaking
                    ? "bg-coral text-ink hover:bg-coral/90"
                    : "bg-ink text-paper hover:bg-coral hover:text-ink",
                )}
              >
                {speaking ? (
                  <>
                    <Square aria-hidden="true" className="size-4" /> Stop reading
                  </>
                ) : (
                  <>
                    <Volume2 aria-hidden="true" className="size-4" /> Start reading
                  </>
                )}
              </button>
              <p className="mt-2 text-xs text-muted">
                Uses your device&rsquo;s voice. For full screen-reader support, this
                site is built for NVDA, JAWS, and VoiceOver.
              </p>
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={reset}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted transition-colors hover:border-ink hover:text-ink focus-visible:outline-2"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              Reset all
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ToggleRow({
  icon: Icon,
  label,
  pressed,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={pressed}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2",
          pressed
            ? "border-coral bg-coral/10 text-ink"
            : "border-border bg-surface text-ink hover:border-ink",
        )}
      >
        <span className="flex items-center gap-3">
          <Icon aria-hidden={true} className="size-5 text-coral-text" />
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex size-6 items-center justify-center rounded-full border",
            pressed ? "border-coral bg-coral text-ink" : "border-border text-transparent",
          )}
        >
          <Check className="size-4" />
        </span>
      </button>
    </li>
  );
}
