/** @jsxImportSource theme-ui */
import React, { HTMLAttributes } from "react";
import { SxProp } from "theme-ui";
import PageHeading from "../components/PageHeading";

type ProjectsPageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const ProjectsPage = (props: ProjectsPageProps) => {
  return (
    <section className={props.className}>
      <PageHeading
        href="projects"
        headingText="Projects Page"
        subHeadingText="Coming soon..."
      />
    </section>
  );
};

export default ProjectsPage;
