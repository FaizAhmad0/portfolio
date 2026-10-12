"use client";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
const subscribe = (callback: () => void) => {
  const storage = () => { try { document.documentElement.dataset.theme = localStorage.getItem("theme") === "light" ? "light" : "dark"; } catch {} callback(); };
  window.addEventListener("themechange", callback); window.addEventListener("storage", storage);
  return () => { window.removeEventListener("themechange", callback); window.removeEventListener("storage", storage); };
};
export function ThemeToggle() {
  const light = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme === "light", () => false);
  function toggle() { const theme = light ? "dark" : "light"; document.documentElement.dataset.theme = theme; try { localStorage.setItem("theme", theme); } catch {} window.dispatchEvent(new Event("themechange")); }
  return <Button variant="ghost" size="icon" onClick={toggle} aria-label={`Switch to ${light ? "dark" : "light"} theme`} title={`Switch to ${light ? "dark" : "light"} theme`}>{light ? <Moon aria-hidden="true"/> : <Sun aria-hidden="true"/>}</Button>;
}
