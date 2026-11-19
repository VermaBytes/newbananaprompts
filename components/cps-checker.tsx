"use client";

import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";

const durations = [1, 5, 10, 30, 60] as const;
type Duration = (typeof durations)[number];
type TestStatus = "ready" | "running" | "complete";

function getPerformanceMessage(cps: number) {
  if (cps < 3) return "A steady start. Keep practicing to build your rhythm.";
  if (cps < 6) return "Good work. Your clicking rhythm is coming along.";
  if (cps < 9) return "Nice speed. You kept up a strong pace.";
  if (cps < 12) return "Fast clicking. That was an impressive run.";
  return "Lightning fast. You clicked at an exceptional pace.";
}

export function CpsChecker() {
  const [duration, setDuration] = useState<Duration>(10);
  const [remaining, setRemaining] = useState<number>(10);
  const [clicks, setClicks] = useState(0);
  const [status, setStatus] = useState<TestStatus>("ready");
  const statusRef = useRef<TestStatus>("ready");
  const clickCountRef = useRef(0);
  const deadlineRef = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "running") return;

    const updateTimer = () => {
      const deadline = deadlineRef.current;
      if (deadline === null) return;

      const timeLeft = deadline - performance.now();
      if (timeLeft <= 0) {
        statusRef.current = "complete";
        deadlineRef.current = null;
        setRemaining(0);
        setStatus("complete");
        return;
      }

      const nextRemaining = Math.ceil(timeLeft / 1000);
      setRemaining((current) => current === nextRemaining ? current : nextRemaining);
    };

    const timerId = window.setInterval(updateTimer, 50);
    updateTimer();
    return () => window.clearInterval(timerId);
  }, [status]);

  function registerClick() {
    if (statusRef.current === "complete") return;

    const now = performance.now();
    if (statusRef.current === "ready") {
      deadlineRef.current = now + duration * 1000;
      statusRef.current = "running";
      clickCountRef.current = 1;
      setClicks(1);
      setRemaining(duration);
      setStatus("running");
      return;
    }

    const deadline = deadlineRef.current;
    if (deadline === null || now >= deadline) {
      statusRef.current = "complete";
      deadlineRef.current = null;
      setRemaining(0);
      setStatus("complete");
      return;
    }

    clickCountRef.current += 1;
    setClicks(clickCountRef.current);
  }

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    registerClick();
  }

  function handleKeyboardClick(event: MouseEvent<HTMLButtonElement>) {
    if (event.detail === 0) registerClick();
  }

  function resetTest(nextDuration: Duration = duration) {
    deadlineRef.current = null;
    clickCountRef.current = 0;
    statusRef.current = "ready";
    setClicks(0);
    setRemaining(nextDuration);
    setStatus("ready");
  }

  function chooseDuration(nextDuration: Duration) {
    if (statusRef.current === "running") return;
    setDuration(nextDuration);
    resetTest(nextDuration);
  }

  const cps = clicks / duration;
  const statusMessage = status === "running"
    ? "Test started."
    : status === "complete"
      ? "Test complete."
      : "Ready. Click the test area to begin.";

  return (
    <section className="site-panel space-y-6 p-5 sm:p-8" aria-labelledby="cps-test-heading">
      <h2 id="cps-test-heading" className="text-xl font-bold">Set your test duration</h2>
      <fieldset disabled={status === "running"} className="space-y-3">
        <legend className="theme-text-secondary mb-3 text-sm">Choose a duration in seconds</legend>
        <div className="grid grid-cols-5 gap-2 sm:flex sm:flex-wrap">
          {durations.map((seconds) => (
            <button
              key={seconds}
              type="button"
              aria-pressed={duration === seconds}
              onClick={() => chooseDuration(seconds)}
              className={`theme-button min-h-11 px-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:min-w-20 sm:px-4 ${duration === seconds ? "ring-2 ring-teal-700 ring-offset-2" : ""}`}
            >
              {seconds}s
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="theme-card p-4 text-center">
          <p className="theme-text-secondary text-xs font-semibold uppercase tracking-wide">Time left</p>
          <output aria-label="Time remaining" className="mt-1 block text-3xl font-bold tabular-nums">{remaining}s</output>
        </div>
        <div className="theme-card p-4 text-center">
          <p className="theme-text-secondary text-xs font-semibold uppercase tracking-wide">Clicks</p>
          <output aria-label="Total clicks" className="mt-1 block text-3xl font-bold tabular-nums">{clicks}</output>
        </div>
        <div className="theme-card col-span-2 p-4 text-center sm:col-span-1">
          <p className="theme-text-secondary text-xs font-semibold uppercase tracking-wide">CPS</p>
          <output aria-label="Clicks per second" className="mt-1 block text-3xl font-bold tabular-nums">
            {status === "complete" ? cps.toFixed(2) : "--"}
          </output>
        </div>
      </div>

      <button
        type="button"
        disabled={status === "complete"}
        onPointerDown={handlePointerDown}
        onClick={handleKeyboardClick}
        className="flex min-h-56 w-full touch-manipulation select-none flex-col items-center justify-center gap-2 border-2 border-dashed border-teal-700 bg-teal-50 px-4 py-8 text-center text-teal-950 hover:bg-teal-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-64"
        aria-label={status === "complete" ? "Test complete" : "Click to start or continue the CPS test"}
      >
        <span className="text-2xl font-bold sm:text-3xl">
          {status === "ready" ? "Click here to start" : status === "running" ? "Keep clicking!" : "Test complete"}
        </span>
        <span className="text-sm">{status === "running" ? "Click or tap as quickly as you can" : status === "ready" ? "The timer starts with your first click" : "Your result is ready below"}</span>
      </button>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="theme-text-secondary text-sm" aria-live="polite">{statusMessage}</p>
        {status !== "ready" && (
          <button
            type="button"
            onClick={() => resetTest()}
            className="theme-button min-h-11 px-5 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Try Again
          </button>
        )}
      </div>

      {status === "complete" && (
        <section className="theme-card space-y-3 p-5" aria-labelledby="cps-result-heading">
          <h3 id="cps-result-heading" className="text-lg font-bold">Your result</h3>
          <dl className="grid gap-3 text-sm sm:grid-cols-3">
            <div><dt className="theme-text-secondary">Total clicks</dt><dd className="mt-1 text-xl font-bold">{clicks}</dd></div>
            <div><dt className="theme-text-secondary">CPS score</dt><dd className="mt-1 text-xl font-bold">{cps.toFixed(2)}</dd></div>
            <div><dt className="theme-text-secondary">Test duration</dt><dd className="mt-1 text-xl font-bold">{duration} seconds</dd></div>
          </dl>
          <p className="theme-text-secondary leading-7">{getPerformanceMessage(cps)}</p>
        </section>
      )}
    </section>
  );
}
