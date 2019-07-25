import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link" >
          Sign up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
