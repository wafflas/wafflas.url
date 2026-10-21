import { Header } from "@/components/layout/Header";
import type { ReactNode } from "react";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#main-content"
        className="sr-only z-10 bg-background px-4 py-3 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        className="flex flex-1 items-end border-t border-border px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
      >
        <div className="max-w-4xl">
          <p className="font-pixel text-xs tracking-tight uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-sans text-[clamp(3.5rem,10vw,9rem)] leading-[0.82] font-bold tracking-[-0.07em]">
            {title}
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            {description}
          </div>
        </div>
      </main>
    </div>
  );
}
