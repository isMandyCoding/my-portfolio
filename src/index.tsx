import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import HomePage from "./routes/HomePage";
import ExperiencePage from "./routes/ExperiencePage";
import ContactPage from "./routes/ContactPage";
import ProjectsPage from "./routes/ProjectsPage";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
