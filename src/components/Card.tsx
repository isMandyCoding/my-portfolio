/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { keyframes } from "@emotion/react";
import { ReactComponent as ArrowIcon } from "../svg/down-arrow.svg";
import IconButton from "./IconButton";

export interface CardProps {
  cardTitle: string;
  cardSubtitle: string;
  cardContent: string;
  hiddenContent?: string;
}

const rotateButton = keyframes({
  from: {
    transform: "none",
  },
  to: {
    transform: "rotate(180deg)",
  },
});

const expandHiddenContent = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "9000px",
  },
});

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
          animation: revealHiddenContent
            ? `${rotateButton} 150ms forwards`
            : "none",
          py: 2,
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
        minWidth: "18rem",
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
          maxHeight: revealHiddenContent ? "360px" : 0,
          overflow: "hidden",
          transition: "all 150ms",
        }}
      >
        <div
          sx={{
            animation: revealHiddenContent
              ? `${expandHiddenContent} 500ms forwards`
              : "none",
          }}
        >
          {hiddenContent}
        </div>
      </div>
      <ExpandContentButton />
    </div>
  );
};

export default Card;
