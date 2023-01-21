/** @jsxImportSource theme-ui */
import React from "react";
import NavBarLink from "./NavBarLink";

export interface MainLinksProps {
  onMenuClose?: () => void;
  menuOpen?: boolean;
}

const MainLinks = ({ onMenuClose, menuOpen }: MainLinksProps) => {
  const handleLinkClick = () => {
    if (onMenuClose) {
      onMenuClose();
    }
  };
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
      <NavBarLink
        tabIndex={menuOpen ? 0 : -1}
        onClick={handleLinkClick}
        to="#home"
        text="About"
      />
      <NavBarLink
        tabIndex={menuOpen ? 1 : -1}
        onClick={handleLinkClick}
        to="#experience"
        text="Experience"
      />
      <NavBarLink
        tabIndex={menuOpen ? 2 : -1}
        onClick={handleLinkClick}
        to="#contact"
        text="Contact"
      />
      <NavBarLink
        tabIndex={menuOpen ? 3 : -1}
        onClick={handleLinkClick}
        to="#projects"
        text="Projects"
      />
    </ul>
  );
};

export default MainLinks;
