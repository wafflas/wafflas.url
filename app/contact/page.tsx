import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact — wafflasurl",
  description: "Contact Wafflasurl about a creative development project.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Say hello."
      description={
        <p>
          Contact details are coming soon. Check back shortly to start a
          conversation about a weird, exciting, or unusually ambitious web
          project.
        </p>
      }
    />
  );
}
