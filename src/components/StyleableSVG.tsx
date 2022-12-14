/** @jsxImportSource theme-ui */
import React, { ReactElement } from "react";
import { ThemeUIStyleObject } from "theme-ui";

export interface StyleableSVGProps {
  svg: ReactElement;
  sx?: ThemeUIStyleObject | undefined;
}

const StyleableSVG = ({ svg, sx }: StyleableSVGProps) => {
  return (
    <div
      sx={{
        svg: {
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "space-between",
          mx: 2,
          path: {
            fill: "text",
          },
        },
      }}
    >
      {svg}
    </div>
  );
};

export default StyleableSVG;
