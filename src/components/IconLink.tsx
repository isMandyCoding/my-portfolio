/** @jsxImportSource theme-ui */
import React, { HTMLAttributeAnchorTarget, ReactElement } from "react";
import StyleableSVG from "./StyleableSVG";

export interface IconLinkProps {
  to: string;
  icon: ReactElement;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const IconLink = ({ to, icon, target }: IconLinkProps) => {
  return (
    <a
      sx={{
        fontFamily: "body",
        fontSize: 3,
        color: "text",
      }}
      href={to}
      target={target}
    >
      <StyleableSVG isClickable svg={icon} />
    </a>
  );
};

export default IconLink;