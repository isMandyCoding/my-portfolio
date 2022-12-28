/** @jsxImportSource theme-ui */
import React from "react";
import Card from "../components/Card";
import PageHeading from "../components/PageHeading";
import Chips from "../components/Chips";
import Cards from "../components/Cards";

const ExperiencePage = () => {
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
      hiddenContent:
        'Maintained and expanded features for customer facing e-commerce website, internal enterprise resource management software, and automated integrations with third party marketplaces like Amazon and Wal-Mart. Lead project to drastically reduce time spent picking products in warehouse from requirements gathering to deployment that was described as the "most usable piece of software we\'ve released." Expanded test coverage and helped with move to micro services from existing monolith.',
    },
    {
      cardTitle: "Software Engineer",
      cardSubtitle: "Integrate",
      cardContent: "May 2019 - Oct 2020",
      hiddenContent:
        "Work as part of our Data Insights team to build reporting and insights solutions for our customers. Built more usable reporting UI  as a React micro front end to help decrease average user time spent building reports down to 6 minutes from 16. Decreased page load time by up to 98%. Built components for internal React component library for faster development and a more unified platform. Contributed to efforts to increase unit and integration test coverage by 34%.",
    },
    {
      cardTitle: "PFS Reconciliation QA",
      cardSubtitle: "Banner Health",
      cardContent: "Oct 2014 - Oct 2018",
      hiddenContent:
        "Promoted to this role shortly after working with the Testing Team. I helped identify system issues to ensure timely resolution, and I also created training material and tools to help improve not just my department's performance, but performance across multiple departments.",
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
    <div
      sx={{
        m: 4,
      }}
    >
      <PageHeading headingText="My Experience" />
      <h2 sx={{ font: "body", opacity: 0.75 }}>Skills</h2>
      <div>
        <Chips chipList={skills} />
      </div>
      <h2 sx={{ font: "body", opacity: 0.75 }}>Work History</h2>
      <Cards cardList={jobHistory} />
      <h2 sx={{ font: "body", opacity: 0.75 }}>Education</h2>
      <Cards cardList={education} />
      <a
        sx={{
          display: "block",
          color: "secondary",
          my: 3,
        }}
        href="#"
        target="_blank"
      >
        Download my resume
      </a>
    </div>
  );
};

export default ExperiencePage;