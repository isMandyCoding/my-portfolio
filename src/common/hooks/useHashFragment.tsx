import { useEffect, useState } from "react";

export const useHashFragment = (offset = 0, isSmooth = true) => {
  const [currentHash, setCurrentHash] = useState("");
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      if (!hash) return;
      const elementToScroll = document.getElementById(hash);
      if (!elementToScroll) return;

      const behavior = isSmooth ? "smooth" : "auto";
      elementToScroll.scrollIntoView({
        behavior: behavior,
      });
      setCurrentHash(hash);
    };

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return () => {
      window.removeEventListener("hashchange", scrollToHashElement);
    };
  }, [isSmooth]);
  return currentHash;
};
