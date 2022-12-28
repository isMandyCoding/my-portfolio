/** @jsxImportSource theme-ui */
import NavBar from "../components/NavBar";
import { ReactComponent as FlowerIcon } from "../svg/daisy.svg";
import { keyframes } from "@emotion/react";
import { HTMLAttributes, MouseEventHandler, useState } from "react";
import MobileMenuDrawer from "../components/MobileMenuDrawer";

const fadeIn = keyframes({
  from: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
  },
  to: {
    opacity: 1,
    height: "100%",
    overflow: "visible",
  },
});

const twirl = keyframes({
  from: {
    transform: "rotate(0deg)",
    opacity: 0,
    position: "absolute",
    bottom: "38vh",
    width: "112px",
    height: "112px",
  },
  to: {
    transform: "rotate(360deg)",
    opacity: 1,
    position: "absolute",
    bottom: "38vh",
    width: "112px",
    height: "112px",
  },
});

const lowerFlower = keyframes`
from {
  position: absolute;
  bottom: 38vh;
  transform: rotate(0deg);
  width: 112px;
  height: 112px;
}
30% {
  position: absolute;
  bottom: 41vh;
  transform: rotate(90deg);
  width: 112px;
  height: 112px;
}
to {
  position: absolute;
  bottom: 2vh;
  transform: rotate(0deg);
  width: 50px;
  height: 50px;
}
`;

const fadeInTopBorder = keyframes({
  from: {
    position: "absolute",
    marginTop: "20vh",
    marginLeft: "25%",
    width: "6rem",
    height: "4rem",
    opacity: 0,
  },
  to: {
    position: "absolute",
    marginTop: "20vh",
    marginLeft: "25%",
    width: "6rem",
    height: "4rem",
    opacity: 1,
  },
});

const expandTopLeftBorder = keyframes`
from {
  position: absolute;
  margin-top: 20vh;
  margin-left: 25%;
  width: 6rem;
  height: 4rem;
}
30% {
  position: absolute;
  margin-top: 25vh;
  margin-left: 25%;
  width: 6rem;
  height: 4rem;

}
to {
  position: absolute;
  top: 80px
  margin-left: 32px;
  width: 16rem;
  height: 8rem;
}`;

const fadeInBottomBorder = keyframes({
  from: {
    marginBottom: "55vh",
    marginRight: "25%",
    width: "6rem",
    height: "4rem",
    opacity: 0,
  },
  to: {
    marginBottom: "55vh",
    marginRight: "25%",
    width: "6rem",
    height: "4rem",
    opacity: 1,
  },
});

const expandBottomRightBorder = keyframes`
from {
  margin-bottom: 55vh;
  margin-right: 25%;
  width: 6rem;
  height: 4rem;
}
30% {
  margin-bottom: 60vh;
  margin-right: 25%;
  width: 6rem;
  height: 4rem;
}
to {
  margin-bottom: 32px;
  margin-right: 8px;
  width: 16rem;
  height: 8rem;
}`;

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
  const handleMenuClose: MouseEventHandler<HTMLButtonElement> = () => {
    setMenuOpen(false);
  };
  return (
    <div
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        scrollbarWidth: "none",
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
          gridTemplateRows: "80px 1fr 15vh",
          gap: 1,
          height: "100vh",
          maxWidth: "1080px",
          position: "relative",
        }}
      >
        <header
          id="topbar"
          sx={{
            position: "sticky",
          }}
        >
          <div
            sx={{
              position: "relative",
              my: 3,
              opacity: 0,
              animation: `${fadeIn} 1s forwards`,
              animationDelay: "2s",
            }}
          >
            <NavBar handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
          </div>
          <div
            sx={{
              animationName: `${fadeInTopBorder}, ${expandTopLeftBorder}`,
              animationDuration: `1s, 1s`,
              animationDirection: `forwards, forwards`,
              animationDelay: `0s, 1s`,
              "@media (prefers-reduced-motion)": {
                animation: `${fadeIn} 1s forwards`,
              },
              position: "absolute",
              top: "80px",
              left: 0,
              display: "inline-block",
              content: "''",
              borderTop: (theme) => `1px solid ${theme?.colors?.accent}`,
              borderLeft: (theme) => `1px solid ${theme?.colors?.accent}`,
              width: "16rem",
              height: "8rem",
              padding: 1,
              mx: 4,
            }}
          ></div>
        </header>
        <main
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "3fr 2fr"],
            gridTemplateRows: "1fr",
            gap: "20px",
            px: 4,
            py: 0,
            mx: 0,
            marginRight: [5, null, null, null, null],
            minWidth: "320px",
            maskImage: (theme) =>
              `linear-gradient(to bottom, ${theme.colors?.background} 80%, transparent 100%)`,
            overflowY: "scroll",
            maxHeight: "100%",
            scrollbarWidth: "none",
          }}
          id="detail"
        >
          <div
            sx={{
              opacity: 0,
              animation: `${fadeIn} 1s forwards`,
              animationDelay: "2s",
              marginBottom: 3,
            }}
          >
            {children}
          </div>
        </main>
        <div
          id="bottomBar"
          sx={{
            mx: 4,
            marginBottom: 5,
            px: 4,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "320px",
          }}
        >
          <div
            sx={{
              display: ["flex", "flex", "block"],
              justifyContent: "center",
              width: "50px",
              height: "50px",
              animationName: `${twirl}, ${lowerFlower}`,
              animationDuration: `1s, 1s`,
              animationDirection: `forwards, forwards`,
              animationDelay: `0s, 1s`,
              "@media (prefers-reduced-motion)": {
                animation: `${fadeIn} 1s forwards`,
              },
              svg: {
                marginBottom: 2,

                display: "flex",
                justifyContent: "center",
                flexShrink: 1,
                path: {
                  fill: "primary",
                  transition: "150ms",
                },
                "&:hover": {
                  path: {
                    fill: "primary",
                  },
                },
              },
            }}
          >
            <FlowerIcon
              sx={{
                height: "auto",
                width: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div
            id="bottomBorder"
            sx={{
              position: "absolute",
              marginBottom: "32px",
              right: 0,
              mx: 2,
              borderBottom: (theme) => `1px solid ${theme?.colors?.accent}`,
              borderRight: (theme) => `1px solid ${theme?.colors?.accent}`,
              animationName: `${fadeInBottomBorder}, ${expandBottomRightBorder}`,
              animationDuration: `1s, 1s`,
              animationDirection: `forwards, forwards`,
              animationDelay: `0s, 1s`,
              "@media (prefers-reduced-motion)": {
                animation: `${fadeIn} 1s forwards`,
              },
              width: "16rem",
              height: "8rem",
            }}
          ></div>
        </div>
      </div>
      <MobileMenuDrawer isOpen={menuOpen} onMenuClose={handleMenuClose} />
    </div>
  );
}
