import Link from "next/link";
import { ReactNode } from "react";

export function replaceLinks({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  // this is technically not a remark plugin but it
  // replaces internal links with <Link /> component
  // and external links with <a target="_blank" />
  return href?.startsWith("/") || href === "" ? (
    <Link
      href={href}
      className="cursor-pointer font-semibold underline decoration-stone-500 underline-offset-4 dark:decoration-stone-400"
    >
      {children}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold underline decoration-stone-500 underline-offset-4 dark:decoration-stone-400"
    >
      {children} ↗
    </a>
  );
}
