/** @jsxImportSource theme-ui */
import React, { HTMLAttributes, ReactElement } from "react";
import { SxProp } from "theme-ui";

export type StyleableSVGProp = HTMLAttributes<HTMLDivElement> &
  SxProp & {
    svg?: ReactElement;
    isClickable?: boolean;
  };

const StyleableSVG = ({ svg, isClickable, className }: StyleableSVGProp) => {
  return (
    <div
      sx={{
        svg: {
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          path: {
            fill: "text",
            transition: "150ms",
          },
          rect: {
            fill: "text",
            transition: "150ms",
          },
          "&:hover": {
            cursor: isClickable ? "pointer" : "auto",
            path: {
              fill: isClickable ? "textLight" : "text",
            },
          },
        },
      }}
      className={className}
    >
      {svg}
    </div>
  );
};

export default StyleableSVG;
