import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
