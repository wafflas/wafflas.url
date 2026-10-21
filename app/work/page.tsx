import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { WorkList } from "@/components/work/WorkList";

export const metadata: Metadata = {
  title: "Work — wafflasurl",
  description: "Selected creative development work by Wafflasurl.",
};

export default function WorkPage() {
  return (
    <div className="min-h-dvh overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only z-10 bg-background px-4 py-3 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <WorkList />
    </div>
  );
}
