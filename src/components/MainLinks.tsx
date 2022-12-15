/** @jsxImportSource theme-ui */
import React from "react";
import NavBarLink from "./NavBarLink";

const MainLinks = () => {
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: ["column", "column", "row", "row"],
        alignItems: "start",
        m: 0,
        px: 3,
        listStyle: "none",
        overflow: "hidden",
      }}
    >
      <NavBarLink to="/" text="Home" />
      <NavBarLink to="/experience" text="Experience" />
      <NavBarLink to="/contact" text="Contact" />
    </ul>
  );
};

export default MainLinks;
