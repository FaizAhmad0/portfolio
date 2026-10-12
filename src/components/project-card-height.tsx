"use client";

import { useEffect } from "react";

export function ProjectCardHeight() {
  useEffect(() => {
    const contactCard = document.querySelector<HTMLElement>(".contact-card");
    const projectCards = document.querySelectorAll<HTMLElement>(".project-card");
    if (!contactCard) return;

    const matchHeight = () => {
      const height = `${contactCard.offsetHeight}px`;
      projectCards.forEach((card) => {
        card.style.height = height;
        card.style.minHeight = height;
        card.style.maxHeight = height;
      });
    };

    matchHeight();
    const observer = new ResizeObserver(matchHeight);
    observer.observe(contactCard);
    return () => observer.disconnect();
  }, []);

  return null;
}
