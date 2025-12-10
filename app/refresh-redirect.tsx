"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RefreshRedirect() {
  const router = useRouter();

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0];

    if (nav && "type" in nav) {
      if (nav.type === "reload") {
        router.replace("/");
      }
    }
  }, );

  return null;
}
