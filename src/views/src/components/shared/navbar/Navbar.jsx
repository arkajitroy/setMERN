import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleLoginButtonRedirect = () => {
    navigate("/auth/login");
  };

  const handleLogoutButton = () => {
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) localStorage.setItem("loginStatus", false);
    location.reload();
  };

  useEffect(() => {
    const login_status = localStorage.getItem("loginStatus");
    if (login_status) setLoginStatus(JSON.parse(loginStatus));
  }, [loginStatus]);

  return (
    <>
      {location.pathname === "/auth/login" ||
      location.pathname === "/auth/register" ||
      location.pathname === "/auth/success" ? null : (
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <NavLink to="/" activeClassName="active" className="navbar-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                className="navbar-link"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="navbar-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="navbar-login-container">
            {loginStatus === true ? (
              <span className="navbar-button" onClick={handleLogoutButton}>
                Sing Out
              </span>
            ) : (
              <span
                className="navbar-button"
                onClick={handleLoginButtonRedirect}
              >
                Log In
              </span>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
