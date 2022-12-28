/** @jsxImportSource theme-ui */
import React from "react";
import PageHeading from "../components/PageHeading";
import StyleableSVG from "../components/StyleableSVG";
import { ReactComponent as JavaScriptIcon } from "../svg/java-script.svg";
import { ReactComponent as ReactIcon } from "../svg/atom.svg";

const HomePage = () => {
  return (
    <div
      sx={{
        m: 4,
      }}
    >
      <PageHeading headingText="Amanda Everett" />

      <h2 sx={{ font: "body", opacity: 0.75 }}>Software Engineer</h2>
      <p>
        In 2018, I stumbled on my love for building tech solutions for manual
        tasks at my medical billing job while exploring Excel and macro
        solutions for repetitive calculations. What started as Excel tools I
        shared with my coworkers to make our work more efficient soon developed
        into a career change to become a Software Engineer. Now, I get to work
        alongside incredibly talented people to create full-stack web solutions
        for a much larger impact every day.
      </p>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <StyleableSVG svg={<JavaScriptIcon />} />
          <p
            sx={{
              fontSize: 1,
              my: 0,
              color: "lightText",
            }}
          >
            Javascript
          </p>
        </div>
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <StyleableSVG svg={<ReactIcon />} />
          <p
            sx={{
              fontSize: 1,
              my: 0,
              color: "lightText",
            }}
          >
            React
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
