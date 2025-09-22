import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<h1>This is chat page</h1>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
