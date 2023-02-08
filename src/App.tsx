/** @jsxImportSource theme-ui */

import React from "react";
import GeneralPageLayout from "./routes/GeneralPageLayout";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./ReactToastifyOverrides.css";
import { useColorMode } from "theme-ui";

const App = () => {
  const [colorMode] = useColorMode();

  return (
    <div
      id="detail"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <GeneralPageLayout />
      <ToastContainer
        limit={3}
        position={toast.POSITION.BOTTOM_LEFT}
        theme={colorMode === "dark" ? colorMode : "light"}
      />
    </div>
  );
};

export default App;
