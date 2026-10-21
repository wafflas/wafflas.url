"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import {
  type ComponentProps,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useLayoutEffect,
  useRef,
} from "react";

const EFFECT_RADIUS = 60;

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

type ScrambleLabelProps = {
  children: string;
};

function ScrambleLabel({ children }: ScrambleLabelProps) {
  const labelRef = useRef<HTMLSpanElement>(null);
  const charactersRef = useRef<Element[]>([]);

  useLayoutEffect(() => {
    if (!labelRef.current) return;

    const split = SplitText.create(labelRef.current, {
      type: "chars",
      charsClass: "inline-block will-change-[contents]",
      aria: "hidden",
    });

    charactersRef.current = split.chars;
    split.chars.forEach((character) => {
      gsap.set(character, {
        attr: { "data-content": character.textContent ?? "" },
      });
    });

    return () => {
      gsap.killTweensOf(split.chars);
      charactersRef.current = [];
      split.revert();
    };
  }, [children]);

  function handlePointerMove(event: ReactPointerEvent<HTMLSpanElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    charactersRef.current.forEach((character) => {
      const bounds = character.getBoundingClientRect();
      const distance = Math.hypot(
        event.clientX - (bounds.left + bounds.width / 2),
        event.clientY - (bounds.top + bounds.height / 2),
      );

      if (distance < EFFECT_RADIUS) {
        gsap.to(character, {
          overwrite: true,
          duration: 0.8 - distance / EFFECT_RADIUS,
          scrambleText: {
            text: (character as HTMLElement).dataset.content ?? "",
            chars: ".:",
            speed: 0.5,
          },
          ease: "none",
        });
      }
    });
  }

  return (
    <span
      ref={labelRef}
      aria-hidden="true"
      className="inline-block touch-manipulation whitespace-pre"
      onPointerDown={handlePointerMove}
      onPointerMove={handlePointerMove}
    >
      {children}
    </span>
  );
}

type ScrambleLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: string;
};

export function ScrambleLink({ children, ...props }: ScrambleLinkProps) {
  return (
    <Link {...props} aria-label={props["aria-label"] ?? children}>
      <ScrambleLabel>{children}</ScrambleLabel>
    </Link>
  );
}

type ScrambleIconLinkProps = Omit<ComponentProps<"a">, "children"> & {
  children: ReactNode;
  label: string;
};

export function ScrambleIconLink({
  children,
  label,
  ...props
}: ScrambleIconLinkProps) {
  const iconRef = useRef<HTMLSpanElement>(null);
  const glyphRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const icon = iconRef.current;
    const glyph = glyphRef.current;

    return () => {
      gsap.killTweensOf([icon, glyph]);
    };
  }, []);

  function handlePointerEnter() {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !iconRef.current ||
      !glyphRef.current
    ) {
      return;
    }

    gsap.killTweensOf([iconRef.current, glyphRef.current]);
    gsap
      .timeline()
      .set(iconRef.current, { autoAlpha: 0 })
      .set(glyphRef.current, { autoAlpha: 1 })
      .to(glyphRef.current, {
        duration: 0.35,
        scrambleText: { text: "·", chars: ".:", speed: 0.45 },
        ease: "none",
      })
      .set(glyphRef.current, { autoAlpha: 0 })
      .set(iconRef.current, { autoAlpha: 1 });
  }

  return (
    <a
      {...props}
      aria-label={props["aria-label"] ?? label}
      onPointerEnter={handlePointerEnter}
    >
      <span ref={iconRef} className="flex items-center justify-center">
        {children}
      </span>
      <span
        ref={glyphRef}
        aria-hidden="true"
        className="invisible absolute font-mono leading-none"
      >
        {label.slice(0, 1).toLowerCase()}
      </span>
    </a>
  );
}

type ScrambleButtonProps = Omit<ComponentProps<"button">, "children"> & {
  children: string;
};

export function ScrambleButton({
  children,
  type = "button",
  ...props
}: ScrambleButtonProps) {
  return (
    <button {...props} type={type} aria-label={props["aria-label"] ?? children}>
      <ScrambleLabel>{children}</ScrambleLabel>
    </button>
  );
}
