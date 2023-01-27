/** @jsxImportSource theme-ui */
import React, { TouchEventHandler, useState } from "react";
import ColorModeToggle from "./ColorModeToggle";
import ContactLinks from "./ContactLinks";
import IconButton from "./IconButton";
import MainLinks from "./MainLinks";
import { ReactComponent as CloseIcon } from "../svg/close.svg";
import Divider from "./Divider";
import Link from "./Link";

export interface MobileMenuDrawerProps {
  isOpen: boolean;
  onMenuClose: () => void;
}

const MobileMenuDrawer = ({ isOpen, onMenuClose }: MobileMenuDrawerProps) => {
  const [touchStart, setTouchStart] = useState<null | number>(null);
  const [touchEnd, setTouchEnd] = useState<null | number>(null);

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    if (!touchStart || !touchEnd) return;
    setTouchEnd(e.changedTouches[0].clientX);
    const minSwipeDistance = 50;

    if (touchStart - touchEnd > minSwipeDistance) {
      onMenuClose();
    }
  };

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null);
    setTouchStart(e.changedTouches[0].clientX);
  };

  const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchCancel: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      sx={{
        display: ["block", "block", "none", "none"],
        transition: "150ms",
        position: "absolute",
        right: 0,
        top: 0,
        bg: "background",
        p: 4,
        padding: "16px 16px 32px 32px",
        boxShadow: isOpen
          ? (theme) => `0px 0 16px 0px ${theme?.colors?.textLight}`
          : "none",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        width: ["100%", "80%", null, null],
        height: "100vh",
        overflow: "hidden",
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchCancel={handleTouchCancel}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <IconButton icon={<CloseIcon />} onClick={onMenuClose} />
      </div>
      <div>
        <MainLinks menuOpen={isOpen} onMenuClose={onMenuClose} />
      </div>
      <div
        sx={{
          display: ["block", "block", "none", "none"],
        }}
      >
        <Divider />
        <div
          sx={{
            display: ["none", "flex", "none"],
            px: 1,
          }}
        >
          <Link
            href="./MandyCodesResume.pdf"
            title="Download Resume"
            download={true}
          >
            Download My Resume
          </Link>
        </div>
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
            gap: 4,
          }}
        >
          <li>
            <Link
              href="./MandyCodesResume.pdf"
              title="Download Resume"
              download={true}
            >
              Download My Resume
            </Link>
          </li>
          <li>
            <ColorModeToggle />
          </li>
          <li>
            <ContactLinks />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
