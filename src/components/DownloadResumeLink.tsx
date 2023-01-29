/** @jsxImportSource theme-ui */
import { useContext } from "react";
import { ResumeContext } from "../providers/ResumeProvider";
import Link from "./Link";

const DownloadResumeLink = () => {
  const { anchorUrl } = useContext(ResumeContext);
  const fallbackLink = "https://www.linkedin.com/in/amanda-everett";
  const fallBackText = "Connect on LinkedIn";
  return (
    <Link
      download={!anchorUrl ? false : "MandyCodesResume.pdf"}
      href={!anchorUrl ? fallbackLink : anchorUrl}
    >
      {!anchorUrl ? fallBackText : "Download My Resume"}
    </Link>
  );
};

export default DownloadResumeLink;
