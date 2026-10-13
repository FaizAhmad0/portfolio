"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

export function NavLogo() {
  const light = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === "light",
    () => false,
  );

  return (
    <Image
      src={light ? "/logo-light.png" : "/logo-dark.png"}
      alt=""
      width={1600}
      height={573}
      sizes="(max-width: 380px) 92px, 112px"
      className="nav-logo rounded-sm object-contain"
    />
  );
}
