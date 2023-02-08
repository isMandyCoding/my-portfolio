/** @jsxImportSource theme-ui */
import React, { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: any;
  touched?: boolean;
}

const TextArea = ({ label, touched, ...props }: TextAreaProps) => {
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
      <textarea
        {...props}
        sx={{
          border: (theme) => `1px solid ${theme.colors?.text}`,
          p: 2,
          bg: "transparent",
          borderRadius: 3,
          transition: "150ms",
          color: "text",
          resize: "none",
          fontSize: 2,
          "&:focus": {
            outline: "none",
            boxShadow: (theme) => `2px 2px 8px 0px ${theme.colors?.shadow}`,
          },
          "&:invalid": {
            borderColor: touched ? "primary" : "inherit",
          },
        }}
      ></textarea>
    </div>
  );
};

export default TextArea;
