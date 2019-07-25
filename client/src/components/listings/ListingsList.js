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
            <ListingCard companyname ={listing.companyname} date = {listing.date} id={listing.id}/>
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
