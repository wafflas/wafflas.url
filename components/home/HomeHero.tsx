import { WaffleArtwork } from "@/components/home/WaffleArtwork";

export function HomeHero() {
  return (
    <main
      id="main-content"
      className="min-h-0 flex-1 overflow-y-hidden py-[clamp(1rem,4dvh,1.5rem)]"
    >
      <div className="grid h-full min-h-0 w-full grid-rows-[minmax(0,1fr)_auto] gap-[clamp(1rem,4dvh,5rem)] px-4 sm:px-6 lg:px-8">
        <WaffleArtwork />
        <h1 className="max-w-sm font-mono text-xl leading-snug font-normal md:max-w-2xl md:text-2xl lg:text-4xl">
          currently focused on creating weird &amp; exciting websites for cool
          people.
        </h1>
      </div>
    </main>
  );
}
