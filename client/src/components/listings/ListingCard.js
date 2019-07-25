import React, { Component } from "react";

export class ListingCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.companyname}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.id}</h6>
          <p className="card-text">{this.props.date}</p>
          <a href="#" className="card-link">
            {this.props.email}
          </a>
          <a href="#" className="card-link">
            Website
          </a>
        </div>
      </div>
    );
  }
}

export default ListingCard;
