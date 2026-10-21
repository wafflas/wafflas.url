import { WorkCard } from "@/components/work/WorkCard";
import { workItems } from "@/components/work/workItems";

export function WorkList() {
  return (
    <main id="main-content" className="pb-5 mt-6">
      <h1 className="sr-only">Selected work</h1>
      <div>
        {workItems.map((work, workIndex) => (
          <WorkCard
            key={work.slug}
            work={work}
            prioritizeImages={workIndex === 0}
          />
        ))}
      </div>
    </main>
  );
}
