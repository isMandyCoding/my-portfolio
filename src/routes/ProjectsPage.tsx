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
        headingText="My Projects"
        subHeadingText="Coming soon..."
      />
      <p>
        I believe it's important to deliver value frequently and re-iterate to
        build on existing features. That's why I've released the experience and
        contact portion of this website while this projects page is in progress.
        Check back here for more information on my projects!
      </p>
    </section>
  );
};

export default ProjectsPage;
