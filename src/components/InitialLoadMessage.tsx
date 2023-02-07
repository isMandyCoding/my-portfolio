/** @jsxImportSource theme-ui */
import React, { useEffect, useRef, useState } from "react";
import { keyframes } from "@emotion/react";
import AnimatedTypography from "./AnimatedTypography";
import StyleableSVG from "./StyleableSVG";
import { ReactComponent as MyIcon } from "../svg/Logo.svg";

const fadeOut = keyframes({
  from: {
    opacity: 1,
    display: "flex",
  },
  to: {
    opacity: 0,
  },
});

export type InitialLoadMessageProps =
  React.HtmlHTMLAttributes<HTMLParagraphElement> & {};

const InitialLoadMessage = () => {
  const [timeOut, setTimeOut] = useState(false);
  let disappearTimeout = useRef({});

  useEffect(() => {
    disappearTimeout.current = setTimeout(() => {
      setTimeOut(true);
    }, 5000);

    return () => {
      if (typeof disappearTimeout.current === "number") {
        clearTimeout(disappearTimeout.current);
      }
    };
  }, []);

  return timeOut ? null : (
    <div
      sx={{
        position: "fixed",
        top: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: `${fadeOut} 1s forwards 3s`,
      }}
    >
      <StyleableSVG
        svg={<MyIcon />}
        sx={{
          svg: {
            width: "120px",
            height: "120px",
          },
        }}
      />
      <AnimatedTypography>Welcome to my website.</AnimatedTypography>
    </div>
  );
};

export default InitialLoadMessage;
