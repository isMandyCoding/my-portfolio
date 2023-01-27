/** @jsxImportSource theme-ui */
import PageHeading from "../components/PageHeading";
import { ReactComponent as JavaScriptIcon } from "../svg/java-script.svg";
import { ReactComponent as TypescriptIcon } from "../svg/typescript_logo_2020.svg";
import { ReactComponent as ReactIcon } from "../svg/atom.svg";
import { ReactComponent as NodeIcon } from "../svg/node-js.svg";
import { ReactComponent as MongoDBIcon } from "../svg/leaf.svg";
import { ReactComponent as SQLIcon } from "../svg/database.svg";
import { ReactComponent as LaravelIcon } from "../svg/laravel_logo.svg";
import { ReactComponent as GitIcon } from "../svg/git.svg";
import { ReactComponent as DockerIcon } from "../svg/docker.svg";
import SkillIcon from "../components/SkillIcon";
import { HTMLAttributes } from "react";
import { SxProp } from "theme-ui";
import Button from "../components/Button";
import { keyframes } from "@emotion/react";

const typing = keyframes({ from: { width: 0 } });
const blink = keyframes({ "50%": { borderColor: "transparent" } });

type HomePageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const HomePage = (props: HomePageProps) => {
  return (
    <section className={props.className}>
      <PageHeading
        href="about"
        headingText="Mandy Codes"
        subHeadingText="Software Engineer"
      />
      <p
        sx={{
          marginBottom: 4,
        }}
      >
        Hello! I'm a full-stack developer with a focus on the MERN stack with
        Typescript and Laravel.
      </p>
      <div
        sx={{
          marginTop: 3,
          marginBottom: 5,
        }}
      >
        <Button href={"#contact"}>Contact Me!</Button>
      </div>
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
        <SkillIcon svg={<DockerIcon />} skill="Docker" />
        <SkillIcon
          svg={<TypescriptIcon />}
          skill="Typescript"
          sx={{
            svg: {
              path: {
                fill: "background",
              },
              "&:hover": {
                path: {
                  fill: "background",
                },
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default HomePage;
