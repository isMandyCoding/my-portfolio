/** @jsxImportSource theme-ui */
import Link from "./Link";
import FileSaver from "file-saver";

const DownloadResumeLink = () => {
  const handleDownloadClick = () => {
    FileSaver.saveAs(
      `${process.env.PUBLIC_URL}/MandyCodesResume.pdf`,
      "MandyCodesResume.pdf"
    );
  };
  return <Link onClick={handleDownloadClick}>Download My Resume</Link>;
};

export default DownloadResumeLink;
