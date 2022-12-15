/** @jsxImportSource theme-ui */
import React from "react";

export interface DividerProps {
  isVertical?: boolean;
}

const Divider = ({ isVertical }: DividerProps) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          color: "accent",
          width: "80%",
          maxWidth: "260px",
          minWidth: "100px",
          my: 4,
          borderTop: isVertical
            ? "none"
            : (theme) => `1px solid ${theme.colors?.accent}`,
          borderLeft: isVertical
            ? (theme) => `1px solid ${theme.colors?.accent}`
            : "none",
        }}
      ></div>
    </div>
  );
};

export default Divider;
