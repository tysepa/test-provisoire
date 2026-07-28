import React from "react";

export function TimerWidget({ secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  let colorClass = "var(--accent-emerald)";
  if (secondsRemaining <= 180) colorClass = "var(--accent-rose)";
  else if (secondsRemaining <= 300) colorClass = "var(--accent-amber)";

  return (
    <div className="timer-widget" style={{ color: colorClass, borderColor: colorClass }}>
      ⏱️ <span>{timeStr}</span>
    </div>
  );
}
