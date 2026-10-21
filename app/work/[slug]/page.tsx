import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { ProjectDetail } from "@/components/work-detail/ProjectDetail";
import { ProjectDetailSkeleton } from "@/components/work-detail/ProjectDetailSkeleton";
import { workItems } from "@/components/work/workItems";

export function generateStaticParams() {
  return workItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = workItems.find((item) => item.slug === slug);

  return work
    ? { title: `${work.title} — wafflasurl` }
    : { title: "Work not found — wafflasurl" };
}

export default function WorkDetailPage({
  params,
}: PageProps<"/work/[slug]">) {
  return (
    <div className="project-detail-page flex min-h-dvh flex-col md:min-h-0 md:flex-1 md:overflow-hidden">
      <a
        href="#main-content"
        className="sr-only z-10 bg-background px-4 py-3 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <WorkDetail params={params} />
      </Suspense>
    </div>
  );
}

async function WorkDetail({
  params,
}: Pick<PageProps<"/work/[slug]">, "params">) {
  const { slug } = await params;
  const work = workItems.find((item) => item.slug === slug);

  if (!work) notFound();

  return <ProjectDetail work={work} />;
}
