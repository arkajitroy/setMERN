import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" activeClassName="active" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" className="navbar-link">
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
        <button className="navbar-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
