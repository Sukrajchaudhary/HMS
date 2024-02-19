import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const loginInfo = localStorage.getItem("token");
  console.log("from protected Admine", loginInfo);
  const logintoken = JSON.parse(loginInfo);

  if (!logintoken) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  if (logintoken && logintoken.role== "admine") {
    
  return children;
  }

  return <Navigate to="/" replace={true}></Navigate>;
};

export default ProtectedAdmin;
