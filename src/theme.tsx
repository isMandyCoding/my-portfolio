import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: "Space Mono, monospace",
    heading: '"IBM Plex Mono", monospace',
    monospace: '"Space Mono", monospace',
  },
  colors: {
    text: "#004369",
    textLight: "#00436950",
    background: "#faf0d3",
    accentBackground: "#016266",
    hover: "#F0E6CA",
    primary: "#ff5757",
    secondary: "#00c2cb",
    accent: "#01949a",
    modes: {
      dark: {
        text: "#faf0d3",
        textLight: "#faf0d350",
        background: "#004369",
        accentBackground: "#016266",
        hover: "#046196",
        primary: "#ff5757",
        secondary: "#00c2cb",
        accent: "#01949a",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  breakpoints: [
    "40em",
    "@media (min-width: 56em) and (orientation: landscape)",
    "64em",
  ],
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
      fontSize: 5,
    },
  },
  layout: {
    container: {
      display: "flex",
      margin: "48px",
    },
  },
};
