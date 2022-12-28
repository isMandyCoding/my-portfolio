/** @jsxImportSource theme-ui */
import React from "react";
import IconLink from "./IconLink";
import { ReactComponent as EmailIcon } from "../svg/email.svg";
import { ReactComponent as LinkedInIcon } from "../svg/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../svg/github.svg";

const ContactLinks = () => {
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
        m: 2,
        p: 0,
      }}
    >
      <span sx={{ mx: 2 }}>
        <IconLink to="mailto:me@example.com" icon={<EmailIcon />} />
      </span>
      <span sx={{ mx: 2 }}>
        <IconLink
          to="https://www.linkedin.com/in/amanda-everett/"
          target="_blank"
          icon={<LinkedInIcon />}
        />
      </span>
      <span sx={{ mx: 2 }}>
        <IconLink
          to="https://github.com/isMandyCoding"
          target="_blank"
          icon={<GitHubIcon />}
        />
      </span>
    </ul>
  );
};

export default ContactLinks;
