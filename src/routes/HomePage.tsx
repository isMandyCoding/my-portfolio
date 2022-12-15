/** @jsxImportSource theme-ui */
import React from "react";

const HomePage = () => {
  return (
    <div
      sx={{
        m: 4,
      }}
    >
      <h1
        sx={{
          color: "text",
          fontFamily: "heading",
        }}
      >
        Mandy <span sx={{ color: "primary" }}>Everett</span>
      </h1>
      <h2 sx={{ font: "body", opacity: 0.75 }}>Software Engineer</h2>
      <p>
        Some text here. Probably something like a heading to fill the space and
        give an idea of my goal. Like the objective statement on a resume.
      </p>
    </div>
  );
};

export default HomePage;
