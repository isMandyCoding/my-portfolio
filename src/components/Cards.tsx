/** @jsxImportSource theme-ui */
import React from "react";
import Card, { CardProps } from "./Card";

export interface CardsProps {
  cardList: CardProps[];
}

const Cards = ({ cardList }: CardsProps) => {
  return (
    <div
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: 3,
      }}
    >
      {cardList.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
    </div>
  );
};

export default Cards;
