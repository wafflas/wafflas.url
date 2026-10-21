"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SVGProps } from "react";
import { Logo } from "@/components/ui/Logo";
import { ScrambleIconLink, ScrambleLink } from "@/components/ui/ScrambleText";

const navigation = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/wafflas.url/",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/georgios-giannikakis-822ab4252/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/wafflas",
    icon: GitHubIcon,
  },
] as const;

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="mt-auto shrink-0 py-8 sm:py-6">
      <div className="flex w-full flex-col items-center gap-5 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <Link href="/" aria-label="Wafflasurl home" className="shrink-0">
            <Logo className="size-8" />
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 text-xs lowercase tracking-tight text-text-secondary">
              {navigation.map((item) => (
                <li key={item.label}>
                  <ScrambleLink
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </ScrambleLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <ul className="flex items-center justify-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <ScrambleIconLink
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  label={label}
                  className="relative flex size-8 items-center justify-center text-text-secondary transition-colors hover:text-foreground"
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                </ScrambleIconLink>
              </li>
            ))}
          </ul>

          <p className="font-pixel text-xs tracking-tight text-text-secondary">
            © 2026 wafflas.url
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.25 7.5A2.25 2.25 0 1 0 5.25 3a2.25 2.25 0 0 0 0 4.5ZM3.375 9h3.75v12h-3.75V9ZM9.375 9h3.594v1.64h.05c.5-.949 1.725-1.949 3.55-1.949 3.8 0 4.5 2.5 4.5 5.75V21h-3.75v-5.813c0-1.387-.025-3.175-1.934-3.175-1.938 0-2.235 1.513-2.235 3.075V21h-3.75V9h-.025Z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.37 6.84 9.726.5.094.683-.222.683-.494 0-.244-.009-.888-.014-1.743-2.782.62-3.369-1.375-3.369-1.375-.455-1.184-1.11-1.499-1.11-1.499-.908-.636.069-.623.069-.623 1.004.073 1.532 1.057 1.532 1.057.892 1.568 2.341 1.115 2.91.853.091-.663.35-1.115.635-1.371-2.221-.26-4.556-1.14-4.556-5.067 0-1.12.39-2.035 1.03-2.753-.103-.26-.446-1.304.098-2.715 0 0 .84-.276 2.75 1.051A9.33 9.33 0 0 1 12 6.976a9.3 9.3 0 0 1 2.504.345c1.909-1.327 2.748-1.051 2.748-1.051.545 1.411.202 2.455.1 2.715.64.718 1.028 1.633 1.028 2.753 0 3.938-2.339 4.804-4.567 5.058.359.317.679.945.679 1.904 0 1.374-.013 2.483-.013 2.82 0 .275.18.593.688.493C19.138 20.624 22 16.787 22 12.253 22 6.59 17.523 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
