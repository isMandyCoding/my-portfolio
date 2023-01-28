/** @jsxImportSource theme-ui */
import Link from "./Link";

const DownloadResumeLink = () => {
  return (
    <Link download href={`${process.env.REACT_APP_API_URL}/resume`}>
      Download My Resume
    </Link>
  );
};

export default DownloadResumeLink;
