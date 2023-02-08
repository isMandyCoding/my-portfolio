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
        flexDirection: ["column", "column", "row"],
        gap: 2,
        m: 0,
        listStyle: "none",
        overflow: "hidden",
        paddingLeft: 0,
      }}
    >
      <NavBarLink
        tabIndex={menuOpen ? 0 : -1}
        onClick={handleLinkClick}
        to="#about"
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
        tabIndex={menuOpen ? 2 : -1}
        onClick={handleLinkClick}
        to="#projects"
        text="Projects"
      />
    </ul>
  );
};

export default MainLinks;
