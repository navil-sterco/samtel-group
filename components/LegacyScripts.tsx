"use client";
import Script from "next/script";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __samtelReady?: boolean;
    __samtelPath?: string;
    refreshSamtelPage?: () => void;
  }
}

export default function LegacyScripts() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current !== pathname) {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
      previousPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    function refresh() {
      if (cancelled) return;
      if (!window.__samtelReady) {
        frame = requestAnimationFrame(refresh);
        return;
      }
      if (window.__samtelPath !== pathname) {
        const isPageChange = window.__samtelPath !== undefined;
        window.refreshSamtelPage?.();
        // Legacy animation cleanup can restore the previous page's scroll.
        if (isPageChange && !window.location.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }
    }
    frame = requestAnimationFrame(refresh);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  return <Script src="/js/next-init.js" strategy="afterInteractive" />;
}
