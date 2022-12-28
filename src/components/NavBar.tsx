/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";
import { ThemeUIStyleObject } from "theme-ui";
import MainLinks from "./MainLinks";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import { ReactComponent as MenuIcon } from "../svg/square.svg";
import IconButton from "./IconButton";

export interface NavBarProps {
  sx?: ThemeUIStyleObject | undefined;
  handleMenuOpen: MouseEventHandler<HTMLButtonElement>;
  menuOpen?: boolean;
}

const NavBar = ({ sx, handleMenuOpen, menuOpen }: NavBarProps) => {
  return (
    <nav
      sx={{
        mx: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        height: "48px",
        ...sx,
      }}
    >
      <div
        sx={{
          display: ["none", menuOpen ? "none" : "flex", "none", "none"],
          justifyContent: "center",
          alignItems: "center",
          mx: 2,
          px: 1,
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
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
            alignItems: "center",
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
          px: 1,
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
