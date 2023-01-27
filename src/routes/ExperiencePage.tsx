/** @jsxImportSource theme-ui */
import React, { HTMLAttributes } from "react";
import PageHeading from "../components/PageHeading";
import Chips from "../components/Chips";
import Cards from "../components/Cards";
import SubHeading from "../components/SubHeading";
import { SxProp } from "theme-ui";
import Link from "../components/Link";

type ExperiencePageProps = HTMLAttributes<HTMLDivElement> & SxProp;

const ExperiencePage = (props: ExperiencePageProps) => {
  const skills = [
    "Javascript",
    "React",
    "HTML/CSS",
    "Git",
    "ExpressJS",
    "PHP/Laravel",
    "SQL",
    "MongoDB",
    "NodeJS",
  ];

  const jobHistory = [
    {
      cardTitle: "Software Engineer",
      cardSubtitle: "Walts TV and Appliances",
      cardContent: "Mar 2021 - Mar 2022",
      hiddenContent: `Maintained and expanded features for customer facing 
        e-commerce website, internal enterprise resource management 
        software, and automated integrations with third party marketplaces 
        like Amazon and Wal-Mart.`,
    },
    {
      cardTitle: "Software Engineer",
      cardSubtitle: "Integrate",
      cardContent: "May 2019 - Oct 2020",
      hiddenContent: `Work as part of our Data Insights team to build reporting 
        and insights solutions for our customers.`,
    },
    {
      cardTitle: "PFS Reconciliation QA",
      cardSubtitle: "Banner Health",
      cardContent: "Oct 2014 - Oct 2018",
      hiddenContent: `Analyzed insurance payments to the hospital system to 
        ensure they complied with contractual and legal requirements, resolved 
        accounts, and forwarded issues to the appropriate departments`,
    },
  ];

  const education = [
    {
      cardTitle: "Galvanize",
      cardSubtitle: "Web Development Immersive",
      cardContent: "Oct 2018 - Apr 2019",
    },
    {
      cardTitle: "Chandler-Gilbert Community College",
      cardSubtitle: "Associates",
      cardContent: "Aug 2009 - May 2011",
    },
  ];

  return (
    <section className={props.className}>
      <PageHeading
        href="experience"
        headingText="My Experience"
        subHeadingText="Where I've worked"
      />
      <p
        sx={{
          marginBottom: 4,
        }}
      >
        You can check out my experience below, or you can{" "}
        <Link
          href="./MandyCodesResume.pdf"
          title="Download Resume"
          download={true}
        >
          download my resume.
        </Link>
      </p>
      <SubHeading subHeadingText="Skills" />
      <div>
        <Chips chipList={skills} />
      </div>
      <SubHeading subHeadingText="Work History" />
      <Cards cardList={jobHistory} />
      <SubHeading subHeadingText="Education" />
      <Cards cardList={education} />
    </section>
  );
};

export default ExperiencePage;
