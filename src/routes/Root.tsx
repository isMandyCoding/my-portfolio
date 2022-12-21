/** @jsxImportSource theme-ui */
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ReactComponent as FlowerIcon } from "../svg/daisy.svg";
import { Box } from "theme-ui";
import { keyframes } from "@emotion/react";

const twirl = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(180)" },
});

export default function Root() {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateRows: "78px 1fr",
          gap: 1,
          minHeight: "100vh",
          maxWidth: "1080px",
        }}
      >
        <div id="topbar">
          <NavBar />
        </div>
        <main
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr", "1fr 1fr", "3fr 2fr"],
            gridTemplateRows: "1fr",
            gap: "20px",
            padding: 4,
            mx: 0,
            minWidth: "320px",
          }}
          id="detail"
        >
          <div
            sx={{
              position: "relative",
              "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                display: "inline-block",
                content: "''",
                borderTop: (theme) => `1px solid ${theme?.colors?.accent}`,
                borderLeft: (theme) => `1px solid ${theme?.colors?.accent}`,
                width: "16rem",
                height: "8rem",
              },
            }}
          >
            <Outlet />
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <div
              sx={{
                display: ["flex", "flex", "block"],
                justifyContent: "center",
                my: 4,
                position: [null, null, null, "absolute"],
                bottom: 4,
                left: "50%",

                // animation: `${twirl} 1s backwards`,
                svg: {
                  marginBottom: 2,
                  width: "112px",
                  height: "112px",
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
              <FlowerIcon />
            </div>
            <div
              id="bottomBorder"
              sx={{
                position: "relative",
                "&::after": {
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  display: "inline-block",
                  content: "''",
                  borderBottom: (theme) => `1px solid ${theme?.colors?.accent}`,
                  borderRight: (theme) => `1px solid ${theme?.colors?.accent}`,
                  width: "16rem",
                  height: "8rem",
                },
              }}
            ></div>
          </div>
        </main>
      </div>
    </div>
  );
}
