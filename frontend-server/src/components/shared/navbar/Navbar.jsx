import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleLoginButtonRedirect = () => {
    navigate("/auth/login");
  };

  return (
    <>
      {location.pathname === "/auth/login" ||
      location.pathname === "/auth/register" ? null : (
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
          <div className="navbar-login">
            <button
              className="navbar-button"
              onClick={handleLoginButtonRedirect}
            >
              Log In
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
