/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import IconButton from "./IconButton";
import MainLinks from "./MainLinks";
import { ReactComponent as CloseIcon } from "../svg/cancel.svg";
import Divider from "./Divider";

export interface MobileMenuDrawerProps {
  isOpen: boolean;
  onMenuClose: MouseEventHandler<HTMLButtonElement>;
}

const MobileMenuDrawer = ({ isOpen, onMenuClose }: MobileMenuDrawerProps) => {
  return (
    <div
      sx={{
        display: ["block", "none", "none"],
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
        width: "80%",
        height: "100%",
        overflow: "hidden",
        minWidth: "260px",
      }}
    >
      <div>
        <IconButton icon={<CloseIcon />} onClick={onMenuClose} />
      </div>
      <div>
        <MainLinks />
      </div>
      <Divider />
      <div>
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
