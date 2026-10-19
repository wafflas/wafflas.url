import Image from "next/image";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/wafflasurl%20_logo.svg"
      alt="Wafflasurl"
      width={44}
      height={44}
      loading="eager"
    />
  );
}
