import type { ReactNode } from "react";

export function ProjectMetadata({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="text-xs leading-relaxed">
      <h2 className="mb-2 font-pixel tracking-wider uppercase">{title}</h2>
      <div className="text-foreground/70">{children}</div>
    </section>
  );
}
