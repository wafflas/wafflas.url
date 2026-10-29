"use client";

function attachScrollLock(style: HTMLStyleElement | null) {
  if (!style) return;
  style.media = "";

  // Activity cleans up refs when a cached route becomes hidden, then
  // reattaches them when the route becomes visible again.
  return () => {
    style.media = "not all";
  };
}

export function ProjectScrollLock() {
  return (
    <style ref={attachScrollLock}>
      {`@media (width >= 48rem) {
        body {
          height: 100dvh;
          min-height: 100dvh;
          overflow: hidden;
        }
      }`}
    </style>
  );
}
