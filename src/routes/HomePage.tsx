/** @jsxImportSource theme-ui */
import React from "react";
import PageHeading from "../components/PageHeading";
import { ReactComponent as JavaScriptIcon } from "../svg/java-script.svg";
import { ReactComponent as ReactIcon } from "../svg/atom.svg";
import { ReactComponent as NodeIcon } from "../svg/node-js.svg";
import { ReactComponent as MongoDBIcon } from "../svg/leaf.svg";
import { ReactComponent as SQLIcon } from "../svg/database.svg";
import { ReactComponent as LaravelIcon } from "../svg/laravel_logo.svg";
import { ReactComponent as GitIcon } from "../svg/git.svg";
import SkillIcon from "../components/SkillIcon";

const HomePage = () => {
  return (
    <div
      sx={{
        m: 4,
      }}
    >
      <PageHeading
        headingText="Mandy Codes"
        subHeadingText="Software Engineer"
      />
      <p
        sx={{
          marginBottom: 4,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <SkillIcon svg={<JavaScriptIcon />} skill="Javascript" />
        <SkillIcon svg={<ReactIcon />} skill="React" />
        <SkillIcon svg={<NodeIcon />} skill="NodeJS" />
        <SkillIcon svg={<MongoDBIcon />} skill="MongoDB" />
        <SkillIcon svg={<SQLIcon />} skill="SQL" />
        <SkillIcon svg={<LaravelIcon />} skill="PHP/Laravel" />
        <SkillIcon svg={<GitIcon />} skill="Git" />
      </div>
    </div>
  );
};

export default HomePage;
