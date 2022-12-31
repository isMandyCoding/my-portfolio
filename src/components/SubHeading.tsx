/** @jsxImportSource theme-ui */
import React from "react";

export interface SubHeadingProps {
  subHeadingText: string;
}

const SubHeading = ({ subHeadingText }: SubHeadingProps) => {
  return <h2 sx={{ font: "body", opacity: 0.75 }}>{subHeadingText}</h2>;
};

export default SubHeading;
