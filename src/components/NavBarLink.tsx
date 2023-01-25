/** @jsxImportSource theme-ui */
import React, { LiHTMLAttributes } from "react";

export interface NavBarLinkProps extends LiHTMLAttributes<HTMLAnchorElement> {
  text: string;
  to: string;
}

const NavBarLink = (props: NavBarLinkProps) => {
  const { text, to, onClick } = props;
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
          py: 2,
          px: 3,
          display: "flex",
          alignItems: "center",
        }}
        href={to}
        data-cy={text}

      >
        <span
          sx={{
            marginRight: 3,
            variant: "text.cursive",
            color: true ? "secondary" : "primary",
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
