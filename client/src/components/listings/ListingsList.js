import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getListings } from "../../actions/listingActions";
import ListingCard from "./ListingCard";
import { Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export class ListingsList extends Component {
  static propTypes = {
    listings: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getListings();
  }

  render() {
    let listings = this.props.listings.map(listing => {
      return (
        <div className="card" key={listing._id}>
          <ListingCard
            company_name={listing.company_name}
            phone={listing.phone}
            email={listing.email}
            website={listing.website}
          />
        </div>
      );
    });

    return <div className="box">{listings}</div>;
  }
}

const mapStateToProps = state => ({
  listings: state.listingReducer.listings
});

export default connect(
  mapStateToProps,
  { getListings }
)(ListingsList);
