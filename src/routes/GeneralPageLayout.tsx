/** @jsxImportSource theme-ui */
import NavBar from "../components/NavBar";
import { HTMLAttributes, MouseEventHandler, useState } from "react";
import MobileMenuDrawer from "../components/MobileMenuDrawer";
import HomePage from "./HomePage";
import ExperiencePage from "./ExperiencePage";
import ContactPage from "./ContactPage";
import { keyframes } from "@emotion/react";
import InitialLoadMessage from "../components/InitialLoadMessage";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
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
      <InitialLoadMessage />
      <div
        sx={{
          display: "grid",
          gridTemplateRows: ["64px 1fr 32px", "64px 1fr 64px"],
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
            flexDirection: "row",
            alignItems: "center",
            "&::after": {
              content: "''",
              position: "absolute",
              top: "64px",
              left: ["8px", "16px", "48px"],
              display: "inline-block",
              borderTop: (theme) => `1px solid ${theme?.colors?.accent}`,
              borderLeft: (theme) => `1px solid ${theme?.colors?.accent}`,
              width: "16rem",
              height: [0, "8rem"],
              padding: [0, 1],
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
                display: "flex",
                flexDirection: "column",
                gap: 5,
                animation: `${fadeIn} 1s forwards 4s`,
                opacity: 0,
                marginBottom: 5,
              }}
            >
              <HomePage
                sx={{
                  p: ["0 32px", "0 64px 0 48px", "0 72px"],
                }}
              />
              <ExperiencePage
                sx={{
                  p: ["0 32px", "0 64px 0 48px", "0 72px"],
                }}
              />
              <ContactPage
                sx={{
                  p: ["0 32px", "0 64px 0 48px", "0 72px"],
                }}
              />
            </div>
          </div>
        </main>
        <div
          id="bottomBar"
          sx={{
            mx: [2, 4],
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: ["32px", "64px"],
            "&::before": {
              content: "''",
              position: "absolute",
              bottom: ["16px", null, "36px"],
              right: ["0", "16px", "48px"],
              borderBottom: (theme) => `1px solid ${theme?.colors?.accent}`,
              borderRight: (theme) => `1px solid ${theme?.colors?.accent}`,
              width: "16rem",
              height: [0, "8rem"],
            },
          }}
        ></div>
      </div>
      <MobileMenuDrawer isOpen={menuOpen} onMenuClose={handleMenuClose} />
    </div>
  );
}
