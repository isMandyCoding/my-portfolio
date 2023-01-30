/** @jsxImportSource theme-ui */
import { RefObject, useContext, useRef } from "react";
import { ResumeContext } from "../providers/ResumeProvider";
import Link from "./Link";

const DownloadResumeLink = () => {
  const { anchorUrl } = useContext(ResumeContext);
  const fallbackLink = "https://www.linkedin.com/in/amanda-everett";
  const fallBackText = "Connect on LinkedIn";

  return (
    <Link
      target={"_blank"}
      rel="noopener,noreferrer"
      download={"MandyCodesResume.pdf"}
      href={anchorUrl ? anchorUrl : fallbackLink}
    >
      {anchorUrl ? "Download My Resume" : fallBackText}
    </Link>
  );
};

export default DownloadResumeLink;
