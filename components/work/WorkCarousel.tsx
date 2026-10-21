"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

const navigationThreshold = 200;

export function WorkCarousel({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const router = useRouter();
  const endPositionRef = useRef<number | null>(null);
  const isNavigationArmedRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const [isNavigationArmed, setIsNavigationArmed] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
  });

  function resetPull() {
    endPositionRef.current = null;
    isNavigationArmedRef.current = false;
    pointerIdRef.current = null;
    setIsNavigationArmed(false);
    setPullProgress(0);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (pointerIdRef.current !== event.pointerId || !emblaApi) return;

    if (endPositionRef.current === null && !emblaApi.canScrollNext()) {
      endPositionRef.current = event.clientX;
    }

    if (endPositionRef.current === null) return;

    const distance = Math.max(0, endPositionRef.current - event.clientX);
    const progress = Math.min(distance / navigationThreshold, 1);
    const isArmed = progress === 1;

    isNavigationArmedRef.current = isArmed;
    setIsNavigationArmed(isArmed);
    setPullProgress(progress);
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (pointerIdRef.current !== event.pointerId) return;

    if (isNavigationArmedRef.current) {
      router.push(href);
    }

    resetPull();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi?.scrollPrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi?.scrollNext();
    }
  }

  return (
    <div
      ref={emblaRef}
      role="region"
      aria-label="Work image gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={(event) => {
        pointerIdRef.current = event.pointerId;
        endPositionRef.current = emblaApi?.canScrollNext()
          ? null
          : event.clientX;
      }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={resetPull}
      className="relative w-full min-w-0 cursor-grab overflow-hidden focus-visible:outline-offset-[-3px] active:cursor-grabbing md:flex-1"
    >
      <div className="flex touch-pan-y gap-[5px] px-4 select-none md:py-12 md:pt-2.5 md:pr-5 md:pl-0">
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 right-1 w-32 -translate-y-1/2 transition-opacity duration-150 ${
          pullProgress > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="transition-transform duration-75 ease-out"
          style={{ transform: `translateX(${(1 - pullProgress) * 100}%)` }}
        >
          <p className="mb-2 text-center text-[10px] tracking-[0.16em] uppercase">
            {isNavigationArmed ? "Release to view" : "Keep dragging"}
          </p>
          <div className="h-px w-full bg-foreground/25">
            <div
              className="h-full origin-left bg-foreground"
              style={{ transform: `scaleX(${pullProgress})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
