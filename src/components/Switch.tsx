/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";
import { useThemeUI } from "theme-ui";

export interface SwitchProps {
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

const Switch = ({ checked, onClick }: SwitchProps) => {
  const { theme } = useThemeUI();
  return (
    <label
      sx={{
        position: "relative",
        display: "inline-block",
        width: "60px",
        height: "32px",
      }}
    >
      <input
        type="checkbox"
        aria-label="Enable dark mode?"
        sx={{
          opacity: 0,
          width: 0,
          height: 0,
          "&:checked + span": {
            bg: "textLight",
            "&::before": {
              transform: "translateX(22px)",
            },
          },
          "&:focus + span": {
            boxShadow: "0 0 1px text",
          },
        }}
        checked={checked}
        onClick={onClick}
      />
      <span
        sx={{
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "",
          transition: "300ms",
          borderStyle: "solid",
          borderColor: "text",
          borderWidth: "1px",
          borderRadius: "34px",
          "&::before": {
            position: "absolute",
            content: "''",
            height: "26px",
            width: "26px",
            left: "4px",
            bottom: "2px",
            bg: "text",
            transition: "300ms",
            borderRadius: "50%",
          },
          "&:hover": {
            "&::before": {
              boxShadow: (theme) => `0 0 6px ${theme?.colors?.text}`,
            },
          },
        }}
      ></span>
    </label>
  );
};

export default Switch;
