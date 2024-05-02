import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const loginInfo = localStorage.getItem("token");
  const logintoken = loginInfo ? JSON.parse(loginInfo) : null;

  if (logintoken?.role === "admin" && logintoken?.role !== "user") {
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedAdmin;
