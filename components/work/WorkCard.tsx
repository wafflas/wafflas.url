import { WorkCarousel } from "@/components/work/WorkCarousel";
import { WorkDetails } from "@/components/work/WorkDetails";
import { WorkImage } from "@/components/work/WorkImage";
import type { WorkItem } from "@/components/work/workItems";

type WorkCardProps = {
  work: WorkItem;
  prioritizeImages?: boolean;
};

export function WorkCard({
  work,
  prioritizeImages = false,
}: WorkCardProps) {
  return (
    <article className="overflow-hidden">
      <div className="border-t border-border">
        <div className="flex flex-col pt-2.5 pb-6 md:flex-row md:items-start md:py-0">
          <WorkDetails work={work} />
          <WorkCarousel href={`/work/${work.slug}`}>
            {work.images.map((image, imageIndex) => (
              <WorkImage
                key={`${image.src}-${imageIndex}`}
                image={image}
                priority={prioritizeImages && imageIndex < 2}
              />
            ))}
          </WorkCarousel>
        </div>
      </div>
    </article>
  );
}
