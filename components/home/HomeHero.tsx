import { WaffleArtwork } from "@/components/home/WaffleArtwork";
import { PageContainer } from "@/components/layout/PageContainer";

export function HomeHero() {
  return (
    <main id="main-content" className="py-24 sm:py-6">
      <PageContainer className="space-y-24 sm:space-y-6">
        <WaffleArtwork />
        <h1 className="max-w-2xl font-mono text-2xl leading-snug font-normal sm:text-3xl lg:text-4xl">
          currently focused on creating weird &amp; exciting websites for cool
          people.
        </h1>
      </PageContainer>
    </main>
  );
}
