import { HomeHero } from "@/components/home/HomeHero";
import { SiteHeader } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-10 bg-background px-4 py-3 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <HomeHero />
    </>
  );
}
