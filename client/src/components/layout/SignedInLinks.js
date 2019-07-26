import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink to="/newlisting" className="nav-link">
          New Listing
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link"> Log Out</a>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="btn btn-danger text-uppercase">
          Profile{" "}
        </NavLink>
      </li>
    </ul>
  );
};


export default SignedInLinks;
