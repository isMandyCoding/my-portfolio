/** @jsxImportSource theme-ui */
import React from "react";
import NavBarLink from "./NavBarLink";

const MainLinks = () => {
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: ["column", "row", "row"],
        m: 0,
        px: 3,
        listStyle: "none",
      }}
    >
      <NavBarLink to="/" text="Home" />
      <NavBarLink to="/experience" text="Experience" />
      <NavBarLink to="/contact" text="Contact" />
    </ul>
  );
};

export default MainLinks;
