/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import MainLinks from "./MainLinks";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import { ReactComponent as MenuIcon } from "../svg/menu.svg";
import StyleableSVG from "./StyleableSVG";

export interface NavBarProps {
  sx?: ThemeUIStyleObject | undefined;
}

const NavBar = ({ sx }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  return (
    <nav
      sx={{
        marginTop: 4,
        mx: 2,
        display: "flex",
        flexDirection: ["column", "row", "row"],
        justifyContent: ["end", "space-between", "space-between"],
        alignContent: "center",
        ...sx,
      }}
    >
      <div
        sx={{
          display: ["none", "block", "block"],
        }}
      >
        <MainLinks />
      </div>

      <div
        sx={{
          display: ["block", "block", "block"],
        }}
      >
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "flex",
            flexDirection: ["column", "row", "row"],
            justifyContent: "space-between",
          }}
        >
          <li>
            <ColorModeToggle />
          </li>
          <li>
            <ContactLinks />
          </li>
        </ul>
      </div>
      <div
        sx={{
          display: ["block", "none", "none"],
        }}
      >
        <button
          sx={{
            bg: "transparent",
            border: "none",
            cursor: "pointer",
            "&:hover": {
              color: "textLight",
              boxShadow: (theme) => `0 0 6px ${theme?.colors?.text}`,
            },
          }}
          onClick={handleMenuOpen}
        >
          <StyleableSVG svg={<MenuIcon />} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
