import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings } from "../../actions/listingActions";
import ListingCard from "./ListingCard";

export class ListingsList extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getListings();
  }

  render() {
    const { listings } = this.props.listings;
    return (
      <Fragment>
        {this.props.listings.map(listing => (
          <ul key={listing.id}>
            <ListingCard company_name ={listing.company_name} phone = {listing.phone} email = {listing.email} website = {listing.website}   />
          </ul>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.listingReducer.listings
});

export default connect(
  mapStateToProps,
  { getListings }
)(ListingsList);
