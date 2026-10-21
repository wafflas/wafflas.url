import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "About — wafflasurl",
  description: "About Wafflasurl, creative developer.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="More soon."
      description="The full story is still being written. This page will soon hold a little more about the person, process, and ideas behind wafflas.url."
    />
  );
}
