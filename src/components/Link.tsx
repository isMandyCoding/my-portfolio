/** @jsxImportSource theme-ui */
import React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <a
      sx={{
        display: "inline-block",
        transition: "all 450ms cubic-bezier(0.645, 0.045, )",
        textDecoration: "none",
        color: "secondary",
        fontWeight: "bold",
        "&::after": {
          content: "''",
          display: "block",
          width: "0px",
          height: "2px",
          position: "relative",
          bottom: "0.37em",
          backgroundColor: "secondary",
          transition: "all 450ms",
          opacity: 0.5,
        },
        "&:hover::after, &:focus::after, &:active::after": {
          width: "100%",
        },
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
