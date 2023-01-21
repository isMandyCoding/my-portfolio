/** @jsxImportSource theme-ui */
import React, { HTMLAttributes, MouseEventHandler } from "react";
import { SxProp } from "theme-ui";
import MainLinks from "./MainLinks";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import { ReactComponent as MenuIcon } from "../svg/square.svg";
import IconButton from "./IconButton";

export type NavBarProps = HTMLAttributes<HTMLElement> &
  SxProp & {
    handleMenuOpen: MouseEventHandler<HTMLButtonElement>;
    menuOpen?: boolean;
  };

const NavBar = ({ handleMenuOpen, menuOpen, className }: NavBarProps) => {
  return (
    <nav
      className={className}
      sx={{
        mx: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        height: "48px",
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
        <MainLinks menuOpen={menuOpen} />
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
