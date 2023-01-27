/** @jsxImportSource theme-ui */
import SubHeading from "./SubHeading";

export interface PageHeadingProps {
  headingText: string;
  subHeadingText?: string;
  href?: string;
}

const PageHeading = ({
  headingText,
  subHeadingText,
  href,
}: PageHeadingProps) => {
  const splitHeading = headingText.split(" ");
  const midIndex = Math.ceil(splitHeading.length / 2) - 1;
  const firstHalf = splitHeading.slice(0, midIndex + 1).join(" ");
  const secondHalf = splitHeading.slice(midIndex + 1).join(" ");

  return (
    <>
      <h1
        id={`#${href}`}
        sx={{
          paddingTop: 3,
          variant: "heading",
          fontSize: [5, 6],
          position: "relative",
          paddingBottom: 3,
          "&::After": {
            content: "''",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "8rem",
            borderTop: (theme) => `1px solid ${theme?.colors?.accent}`,
          },
        }}
      >
        {firstHalf} <span sx={{ color: "primary" }}>{secondHalf}</span>
      </h1>
      {subHeadingText ? <SubHeading subHeadingText={subHeadingText} /> : null}
    </>
  );
};

export default PageHeading;
