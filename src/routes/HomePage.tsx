/** @jsxImportSource theme-ui */
import PageHeading from "../components/PageHeading";
import SkillIcon from "../components/SkillIcon";
import { ReactComponent as JavaScriptIcon } from "../svg/java-script.svg";
import { ReactComponent as TypescriptIcon } from "../svg/typescript_logo_2020.svg";
import { ReactComponent as ReactIcon } from "../svg/atom.svg";
import { ReactComponent as NodeIcon } from "../svg/node-js.svg";
import { ReactComponent as MongoDBIcon } from "../svg/mongodb.svg";
import { ReactComponent as SQLIcon } from "../svg/database.svg";
import { ReactComponent as LaravelIcon } from "../svg/laravel_logo.svg"; //PostgreSQL_logo
import { ReactComponent as PostgresIcon } from "../svg/PostgreSQL_logo.svg"; //PostgreSQL_logo
import { HTMLAttributes } from "react";
import { SxProp } from "theme-ui";
import Button from "../components/Button";
import DownloadResumeLink from "../components/DownloadResumeLink";
import Link from "../components/Link";

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
        Hello! My name is Mandy and I'm a full-stack developer with a focus on
        the PERN stack (PostgreSQL, Express, React, Node) with Typescript and
        Laravel. In fact, I built this website with{" "}
        <Link
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
        >
          React
        </Link>
        . If you're curious, you can{" "}
        <Link
          href="https://github.com/isMandyCoding/my-portfolio"
          target="_blank"
        >
          check out the source code.
        </Link>
      </p>
      <p>
        In a hurry? <DownloadResumeLink />.
      </p>
      <div
        sx={{
          marginTop: 4,
          marginBottom: 5,
          display: "flex",
          flexDirection: ["column", "row"],
          gap: 3,
        }}
      >
        <Button href={"#contact"}>Contact Me</Button>
      </div>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <SkillIcon svg={<JavaScriptIcon />} skill="Javascript" />
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
        <SkillIcon
          svg={<ReactIcon />}
          skill="React"
          sx={{
            svg: {
              circle: {
                fill: "text",
              },
            },
          }}
        />
        <SkillIcon svg={<NodeIcon />} skill="NodeJS" />
        <SkillIcon svg={<PostgresIcon />} skill="PostgreSQL" />
        <SkillIcon svg={<MongoDBIcon />} skill="MongoDB" />
        <SkillIcon svg={<SQLIcon />} skill="SQL" />
        <SkillIcon svg={<LaravelIcon />} skill="PHP/Laravel" />
      </div>
    </section>
  );
};

export default HomePage;
