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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
