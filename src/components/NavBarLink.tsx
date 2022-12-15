/** @jsxImportSource theme-ui */
import React from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavBarLinkProps {
  text: string;
  to: string;
}

const NavBarLink = ({ text, to }: NavBarLinkProps) => {
  let location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li
      sx={{
        px: 3,
        py: 2,
        transition: "background 150ms",
        bg: isActive ? (theme) => `${theme?.colors?.textLight}` : "transparent",
        position: "relative",
        "&:hover": {
          cursor: "pointer",
          bg: (theme) => `${theme?.colors?.textLight}`,
          a: {
            color: "background",
            fontWeight: "bold",
            transition: "color 150ms, font-weight 150ms",
          },
        },
      }}
    >
      <Link
        sx={{
          fontFamily: "body",
          fontSize: 3,
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "background" : "text",
        }}
        to={to}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarLink;
