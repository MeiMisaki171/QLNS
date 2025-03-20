import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

const AdminRoute = ({ children: Element }) => {
  const { user } = useAuth();
  return user?.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
