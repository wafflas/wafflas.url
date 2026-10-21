export const workPlaceholderDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod lorem et faucibus finibus. Fusce at justo egestas, pharetra ex vel, viverra nibh. Etiam tincidunt est nec justo vestibulum, non fermentum enim viverra. Aliquam ac porttitor eros, non viverra tellus.";

export const workItems = [
  {
    slug: "twelveebook",
    client: "TWELVEE",
    year: "2025",
    title: "Twelveebook",
    images: [
      {
        src: "/images/work/twelveebook-01.png",
        alt: "Twelveebook mobile screens",
      },
      { src: "/images/work/twelveebook-02.png", alt: "Twelveebook interface" },
      { src: "/images/work/shared-03.png", alt: "Work visual study" },
      {
        src: "/images/work/twelveebook-02.png",
        alt: "Twelveebook interface detail",
      },
      {
        src: "/images/work/twelveebook-01.png",
        alt: "Twelveebook mobile screen detail",
      },
      { src: "/images/work/shared-03.png", alt: "Twelveebook visual study" },
      {
        src: "/images/work/twelveebook-02.png",
        alt: "Twelveebook interface overview",
      },
      {
        src: "/images/work/twelveebook-01.png",
        alt: "Twelveebook mobile overview",
      },
    ],
  },
  {
    slug: "datelie",
    client: "Drinkdamilk",
    year: "2026",
    title: "Datelie",
    images: [
      { src: "/images/work/datelie-01.png", alt: "Datelie brand composition" },
      { src: "/images/work/datelie-02.png", alt: "Datelie website interface" },
      { src: "/images/work/shared-03.png", alt: "Work visual study" },
    ],
  },
  {
    slug: "ksekollaz",
    client: "Stella petasi",
    year: "2026",
    title: "Ksekollaz",
    images: [
      { src: "/images/work/ksekollaz-01.png", alt: "Ksekollaz mobile artwork" },
      {
        src: "/images/work/ksekollaz-02.png",
        alt: "Ksekollaz visual identity",
      },
      { src: "/images/work/shared-03.png", alt: "Work visual study" },
    ],
  },
] as const;

export type WorkItem = (typeof workItems)[number];
export type WorkImageData = WorkItem["images"][number];
