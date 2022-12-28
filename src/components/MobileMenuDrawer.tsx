/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import IconButton from "./IconButton";
import MainLinks from "./MainLinks";
import { ReactComponent as CloseIcon } from "../svg/close.svg";
import Divider from "./Divider";

export interface MobileMenuDrawerProps {
  isOpen: boolean;
  onMenuClose: MouseEventHandler<HTMLButtonElement>;
}

const MobileMenuDrawer = ({ isOpen, onMenuClose }: MobileMenuDrawerProps) => {
  return (
    <div
      sx={{
        display: ["block", "block", "none", "none"],
        transition: "150ms",
        position: "absolute",
        left: 0,
        top: 0,
        bg: "background",
        p: 4,
        boxShadow: isOpen
          ? (theme) => `0px 0 16px 0px ${theme?.colors?.textLight}`
          : "none",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        width: ["100%", "80%", null, null],
        height: "100vh",
        overflow: "hidden",
        minWidth: "260px",
      }}
    >
      <div
        sx={{
          my: 2,
          px: 2,
        }}
      >
        <IconButton icon={<CloseIcon />} onClick={onMenuClose} />
      </div>
      <div>
        <MainLinks />
      </div>
      <div
        sx={{
          display: ["block", "none", "none", "none"],
        }}
      >
        <Divider />
      </div>
      <div>
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            py: 0,
            px: 1,
            display: ["flex", "none", "none", "none"],
            flexDirection: ["column", "column", "row", "row"],
            justifyContent: "space-between",
          }}
        >
          <li
            sx={{
              my: 2,
            }}
          >
            <ColorModeToggle />
          </li>
          <li
            sx={{
              my: 2,
            }}
          >
            <ContactLinks />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
