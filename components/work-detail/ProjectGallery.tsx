import Image from "next/image";
import type { WorkImageData } from "@/components/work/workItems";

export function ProjectGallery({
  images,
}: {
  images: readonly WorkImageData[];
}) {
  const [leadImage, ...remainingImages] = images;
  const rows: Array<
    | { type: "pair"; images: WorkImageData[] }
    | { type: "full"; image: WorkImageData }
  > = [];

  for (let index = 0; index < remainingImages.length; ) {
    rows.push({
      type: "pair",
      images: remainingImages.slice(index, index + 2),
    });
    index += 2;

    if (index < remainingImages.length) {
      rows.push({ type: "full", image: remainingImages[index] });
      index += 1;
    }
  }

  return (
    <div
      role="region"
      aria-label="Project images"
      tabIndex={0}
      className="space-y-2 p-2 focus-visible:outline-offset-[-3px] md:min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-contain"
    >
      <ProjectImage
        image={leadImage}
        priority
        sizes="(min-width: 1024px) 64vw, 100vw"
      />

      {rows.map((row, rowIndex) =>
        row.type === "full" ? (
          <ProjectImage
            key={`full-${rowIndex}-${row.image.src}`}
            image={row.image}
            sizes="(min-width: 1024px) 64vw, 100vw"
          />
        ) : (
          <div key={`pair-${rowIndex}`} className="flex gap-2">
            {row.images.map((image, imageIndex) => (
              <div
                key={`${image.src}-${imageIndex}`}
                className="min-w-0 flex-1"
              >
                <ProjectImage
                  image={image}
                  sizes="(min-width: 1024px) 32vw, 50vw"
                />
              </div>
            ))}
          </div>
        ),
      )}
    </div>
  );
}

function ProjectImage({
  image,
  priority = false,
  sizes,
}: {
  image: WorkImageData;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure className="relative aspect-video overflow-hidden rounded-sm bg-foreground/5">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}
