import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import App from "./App";
import ResumeProvider from "./providers/ResumeProvider";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
