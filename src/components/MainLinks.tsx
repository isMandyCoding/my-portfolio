/** @jsxImportSource theme-ui */
import React from "react";
import NavBarLink from "./NavBarLink";

export interface MainLinksProps {
  onMenuClose?: () => void;
}

const MainLinks = ({ onMenuClose }: MainLinksProps) => {
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
      <NavBarLink onClick={handleLinkClick} to="/" text="About" />
      <NavBarLink
        onClick={handleLinkClick}
        to="/experience"
        text="Experience"
      />
      <NavBarLink onClick={handleLinkClick} to="/contact" text="Contact" />
    </ul>
  );
};

export default MainLinks;
