/** @jsxImportSource theme-ui */
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      sx={{
        py: 2,
        px: 3,
        border: (theme) => `2px solid ${theme.colors?.secondary}`,
        color: "secondary",
        fontSize: 2,
        textTransform: "capitalize",
        borderRadius: "3px",
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
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
