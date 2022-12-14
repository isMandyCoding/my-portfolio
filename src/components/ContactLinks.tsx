/** @jsxImportSource theme-ui */
import React from "react";
import IconLink from "./IconLink";
import { ReactComponent as EmailIcon } from "../svg/new-email.svg";
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
      <IconLink to="mailto:me@example.com" icon={<EmailIcon />} />
      <IconLink
        to="https://www.linkedin.com/in/amanda-everett/"
        target="_blank"
        icon={<LinkedInIcon />}
      />
      <IconLink
        to="https://github.com/isMandyCoding"
        target="_blank"
        icon={<GitHubIcon />}
      />
    </ul>
  );
};

export default ContactLinks;
