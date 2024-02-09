import React from "react";
import Navbar from "../features/Navbar/Navbar";
import SignUp from "../features/Auth/components/SignUp";
const SignupPages = () => {
  return (
    <div>
      <Navbar>
        <SignUp></SignUp>
      </Navbar>
    </div>
  );
};

export default SignupPages;
