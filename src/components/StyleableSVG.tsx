/** @jsxImportSource theme-ui */
import React, { ReactElement } from "react";
import { ThemeUIStyleObject } from "theme-ui";
// import {merge} from "lodash"

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
          justifyContent: "space-between",
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
