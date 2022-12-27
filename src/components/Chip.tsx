/** @jsxImportSource theme-ui */
import React from "react";
import { SxProp } from "theme-ui";

export interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps) => {
  return (
    <span
      sx={{
        fontSize: 1,
        bg: "hover",
        py: 1,
        px: 2,
      }}
    >
      {text}
    </span>
  );
};

export default Chip;
