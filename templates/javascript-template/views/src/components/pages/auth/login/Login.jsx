/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistrationPageRedirect = () => {
    navigate("/auth/register");
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:4000/api/auth/login", formData)
        .then((response) => console.log(response))
        .then(() => {
          setLoginStatus(true);
          localStorage.setItem("loginStatus", true);
        })
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
    },
    [formData, navigate]
  );

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) setLoginStatus(JSON.parse(loginStatus));
  }, []);

  return (
    <div className="login-page">
      <h2 className="login-page-headline">Log in to your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          Don't have an account?{" "}
          <span
            className="create-account-link"
            onClick={handleRegistrationPageRedirect}
          >
            Click Here
          </span>
        </div>
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
