/** @jsxImportSource theme-ui */
import React, { HTMLAttributes } from "react";
import { SxProp } from "theme-ui";
import PageHeading from "../components/PageHeading";

type ProjectsPageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const ProjectsPage = (props: ProjectsPageProps) => {
  return (
    <div className={props.className}>
      <PageHeading
        href="projects"
        headingText="Projects Page"
        subHeadingText="Some things I've built"
      />
    </div>
  );
};

export default ProjectsPage;
