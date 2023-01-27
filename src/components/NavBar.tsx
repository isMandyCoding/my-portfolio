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
        display: "flex",
        flexDirection: "row",
        // gap: 2,
        justifyContent: "space-between",
        // alignContent: "center",
        alignItems: "center",
        // height: "48px",
        px: 3,
      }}
    >
      <div
        sx={{
          display: ["none", menuOpen ? "none" : "flex", "none"],
          justifyContent: "center",
          alignItems: "center",
          mx: 0,
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
      <div
        sx={{
          display: ["none", "none", "flex"],
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
          display: [menuOpen ? "none" : "flex", "none"],
          justifyContent: "center",
          alignItems: "center",
          px: 1,
        }}
      >
        <IconButton icon={<MenuIcon />} onClick={handleMenuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
