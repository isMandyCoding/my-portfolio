/** @jsxImportSource theme-ui */
import React from "react";
import { keyframes } from "@emotion/react";

const typing = keyframes({
  from: {
    width: 0,
  },
});

const blink = keyframes({
  "50%": {
    borderColor: "transparent",
  },
});

export type AnimatedTypographyProps =
  React.HtmlHTMLAttributes<HTMLParagraphElement> & {};

const AnimatedTypography = ({ children }: AnimatedTypographyProps) => {
  const charN = children?.toString().length ?? 0;
  return (
    <p
      sx={{
        display: "inline",
        width: `${charN + 1}ch`,
        fontSize: 3,
        animation: `${typing} ${charN * 0.1}s steps(${
          charN + 1
        }) 0s, ${blink} .5s step-end infinite alternate`,
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: (theme) => `3px solid ${theme.colors?.text}`,
      }}
    >
      {children}
    </p>
  );
};

export default AnimatedTypography;
