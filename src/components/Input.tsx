/** @jsxImportSource theme-ui */
import React, { DetailedHTMLProps, useState } from "react";
import { SxProp } from "theme-ui";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  value: any;
  label: string;
}

const Input = ({ labelProps, label, ...props }: InputProps) => {
  const [touched, setTouched] = useState(false);
  const handleBlur = () => {
    if (!touched) {
      setTouched(true);
    }
  };
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "all 150ms",
        my: 2,
        "&:focus-within label": {
          fontSize: 1,
          top: "-1.9rem",
          left: 0,
        },
      }}
    >
      <label
        htmlFor={props.id}
        sx={{
          position: "absolute",
          top: props.value ? "-1.9rem" : 0,
          fontSize: props.value ? 1 : "body",
          transition: "all 150ms",
          py: 2,
          px: 3,
        }}
      >
        {label}
      </label>
      <input
        {...props}
        sx={{
          border: (theme) => `1px solid ${theme.colors?.text}`,
          px: 2,
          py: 3,
          bg: "transparent",
          borderRadius: 3,
          transition: "150ms",
          color: "text",
          "&:focus": {
            outline: "none",
            boxShadow: (theme) => `2px 2px 8px 0px ${theme.colors?.shadow}`,
          },
          "&:invalid": {
            borderColor: touched ? "primary" : "inherit",
          },
        }}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
