/** @jsxImportSource theme-ui */
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ReactComponent as FlowerIcon } from "../svg/daisy.svg";

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
          gridTemplateRows: "12vh 1fr",
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
            gridTemplateColumns: [
              "1fr",
              "1fr",
              "1fr 1fr",
              "3fr 2fr",
              "3fr 2fr",
            ],
            gridTemplateRows: ["1fr", "1fr", "1fr", "1fr", "1fr"],
            gap: "20px",
            padding: 4,
            minWidth: "320px",
          }}
          id="detail"
        >
          <div
            sx={{
              position: "relative",
              height: ["10vh", "10vh", "10vh"],
            }}
          >
            <div
              sx={{
                "&::after": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "inline-block",
                  content: "''",
                  borderTop: (theme) => `1px solid ${theme?.colors?.accent}`,
                  borderLeft: (theme) => `1px solid ${theme?.colors?.accent}`,
                  width: ["80%", "48%", "80%"],
                  height: ["10vh", "10vh", "10vh"],
                },
              }}
            >
              <Outlet />
            </div>
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
                  width: ["80%", "48%", "80%"],
                  height: ["10vh", "10vh", "10vh"],
                },
              }}
            ></div>
          </div>
        </main>
      </div>
    </div>
  );
}
