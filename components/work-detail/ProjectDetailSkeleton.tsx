export function ProjectDetailSkeleton() {
  return (
    <main className="flex flex-col border-t border-border md:min-h-0 md:flex-1 md:grid md:grid-cols-[45%_55%] md:overflow-hidden xl:grid-cols-[33vw_67vw]">
      <div className="shrink-0 animate-pulse px-4 py-5 sm:px-6 sm:py-6 md:h-full md:border-r md:border-border lg:px-5">
        <div className="flex justify-between">
          <div className="h-3 w-24 rounded-sm bg-foreground/10" />
          <div className="h-3 w-10 rounded-sm bg-foreground/10" />
        </div>
        <div className="mt-8 h-14 w-4/5 rounded-sm bg-foreground/10" />
        <div className="mt-5 h-20 max-w-md rounded-sm bg-foreground/10" />
      </div>
      <div className="space-y-2 overflow-hidden p-2 md:min-h-0 md:flex-1">
        <div className="aspect-video animate-pulse rounded-sm bg-foreground/10" />
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-video animate-pulse rounded-sm bg-foreground/10" />
          <div className="aspect-video animate-pulse rounded-sm bg-foreground/10" />
        </div>
      </div>
    </main>
  );
}
