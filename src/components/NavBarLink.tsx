/** @jsxImportSource theme-ui */
import React, { LiHTMLAttributes, useState, useEffect } from "react";
import { useHashFragment } from "../common/hooks/useHashFragment";

export interface NavBarLinkProps extends LiHTMLAttributes<HTMLAnchorElement> {
  text: string;
  to: string;
}

const NavBarLink = (props: NavBarLinkProps) => {
  const { text, to, onClick } = props;

  const [motionPref, setMotionPref] = useState(false);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)");
    if (prefersReducedMotion.matches) {
      setMotionPref(true);
    }
  }, []);

  const isScrollSmooth = !motionPref;
  const currentHash = useHashFragment(80, isScrollSmooth);

  return (
    <li
      sx={{
        transition: "all 150ms",
        bg: "transparent",
        "&:hover": {
          cursor: "pointer",
          bg: (theme) => `${theme?.colors?.textLight}`,
          a: {
            color: "background",
            transition: "color 150ms",
          },
        },
      }}
    >
      <a
        onClick={onClick}
        sx={{
          fontFamily: "body",
          fontSize: 3,
          fontWeight: true ? "bold" : "normal",
          color: "text",
          textDecoration: "none",
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
        href={to}
      >
        <span
          sx={{
            marginRight: 3,
            variant: "text.cursive",
            color: currentHash === to ? "secondary" : "primary",
          }}
        >
          {"</>"}
        </span>
        <span
          sx={{
            textDecoration: "underline",
          }}
        >
          {text}
        </span>
      </a>
    </li>
  );
};

export default NavBarLink;
