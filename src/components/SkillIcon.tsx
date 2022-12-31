/** @jsxImportSource theme-ui */
import React, { ReactElement } from "react";
import StyleableSVG from "./StyleableSVG";

export interface SkillIconProps {
  svg: ReactElement;
  skill: string;
}

const SkillIcon = ({ svg, skill }: SkillIconProps) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <StyleableSVG svg={svg} />
      <p
        sx={{
          fontSize: 1,
          my: 0,
          color: "lightText",
        }}
      >
        {skill}
      </p>
    </div>
  );
};

export default SkillIcon;
