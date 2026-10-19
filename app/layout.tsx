import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "wafflasurl — creative developer",
  description:
    "Currently focused on creating weird & exciting websites for cool people.",
  icons: { icon: "/wafflasurl%20_logo.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-dvh flex-col bg-background font-mono leading-normal font-normal text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-grain opacity-(--grain-opacity) motion-safe:animate-grain"
        />
        {children}
      </body>
    </html>
  );
}
