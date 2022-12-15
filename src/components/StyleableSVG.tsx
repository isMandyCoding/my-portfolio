/** @jsxImportSource theme-ui */
import React, { ReactElement } from "react";

export interface StyleableSVGProps {
  svg: ReactElement;
  isClickable?: boolean;
}

const StyleableSVG = ({ svg, isClickable }: StyleableSVGProps) => {
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
          "&:hover": {
            path: {
              fill: isClickable ? "textLight" : "text",
            },
          },
        },
      }}
    >
      {svg}
    </div>
  );
};

export default StyleableSVG;
