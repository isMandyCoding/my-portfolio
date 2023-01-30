import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: '"Space Mono", monospace',
    heading: '"IBM Plex Mono", monospace',
    monospace: '"Space Mono", monospace',
    cursive: "'Beth Ellen', cursive",
  },
  colors: {
    text: "#004369",
    textLight: "#00436950",
    shadow: "#00436950",
    background: "#faf0d3",
    accentBackground: "#01626650",
    hover: "#F0E6CA",
    primary: "#ff5757",
    secondary: "#00c2cb",
    accent: "#01949a",
    accentHover: "rgba(0, 194, 203, 0.15)",
    accentBackgroundContrast: "#000",
    modes: {
      dark: {
        text: "#faf0d3",
        textLight: "#faf0d350",
        background: "#004369",
        shadow: "#001E2F",
        accentBackground: "#01626650",
        hover: "#046196",
        primary: "#ff5757",
        secondary: "#00c2cb",
        accent: "#01949a",
        accentBackgroundContrast: "#fff",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    cursive: {
      fontFamily: "'Beth Ellen', cursive",
      lineHeight: "body",
      fontWeight: "body",
    },
  },
  breakpoints: ["480px", "850px", "1024px", "1200px"],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
    },
  },
  layout: {
    container: {
      display: "flex",
      margin: "48px",
    },
  },
};
