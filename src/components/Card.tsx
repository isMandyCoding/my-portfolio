/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../svg/down-arrow.svg";
import IconButton from "./IconButton";

export interface CardProps {
  cardTitle: string;
  cardSubtitle: string;
  cardContent: string;
  hiddenContent?: string;
}

const Card = ({
  cardTitle,
  cardSubtitle,
  cardContent,
  hiddenContent,
}: CardProps) => {
  const [revealHiddenContent, setRevealHiddenContent] = useState(false);

  const handleExpandContentClick = () => {
    setRevealHiddenContent(!revealHiddenContent);
  };

  const ExpandContentButton = () => {
    return (
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          transition: "all 150ms",
          transform: revealHiddenContent ? "rotate(180deg)" : "none",
          py: 0,
        }}
      >
        {hiddenContent ? (
          <IconButton onClick={handleExpandContentClick} icon={<ArrowIcon />} />
        ) : null}
      </div>
    );
  };

  return (
    <div
      sx={{
        bg: "accentBackground",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        px: 4,
      }}
    >
      <h4
        sx={{
          color: "accentBackgroundContrast",
          opacity: 1,
          marginBottom: 1,
          marginTop: 2,
        }}
      >
        {cardTitle}
      </h4>
      <h5
        sx={{
          color: "accentBackgroundContrast",
          fontSize: 1,
          my: 0,
        }}
      >
        {cardSubtitle}
      </h5>
      <p
        sx={{
          color: "accentBackgroundContrast",
          fontSize: 1,
          marginTop: 0,
        }}
      >
        {cardContent}
      </p>
      <div
        sx={{
          overflow: revealHiddenContent ? "inherit" : "hidden",
          transition: "all 150ms",
          height: revealHiddenContent ? "100%" : "0",
        }}
      >
        {hiddenContent}
      </div>
      <ExpandContentButton />
    </div>
  );
};

export default Card;
