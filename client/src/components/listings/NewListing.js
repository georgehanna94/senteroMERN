import React, { Component } from "react";
import { Progress } from "reactstrap";
import { connect } from "react-redux";
import { addListing } from "../../actions/listingActions";

export class NewListing extends Component {
  render() {
    return (
      <div>
        <div className="text-center">1 of 5</div>
        <Progress value="1" max="5" />
      </div>
    );
  }
}

export default connect()(NewListing);
