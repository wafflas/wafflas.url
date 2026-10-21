import { ProjectGallery } from "@/components/work-detail/ProjectGallery";
import { ProjectMetadata } from "@/components/work-detail/ProjectMetadata";
import {
  workPlaceholderDescription,
  type WorkItem,
} from "@/components/work/workItems";

export function ProjectDetail({ work }: { work: WorkItem }) {
  return (
    <main
      id="main-content"
      className="flex flex-col border-t border-border md:min-h-0 md:flex-1 md:grid md:grid-cols-[45%_55%] md:overflow-hidden xl:grid-cols-[33vw_67vw]"
    >
      <aside className="flex shrink-0 flex-col px-4 py-5 sm:px-6 sm:py-6 md:h-full md:min-h-0 md:border-r md:border-border lg:px-5 lg:py-5">
        <div>
          <div className="flex items-baseline justify-between font-pixel text-xs tracking-tight uppercase">
            <span>{work.client}</span>
            <span>{work.year}</span>
          </div>

          <h1 className="mt-5 font-sans text-4xl leading-[0.94] font-bold tracking-[-0.05em] sm:text-5xl lg:text-[clamp(2.75rem,4vw,4rem)]">
            {work.title}
          </h1>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-foreground/70 sm:text-sm">
            {workPlaceholderDescription}
          </p>
        </div>

        <div className="mt-6 space-y-5 border-t border-border pt-5 md:mt-auto">
          <ProjectMetadata title="Awards">
            <p>Awwwards — Honorable Mention</p>
            <p>CSSDA — Special Kudos</p>
          </ProjectMetadata>
          <ProjectMetadata title="Credits">
            <p>Creative direction — {work.client}</p>
            <p>Design &amp; development — wafflas.url</p>
          </ProjectMetadata>
        </div>
      </aside>

      <ProjectGallery images={work.images} />
    </main>
  );
}
