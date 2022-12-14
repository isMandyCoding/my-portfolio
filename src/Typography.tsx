import React, { ReactNode } from "react";
import "./Typography.module.css";

export interface TypographyProps {
  children?: ReactNode;
}

const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

export default Typography;
