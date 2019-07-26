import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SignOut from "../../components/auth/SignOut";
import { NavItem } from "reactstrap";

class SignedInLinks extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <NavLink to="/newlisting" className="nav-link">
            New Listing
          </NavLink>
        </li>
        <NavItem>
          <SignOut />
        </NavItem>
        <li className="nav-item">
          <NavLink to="/" className="btn btn-danger text-uppercase">
            Profile{" "}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
