import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import ChatPage from "../pages/ChatPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<h1>This is about page</h1>} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
