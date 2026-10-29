"use client";

import { useRouter } from "next/navigation";
import { useRef, type MouseEvent } from "react";
import { WorkCarousel } from "@/components/work/WorkCarousel";
import { WorkDetails } from "@/components/work/WorkDetails";
import { WorkImage } from "@/components/work/WorkImage";
import type { WorkItem } from "@/components/work/workItems";

type WorkCardProps = {
  work: WorkItem;
  prioritizeImages?: boolean;
};

export function WorkCard({ work, prioritizeImages = false }: WorkCardProps) {
  const router = useRouter();
  const gesture = useRef({ x: 0, y: 0, dragged: false });
  const href = `/work/${work.slug}`;

  function handleClick(event: MouseEvent<HTMLElement>) {
    if (
      event.defaultPrevented ||
      gesture.current.dragged ||
      (event.target as Element).closest("a, button, input, select, textarea") ||
      window.getSelection()?.toString()
    )
      return;

    if (event.metaKey || event.ctrlKey || event.shiftKey) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  }

  return (
    <article
      className="cursor-pointer overflow-hidden"
      onClick={handleClick}
      onPointerDownCapture={(event) => {
        gesture.current = {
          x: event.clientX,
          y: event.clientY,
          dragged: false,
        };
      }}
      onPointerMoveCapture={(event) => {
        if (
          Math.hypot(
            event.clientX - gesture.current.x,
            event.clientY - gesture.current.y,
          ) > 8
        ) {
          gesture.current.dragged = true;
        }
      }}
    >
      <div className="border-t border-border">
        <div className="flex flex-col pt-2.5 pb-6 md:flex-row md:items-start md:py-0">
          <WorkDetails work={work} />
          <WorkCarousel href={href}>
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
