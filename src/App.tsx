/** @jsxImportSource theme-ui */

import React from "react";
import GeneralPageLayout from "./routes/GeneralPageLayout";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './ReactToastifyOverrides.css';

const App = () => {
  return (
    <div id="detail">
      <GeneralPageLayout />
      <ToastContainer limit={3} />
    </div>
  );
};

export default App;
