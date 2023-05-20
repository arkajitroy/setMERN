import React from "react";
import { useNavigate } from "react-router-dom";
import { SuccessIcon } from "../../../assets";

import "./layout.css";

const Success = () => {
  const navigate = useNavigate();

  const redirectToLogin = (event) => {
    navigate("/auth/login");
  };

  return (
    <div className="success-container">
      <img className="success-icon" src={SuccessIcon} alt="" />
      <h1>Registration Successful!</h1>
      <p>You have successfully registered.</p>
      <button onClick={redirectToLogin}>Click here Login</button>
    </div>
  );
};

export default Success;
