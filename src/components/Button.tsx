/** @jsxImportSource theme-ui */
import React, { DetailedHTMLProps, useState } from "react";
import { SxProp } from "theme-ui";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
