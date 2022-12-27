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
    },
    {
      cardTitle: "PFS Reconciliation QA",
      cardSubtitle: "Banner Health",
      cardContent: "Oct 2014 - Oct 2018",
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
