/** @jsxImportSource theme-ui */
import PageHeading from "../components/PageHeading";
import SkillIcon from "../components/SkillIcon";
import { ReactComponent as JavaScriptIcon } from "../svg/java-script.svg";
import { ReactComponent as TypescriptIcon } from "../svg/typescript_logo_2020.svg";
import { ReactComponent as ReactIcon } from "../svg/atom.svg";
import { ReactComponent as NodeIcon } from "../svg/node-js.svg";
import { ReactComponent as AngularIcon } from "../svg/angular.svg";
import { ReactComponent as GoogleCloudIcon } from "../svg/google-cloud.svg";
import { ReactComponent as GitIcon } from "../svg/git.svg";
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
        the PERN stack (PostgreSQL, Express, React, Node) with Typescript. In
        fact, I built this website with{" "}
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
        In a hurry? <DownloadResumeLink />
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
        <SkillIcon
          svg={<TypescriptIcon />}
          skill="Typescript/Javascript"
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
          svg={<AngularIcon />}
          skill="Angular"
          sx={{
            svg: {
              path: {
                fill: "text",
              },
              "&:hover": {
                path: {
                  fill: "text",
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
        <SkillIcon svg={<GitIcon />} skill="Github/Bitbucket" />
        <SkillIcon
          svg={<GoogleCloudIcon />}
          skill="Google Cloud Platform (GCP)"
        />
      </div>
    </section>
  );
};

export default HomePage;
