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
        position: "relative",
        "&::before": {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          background: "text",
          opacity: isActive ? 0.5 : 0,
          content: "''",
          zIndex: -1,
          transition: "opacity 150ms",
        },
        "&:hover": {
          cursor: "pointer",
          "&::before": {
            opacity: 0.5,
          },
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
