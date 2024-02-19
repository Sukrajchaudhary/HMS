import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const loginInfo = localStorage.getItem("token");
  const logintoken = JSON.parse(loginInfo);
  if (!logintoken) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};

export default Protected;
