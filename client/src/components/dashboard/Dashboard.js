import React, { Component } from "react";
import ListingsList from "../listings/ListingsList";

export class Dashboard extends Component {
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Dashboard
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Shortcuts
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Overview
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Events
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Profile
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Status
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="btn btn-primary" id="menu-toggle">
              Showing X results
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid">
            <h1 className="mt-4">Search Results</h1>
            <ListingsList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
