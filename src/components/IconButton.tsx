/** @jsxImportSource theme-ui */
import React, { MouseEventHandler, ReactElement } from "react";
import StyleableSVG from "./StyleableSVG";

export interface IconButtonProps {
  icon: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button
      sx={{
        bg: "transparent",
        border: "none",
        cursor: "pointer",
        mx: 0,
        px: 0,
        "&:hover": {
          svg: {
            path: {
              boxShadow: (theme) => `0 0 6px ${theme?.colors?.text}`,
              fill: {
                color: "textLight",
              },
            },
          },
        },
        "&:focus, &:active": {
          outline: "none",
          svg: {
            filter: (theme) =>
              `drop-shadow(2px 2px 2px ${theme.colors?.shadow})`,
          },
        },
      }}
      onClick={onClick}
    >
      <StyleableSVG isClickable svg={icon} />
    </button>
  );
};

export default IconButton;
