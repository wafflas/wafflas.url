"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const AsciiWaffle = dynamic(() => import("@/components/ui/AsciiWaffle"), {
  ssr: false,
});

export function WaffleArtwork() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="grid size-full min-h-0 place-items-center overflow-hidden [container-type:size]">
      <div
        className="relative aspect-5/4 w-[min(100cqw,125cqh,36rem)] 2xl:w-[min(100cqw,125cqh,48rem)]"
        role="img"
        aria-label="A three-dimensional waffle rendered in ASCII characters"
      >
        {!loaded && (
          <Image
            className="object-contain"
            src="/images/waffle-ascii.png"
            alt=""
            fill
            sizes="(min-width: 96rem) 32rem, (min-width: 40rem) 28rem, 100vw"
            preload
          />
        )}
        <AsciiWaffle
          className="size-full"
          src="/waffle3d.glb"
          ascii
          colored={false}
          color="#000000"
          exposure={1}
          cellSize={9}
          edgeContrast={2}
          contrast={3}
          scale={3.6}
          yOffset={-0.3}
          autoRotate={true}
          autoRotateSpeed={2}
          orbit={true}
          zoom={false}
          floatIntensity={0}
          rotationIntensity={0}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      </div>
    </div>
  );
}
