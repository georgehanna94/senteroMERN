import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings } from "../../actions/listingActions";
import ListingCard from "./ListingCard";

export class ListingsList extends Component {
  componentDidMount() {
    this.props.getListings();
  }

  render() {
    const { listings } = this.props.listings;
    return <Fragment />;
  }
}

ListingsList.propTypes = {
  getListings: PropTypes.func.isRequired,
  listing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listings: state.listing
});

export default connect(
  mapStateToProps,
  { getListings }
)(ListingsList);
