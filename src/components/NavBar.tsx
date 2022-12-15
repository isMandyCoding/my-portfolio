/** @jsxImportSource theme-ui */
import React, { MouseEventHandler, useState } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import MainLinks from "./MainLinks";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import { ReactComponent as MenuIcon } from "../svg/menu.svg";
import IconButton from "./IconButton";
import MobileMenuDrawer from "./MobileMenuDrawer";

export interface NavBarProps {
  sx?: ThemeUIStyleObject | undefined;
}

const NavBar = ({ sx }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = () => {
    setMenuOpen(true);
  };

  const handleMenuClose: MouseEventHandler<HTMLButtonElement> = () => {
    setMenuOpen(false);
  };
  return (
    <nav
      sx={{
        marginTop: 4,
        mx: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        minHeight: "48px",
        ...sx,
      }}
    >
      <div
        sx={{
          display: ["none", menuOpen ? "none" : "flex", "none", "none"],
          justifyContent: "center",
          alignItems: "center",
          mx: 2,
          px: 0,
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
      <MobileMenuDrawer isOpen={menuOpen} onMenuClose={handleMenuClose} />
      <div
        sx={{
          display: ["none", "none", "block", "block"],
        }}
      >
        <MainLinks />
      </div>

      <div
        sx={{
          display: ["none", "block", "block", "block"],
        }}
      >
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "flex",
            flexDirection: ["column", "row", "row", "row"],
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
          display: [menuOpen ? "none" : "flex", "none", "none", "none"],
          justifyContent: "center",
          alignItems: "center",
          mx: 2,
          px: 4,
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
