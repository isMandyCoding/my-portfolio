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
      }}
      onClick={onClick}
    >
      <StyleableSVG isClickable svg={icon} />
    </button>
  );
};

export default IconButton;
