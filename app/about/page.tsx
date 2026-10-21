import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "About — wafflasurl",
  description:
    "Georgios Giannikakis, also known as Wafflas, is a creative developer based in Athens, Greece.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#main-content"
        className="sr-only z-10 bg-background px-4 py-3 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        className="grid flex-1 place-items-center border-t border-border px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl space-y-5 text-start text-sm leading-relaxed text-text-secondary sm:text-base">
          <h1 className="font-pixel text-xs tracking-tight text-foreground uppercase">
            About
          </h1>
          <p>
            Georgios Giannikakis, also known as Wafflas, is a creative developer
            based in Athens, currently working as a Front-end Developer at
            Deloitte.
          </p>
          <p>
            With an interest in both design and technology, he enjoys turning
            ideas into interactive digital experiences, experimenting with
            unconventional layouts, playful interactions, and anything that
            makes the web a little more interesting.
          </p>
          <p>
            Curious by nature and always looking to learn something new, he
            spends much of his time exploring creative coding, experimenting
            with new technologies, and finding different ways to bring design
            and development together.
          </p>
          <p>
            He holds a Bachelor of Science in Applied Informatics, specializing
            in Computer Science and Technology, from the University of
            Macedonia.
          </p>
        </div>
      </main>
    </div>
  );
}
