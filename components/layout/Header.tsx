"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Logo } from "@/components/ui/Logo";
import { ScrambleLink } from "@/components/ui/ScrambleText";

const navigation = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
] as const;

export function Header() {
  return (
    <Suspense fallback={<HeaderContent pathname="" />}>
      <ActiveHeader />
    </Suspense>
  );
}

function ActiveHeader() {
  return <HeaderContent pathname={usePathname()} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  return (
    <header className="sticky top-0 z-20 shrink-0 py-6 sm:py-8">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Wafflasurl home" className="shrink-0">
          <Logo className="size-12 sm:size-16" />
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center text-md lg:text-xl">
            {navigation.map((item, index) => (
              <li
                key={item.label}
                className="flex items-center gap-3 pl-3 whitespace-nowrap first:pl-0 sm:gap-6 sm:pl-6"
              >
                {index > 0 && (
                  <span aria-hidden="true" className="flex items-center">
                    <Image
                      src="/images/nav-separator-mobile.svg"
                      alt=""
                      width={4}
                      height={4}
                      className="-scale-y-100 sm:hidden"
                    />
                    <Image
                      src="/images/nav-separator.svg"
                      alt=""
                      width={6}
                      height={6}
                      className="hidden -scale-y-100 sm:block"
                    />
                  </span>
                )}
                <ScrambleLink
                  href={item.href}
                  aria-label={`Go to ${item.label} page`}
                  aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center ${pathname === item.href || pathname.startsWith(`${item.href}/`) ? "text-foreground/40" : "text-foreground"}`}
                >
                  {item.label}
                </ScrambleLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
