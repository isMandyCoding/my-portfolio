/** @jsxImportSource theme-ui */
import NavBar from "../components/NavBar";
import { HTMLAttributes, MouseEventHandler, useState } from "react";
import { ReactComponent as FlowerIcon } from "../svg/daisy.svg";
import MobileMenuDrawer from "../components/MobileMenuDrawer";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
import { keyframes } from "@emotion/react";
import StyleableSVG from "../components/StyleableSVG";

const typing = keyframes({
  from: {
    width: 0,
  },
});

const blink = keyframes({
  "50%": {
    borderColor: "transparent",
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    display: "none",
  },
});

const endBlink = keyframes({
  to: {
    borderColor: "transparent",
    opacity: 0,
    display: "none",
  },
});

export interface GeneralPageLayoutProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function GeneralPageLayout({
  children,
  ...props
}: GeneralPageLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <div
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        scrollbarWidth: "none",
        maxWidth: "1080px",
        "& ::-webkit-scrollbar": {
          width: "0px",
          background: "transparent",
          display: "none",
        },
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateRows: "64px 1fr auto",
          gap: 1,
          height: "100vh",
          position: "relative",
        }}
      >
        <header
          id="topbar"
          sx={{
            position: "sticky",
            display: "flex",
            // justifyContent: "start",
            width: 1,
            alignItems: "center",
            "&::after": {
              content: "''",
              position: "absolute",
              top: "64px",
              left: ["16px", null, "48px"],
              display: "inline-block",
              borderTop: (theme) => `1px solid ${theme?.colors?.accent}`,
              borderLeft: (theme) => `1px solid ${theme?.colors?.accent}`,
              width: "16rem",
              height: "8rem",
              padding: 1,
            },
          }}
        >
          <div
            sx={{
              position: "relative",
              opacity: 0,
              animation: `${fadeIn} 1s forwards 4s`,
              gap: 1,
              width: "100%",
            }}
          >
            <NavBar handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
          </div>
        </header>
        <main
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: ["1fr", null, "2fr 1fr", "3fr 2fr"],
            gridTemplateRows: "1fr",
            gap: "20px",
            py: 0,
            mx: 0,
            overflowY: "scroll",
            maxHeight: "100%",
            scrollbarWidth: "none",
          }}
          id="detail"
        >
          <div
            sx={{
              marginBottom: 3,
              display: "grid",
            }}
          >
            <div
              sx={{
                gap: 4,
                animation: `${fadeIn} 1s forwards 4s`,
                opacity: 0,
              }}
            >
              <HomePage
                sx={{
                  p: ["0 24px", "0 48px"],
                }}
              />
              <ExperiencePage
                sx={{
                  p: ["0 24px", "0 48px"],
                }}
              />
              <ContactPage
                sx={{
                  p: ["0 24px", "0 48px"],
                }}
              />
            </div>
          </div>
        </main>
        <div
          id="bottomBar"
          sx={{
            mx: [2, 4],
            // px: 4,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: ["32px", "64px"],
            "&::before": {
              content: "''",
              position: "absolute",
              bottom: ["16px"],
              right: ["16px", null, "36px"],
              borderBottom: (theme) => `1px solid ${theme?.colors?.accent}`,
              borderRight: (theme) => `1px solid ${theme?.colors?.accent}`,
              width: "16rem",
              height: "8rem",
            },
          }}
        ></div>
      </div>
      <MobileMenuDrawer isOpen={menuOpen} onMenuClose={handleMenuClose} />

      <div
        sx={{
          position: "fixed",
          top: "45vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: `${fadeOut} 1s forwards 3s`,
        }}
      >
        <StyleableSVG svg={<FlowerIcon />} />
        <p
          sx={{
            width: "22ch",
            fontSize: 3,
            animation: `${typing} 2s steps(22) 0s, ${blink} .5s step-end infinite alternate`,
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRight: (theme) => `3px solid ${theme.colors?.text}`,
          }}
        >
          Welcome to my website.
        </p>
      </div>
    </div>
  );
}
