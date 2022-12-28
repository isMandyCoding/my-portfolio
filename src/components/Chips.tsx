/** @jsxImportSource theme-ui */
import React from "react";
import Chip from "./Chip";

export interface ChipsProps {
  chipList: string[];
}

const Chips = ({ chipList }: ChipsProps) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {chipList.map((item, index) => {
        return <Chip key={index} text={item} />;
      })}
    </div>
  );
};

export default Chips;
