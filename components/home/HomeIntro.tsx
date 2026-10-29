"use client";

import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  targetX: number;
  targetY: number;
  delay: number;
  seed: number;
  opacity: number;
  glyph: string;
};

const GLYPHS = "01:;+=*#%@/<>[]{}";
gsap.registerPlugin(ScrambleTextPlugin, SplitText);
const IntroContext = createContext<{
  active: boolean;
  spinning: boolean;
  assemble: (canvas: HTMLCanvasElement) => void;
  finish: () => void;
}>({
  active: false,
  spinning: true,
  assemble: () => {},
  finish: () => {},
});

export const useHomeIntro = () => useContext(IntroContext);

// Sample the actual live waffle, keeping the particle silhouette aligned with
// its responsive position. The animation itself draws across the entire screen.
function sampleWaffle(source: HTMLCanvasElement): Particle[] {
  const bounds = source.getBoundingClientRect();
  const cellHeight = 6;
  const cellWidth = 3.6;
  const sample = document.createElement("canvas");
  sample.width = Math.ceil(bounds.width / cellWidth);
  sample.height = Math.ceil(bounds.height / cellHeight);
  const context = sample.getContext("2d", { willReadFrequently: true });
  if (!context) return [];
  context.drawImage(source, 0, 0, sample.width, sample.height);
  const pixels = context.getImageData(0, 0, sample.width, sample.height).data;
  const particles: Particle[] = [];
  for (let y = 0; y < sample.height; y++) {
    for (let x = 0; x < sample.width; x++) {
      const alpha = pixels[(y * sample.width + x) * 4 + 3] / 255;
      if (alpha < 0.035) continue;
      const seed = Math.random();
      const targetX = bounds.left + ((x + 0.5) * bounds.width) / sample.width;
      const targetY = bounds.top + ((y + 0.5) * bounds.height) / sample.height;
      const radius = Math.hypot(
        x / sample.width - 0.5,
        y / sample.height - 0.5,
      );
      particles.push({
        x: (Math.random() - 0.5) * window.innerWidth * 1.6,
        y: (Math.random() - 0.5) * window.innerHeight * 1.6,
        z: (Math.random() - 0.5) * 1000,
        targetX,
        targetY,
        delay: seed * 0.16 + radius * 0.12,
        seed,
        opacity: Math.min(alpha * 2.5, 1),
        glyph: GLYPHS[Math.floor(seed * GLYPHS.length)],
      });
    }
  }
  return particles;
}

export function HomeIntro({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const restoreReveal = useRef<(() => void) | null>(null);
  const started = useRef(false);
  const finished = useRef(false);
  const [active, setActive] = useState(true);
  const [spinning, setSpinning] = useState(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    timeline.current?.kill();
    restoreReveal.current?.();
    restoreReveal.current = null;
    if (root.current) {
      root.current.dataset.intro = "ready";
      gsap.set(root.current.querySelectorAll("header, h1, .home-waffle"), {
        clearProps: "opacity,visibility,transform",
      });
    }
    setActive(false);
    setSpinning(true);
  }, []);

  const assemble = useCallback(
    (source: HTMLCanvasElement) => {
      if (
        started.current ||
        finished.current ||
        !canvas.current ||
        !root.current
      )
        return;
      started.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finish();
        return;
      }
      const surface = canvas.current;
      const context = surface.getContext("2d");
      const particles = sampleWaffle(source);
      if (!context || !particles.length) {
        finish();
        return;
      }
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      context.scale(ratio, ratio);
      context.textAlign = "center";
      context.textBaseline = "middle";
      const state = { progress: 0 };
      const render = () => {
        context.clearRect(0, 0, width, height);
        context.fillStyle = "#000000";
        const time = state.progress * 3;
        for (const particle of particles) {
          const local = gsap.utils.clamp(
            0,
            1,
            (state.progress - particle.delay) / (1 - particle.delay),
          );
          const eased = local * local * (3 - 2 * local);
          const remaining = 1 - eased;
          const z = particle.z * remaining;
          const perspective = 850 / (850 + z);
          const angle = remaining * (particle.seed - 0.5) * 1.8;
          const orbitX =
            particle.x * Math.cos(angle) - particle.y * Math.sin(angle);
          const orbitY =
            particle.x * Math.sin(angle) + particle.y * Math.cos(angle);
          const wave = Math.sin(
            particle.targetY * 0.045 - time * 8 + particle.seed * 3,
          );
          const x =
            particle.targetX * eased +
            (width / 2 + orbitX * perspective) * remaining +
            wave * Math.sin(local * Math.PI) * 12;
          const y =
            particle.targetY * eased +
            (height / 2 + orbitY * perspective) * remaining +
            Math.cos(time * 2 + particle.seed * 20) * remaining * 12;
          const flicker =
            0.45 + 0.55 * Math.abs(Math.sin(time * 11 + particle.seed * 80));
          context.globalAlpha =
            particle.opacity * (eased + remaining * flicker);
          // Quantize sizes so thousands of particles share a small font cache.
          const fontSize =
            Math.round(6 * (1 + (perspective - 1) * remaining) * 2) / 2;
          context.font = `${fontSize}px ui-monospace, monospace`;
          const scramble =
            Math.floor(time * 9 + particle.seed * 40) % GLYPHS.length;
          context.fillText(
            local < 0.7 ? GLYPHS[scramble] : particle.glyph,
            x,
            y,
          );
        }
        context.globalAlpha = 1;
      };
      render();
      const scope = root.current;
      const heading = scope.querySelector("h1");
      const header = scope.querySelector("header");
      const waffle = scope.querySelector(".home-waffle");
      const logo = scope.querySelector("header > div > a");
      const separators = scope.querySelectorAll("header nav li > span");
      // Reuse the navigation's existing hover-scramble characters.
      const navCharacters = Array.from(scope.querySelectorAll<HTMLElement>("header nav [data-content]"));
      const headingSplit = heading ? SplitText.create(heading, {
        type: "words,chars",
        aria: "auto",
      }) : null;
      const headingCharacters = headingSplit?.chars ?? [];
      restoreReveal.current = () => {
        headingSplit?.revert();
        navCharacters.forEach((character) => {
          character.textContent = character.dataset.content ?? "";
        });
        gsap.set([logo, ...separators, ...navCharacters], {
          clearProps: "opacity,visibility,clipPath,transform",
        });
      };
      const sequence = gsap
        .timeline({ onComplete: finish })
        .to(state, {
          progress: 1,
          duration: 2.6,
          ease: "none",
          onUpdate: render,
        })
        // Crossfade into the spinning model while the last particles arrive.
        .addLabel("reveal", 2.3)
        .add(() => {
          scope.dataset.intro = "revealing";
          setSpinning(true);
        }, "reveal")
        .fromTo(waffle, { opacity: 0 }, { opacity: 1, duration: 0.3 }, "reveal")
        .to(surface, { opacity: 0, duration: 0.3 }, "reveal")
        .set(header, { autoAlpha: 1 }, "reveal+=0.08")
        .set(heading, { autoAlpha: 1 }, "reveal+=0.22")
        .fromTo(
          logo,
          { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.4, ease: "steps(4)" },
          "reveal+=0.08",
        )
        .fromTo(
          separators,
          { autoAlpha: 0, scale: 0 },
          { autoAlpha: 1, scale: 1, duration: 0.17, stagger: 0.11, ease: "steps(2)" },
          "reveal+=0.18",
        );
      timeline.current = sequence;
      const decode = (characters: Element[], start: number, stagger: number) => {
        characters.forEach((character, index) => {
          const text = character instanceof HTMLElement && character.dataset.content !== undefined
            ? character.dataset.content
            : character.textContent ?? "";
          sequence.fromTo(character, { autoAlpha: 0 }, {
            autoAlpha: 1,
            duration: 0.4,
            ease: "steps(3)",
            scrambleText: { text, chars: ".:/01", speed: 0.4, tweenLength: false },
          }, `reveal+=${start + index * stagger}`);
        });
      };
      decode(navCharacters, 0.12, 0.035);
      decode(headingCharacters, 0.22, 0.01);
    },
    [finish],
  );

  useEffect(() => {
    finished.current = false;
    started.current = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frame = requestAnimationFrame(() => {
      if (motion.matches) finish();
    });
    const timeout = window.setTimeout(finish, 9000);
    const onMotionChange = () => {
      if (motion.matches) finish();
    };
    const onResize = () => {
      if (started.current) finish();
    };
    motion.addEventListener("change", onMotionChange);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
      motion.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", onResize);
      timeline.current?.kill();
      restoreReveal.current?.();
      restoreReveal.current = null;
    };
  }, [finish]);

  return (
    <IntroContext.Provider value={{ active, spinning, assemble, finish }}>
      <div
        ref={root}
        data-intro={active ? "loading" : "ready"}
        className="home-intro flex h-dvh flex-col overflow-y-hidden"
      >
        {children}
        {active && (
          <>
            <canvas
              ref={canvas}
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 z-30 h-dvh w-screen"
            />
          </>
        )}
      </div>
      <noscript>
        <style>{`.home-intro header, .home-intro h1, .home-intro .home-waffle { opacity: 1 !important; visibility: visible !important; }`}</style>
      </noscript>
    </IntroContext.Provider>
  );
}
