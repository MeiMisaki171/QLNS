import { Routes, Route } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import AdminRoutes from "./AdminRoutes";
import React from "react";
import Login from "~/features/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/*" element={<ClientRoutes />} />
    <Route path="/admin/*" element={<AdminRoutes />} />
  </Routes>
);

export default AppRoutes;
