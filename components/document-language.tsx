"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function DocumentLanguage({ languages }: { languages: Record<string, "en" | "hi"> }) {
  const pathname = usePathname();
  useEffect(() => {
    const slug = pathname.match(/^\/post\/([^/]+)\/?$/)?.[1];
    document.documentElement.lang = slug ? languages[decodeURIComponent(slug)] ?? "en" : "en";
  }, [pathname, languages]);
  return null;
}
