/** @jsxImportSource theme-ui */
import React, { ReactElement } from "react";
import { SxProp } from "theme-ui";
import StyleableSVG, { StyleableSVGProp } from "./StyleableSVG";

export type SkillIconProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  SxProp & {
    svg?: ReactElement;
    skill: string;
    styleableSvgProps?: StyleableSVGProp;
  };

const SkillIcon = ({
  svg,
  skill,
  className,
  styleableSvgProps,
}: SkillIconProps) => {
  return (
    <div
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <StyleableSVG
        sx={{
          svg: {
            width: "40px",
            height: "40px",
          },
        }}
        {...styleableSvgProps}
        svg={svg}
      />
      <p
        sx={{
          fontSize: 1,
          my: 0,
          color: "lightText",
          textWrap: "wrap",
          textAlign: "center",
          maxWidth: "88px",
        }}
      >
        {skill}
      </p>
    </div>
  );
};

export default SkillIcon;
