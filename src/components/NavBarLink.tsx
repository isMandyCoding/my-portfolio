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
      <Link
        sx={{
          fontFamily: "body",
          fontSize: 3,
          fontWeight: isActive ? "bold" : "normal",
          color: "text",
          textDecoration: "none",
          py: 2,
          px: 3,
          display: "flex",
          alignItems: "center",
        }}
        to={to}
      >
        <span
          sx={{
            marginRight: 3,
            variant: "text.cursive",
            color: isActive ? "secondary" : "primary",
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
      </Link>
    </li>
  );
};

export default NavBarLink;
