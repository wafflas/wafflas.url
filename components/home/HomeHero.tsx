import { WaffleArtwork } from "@/components/home/WaffleArtwork";
import { PageContainer } from "@/components/layout/PageContainer";

export function HomeHero() {
  return (
    <main
      id="main-content"
      className="min-h-0 flex-1 overflow-y-hidden py-[clamp(1rem,4dvh,1.5rem)]"
    >
      <PageContainer className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-[clamp(1rem,4dvh,5rem)]">
        <WaffleArtwork />
        <h1 className="max-w-sm font-mono text-xl md:text-2xl lg:text-4xl leading-snug font-normal md:max-w-2xl">
          currently focused on creating weird &amp; exciting websites for cool
          people.
        </h1>
      </PageContainer>
    </main>
  );
}
