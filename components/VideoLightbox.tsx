"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type Props = {
  href: string;
  className?: string;
  group?: string;
};

export default function VideoLightbox({
  href,
  className = "streched_link",
  group = "news-video",
}: Props) {
  useEffect(() => {
    Fancybox.bind(`[data-fancybox="${group}"]`, {});
    return () => {
      Fancybox.unbind(`[data-fancybox="${group}"]`);
      Fancybox.close();
    };
  }, [group]);

  return (
    <a
      href={href}
      data-fancybox={group}
      className={className}
      aria-label="Play video"
    />
  );
}