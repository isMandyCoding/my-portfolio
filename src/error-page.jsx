/** @jsxImportSource theme-ui */

import { useRouteError } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageHeading from "./components/PageHeading";
import GeneralPageLayout from "./routes/GeneralPageLayout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <GeneralPageLayout>
      <div 
        sx={{
          m: 4
        }}
      >
      <PageHeading headingText="Oh no!" />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error.message}</i>
      </p>
      </div>
    </GeneralPageLayout>
  );
}
