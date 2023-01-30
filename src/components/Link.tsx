/** @jsxImportSource theme-ui */
import React, { MouseEventHandler, RefObject, useRef } from "react";
import { ThemeUICSSObject } from "theme-ui";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: React.RefObject<HTMLAnchorElement>;
    onAnchorClick?: (
      ref: RefObject<HTMLAnchorElement> | undefined,
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void;
  };

const Link = ({
  children,
  className,
  href,
  ref,
  onAnchorClick,
  ...props
}: LinkProps) => {
  const style: ThemeUICSSObject = {
    display: "inline-block",
    transition: "all 450ms",
    textDecoration: "none",
    color: "secondary",
    fontFamily: "body",
    fontSize: "inherit",
    lineHeight: "body",
    border: "none",
    padding: 0,
    background: "none",
    "&:hover": {
      cursor: "pointer",
    },
    "&::after": {
      content: "''",
      display: "block",
      width: "0px",
      height: "3px",
      position: "relative",
      bottom: "0.37em",
      backgroundColor: "secondary",
      transition: "all 450ms",
      opacity: 0.5,
    },
    "&:hover::after, &:focus::after, &:active::after": {
      width: "100%",
    },
  };

  const anchorRef = useRef<HTMLAnchorElement>(null);
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onAnchorClick && onAnchorClick(anchorRef, event);
  };

  return (
    <span sx={{ display: "inline-block" }}>
      {href ? (
        <a
          ref={anchorRef}
          onClick={handleClick}
          href={href}
          sx={style}
          {...props}
        >
          {children}{" "}
        </a>
      ) : (
        <button sx={style} {...props}>
          {children}
        </button>
      )}
    </span>
  );
};

export default Link;
