import {
  workPlaceholderDescription,
  type WorkItem,
} from "@/components/work/workItems";
import { ScrambleLink } from "@/components/ui/ScrambleText";

export function WorkDetails({ work }: { work: WorkItem }) {
  return (
    <div className="relative z-10 mb-6 flex w-full flex-col px-4 md:mb-0 md:w-[33vw] md:shrink-0 md:px-5 md:py-12 md:pt-2.5">
      <div className="mb-4 flex items-baseline justify-between font-pixel text-xs tracking-tight uppercase">
        <span>{work.client}</span>
        <span>{work.year}</span>
      </div>
      <h2 className="font-sans text-3xl font-bold tracking-tight md:mb-2 md:text-4xl">
        {work.title}
      </h2>
      <p className="pt-1 text-xs leading-tight text-foreground/70 md:max-w-md md:pt-0 lg:text-sm">
        {workPlaceholderDescription}
      </p>
      <ScrambleLink
        href={`/work/${work.slug}`}
        aria-label={`Read more about ${work.title}`}
        className="mt-3 w-fit text-xs [&>span]:border-b [&>span]:border-current"
      >
        Read more
      </ScrambleLink>
    </div>
  );
}
