/** @jsxImportSource theme-ui */
import Link from "./Link";
import MandyResume from "../assets/MandyCodesResume_0207.pdf";

const DownloadResumeLink = () => {
  return (
    <Link
      target="_blank"
      rel="noopener,noreferrer"
      download="MandyCodesResume.pdf"
      href={MandyResume}
    >
      Download My Resume
    </Link>
  );
};

export default DownloadResumeLink;
