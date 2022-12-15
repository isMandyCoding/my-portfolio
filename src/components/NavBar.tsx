/** @jsxImportSource theme-ui */
import React, { MouseEventHandler, useState } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import MainLinks from "./MainLinks";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import { ReactComponent as MenuIcon } from "../svg/menu.svg";
import StyleableSVG from "./StyleableSVG";
import IconButton from "./IconButton";
import MobileMenuDrawer from "./MobileMenuDrawer";
import Divider from "./Divider";

export interface NavBarProps {
  sx?: ThemeUIStyleObject | undefined;
}

const NavBar = ({ sx }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("open Menu");
    setMenuOpen(true);
  };

  const handleMenuClose: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("close Menu");
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
        ...sx,
      }}
    >
      <MobileMenuDrawer isOpen={menuOpen} onMenuClose={handleMenuClose} />
      <div
        sx={{
          display: ["none", "block", "block"],
        }}
      >
        <MainLinks />
      </div>

      <div
        sx={{
          display: ["none", "block", "block"],
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
          display: [menuOpen ? "none" : "block", "none", "none"],
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
