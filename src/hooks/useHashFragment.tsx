import { useEffect } from "react";

export const useHashFragment = (offset = 0, isSmooth = true) => {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash);
      if (!elementToScroll) return;

      const behavior = isSmooth ? "smooth" : "auto";
      elementToScroll.scrollIntoView({
        behavior: behavior,
      });
    };

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return () => {
      window.removeEventListener("hashchange", scrollToHashElement);
    };
  }, [isSmooth]);
};
