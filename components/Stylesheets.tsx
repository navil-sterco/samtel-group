"use client";
import { usePathname } from "next/navigation";
export default function Stylesheets() {
  const home = usePathname() === "/";
  return (
    <>
      <link rel="stylesheet" href="/css/style.css" />
      {home && <link rel="stylesheet" href="/css/home-group.css" />}
      <link rel="stylesheet" href="/css/inner.css" />
      <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
    </>
  );
}
