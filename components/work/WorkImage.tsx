import Image from "next/image";
import type { WorkImageData } from "@/components/work/workItems";

type WorkImageProps = {
  image: WorkImageData;
  priority?: boolean;
};

export function WorkImage({
  image,
  priority = false,
}: WorkImageProps) {
  return (
    <div className="relative aspect-[3/4] w-[300px] shrink-0 overflow-hidden rounded-sm md:aspect-video md:w-[480px] lg:w-[600px] xl:w-[700px] 2xl:w-[780px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1536px) 780px, (min-width: 1280px) 700px, (min-width: 1024px) 600px, (min-width: 768px) 480px, 300px"
        className="pointer-events-none object-cover select-none"
        draggable={false}
      />
    </div>
  );
}
