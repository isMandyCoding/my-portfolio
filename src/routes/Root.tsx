/** @jsxImportSource theme-ui */
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <>
      <div id="topbar">
        <NavBar
          sx={{
            display: ["none"],
          }}
        />
      </div>
      <div
        sx={{
          display: "flex",
          margin: 4,
        }}
        id="detail"
      >
        <Outlet />
      </div>
    </>
  );
}
