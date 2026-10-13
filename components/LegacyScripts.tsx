"use client";
import Script from "next/script";
import { useEffect } from "react";
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
  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    function refresh() {
      if (cancelled) return;
      if (!window.__samtelReady) {
        frame = requestAnimationFrame(refresh);
        return;
      }
      if (window.__samtelPath !== pathname) window.refreshSamtelPage?.();
    }
    frame = requestAnimationFrame(refresh);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
  return <Script src="/js/next-init.js" strategy="afterInteractive" />;
}
