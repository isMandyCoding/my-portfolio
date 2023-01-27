/** @jsxImportSource theme-ui */
import React, { ButtonHTMLAttributes } from "react";
import { ThemeUICSSObject } from "theme-ui";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {};

const Button = ({ children, href, ...props }: ButtonProps) => {
  const style: ThemeUICSSObject = {
    py: 2,
    px: 3,
    border: (theme) => `2px solid ${theme.colors?.secondary}`,
    color: "secondary",
    fontSize: 2,
    textTransform: "capitalize",
    borderRadius: "3px",
    textDecoration: "none",
    bg: "transparent",
    transition: "all 150ms",
    "&:hover": {
      cursor: "pointer",
      border: (theme) => `2px solid ${theme.colors?.accent}`,
      color: "accent",
    },
    "&:focus": {
      outline: "none",
      boxShadow: (theme) => `2px 2px 8px 0px ${theme.colors?.shadow}`,
    },
  };
  return (
    <div>
      {href ? (
        <a href={href} sx={style} {...props}>
          {children}{" "}
        </a>
      ) : (
        <button sx={style} {...props}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
