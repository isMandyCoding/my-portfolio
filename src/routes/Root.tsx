/** @jsxImportSource theme-ui */
import { Outlet } from "react-router-dom";
import GeneralPageLayout from "./GeneralPageLayout";

const Root = () => {
  return (
    <GeneralPageLayout>
      <Outlet />
    </GeneralPageLayout>
  );
};

export default Root;
