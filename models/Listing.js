const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ListingSchema = new Schema({
  membership_level: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String,
    required: false
  },
  surname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: false
  },
  company_name: {
    type: String,
    required: false
  },
  address1: {
    type: String,
    required: false
  },
  address2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  postal_code: {
    type: String,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  regions_served: {
    type: Array,
    required: false
  },
  service_locations: {
    type: Array,
    required: false
  },
  populations_served: {
    type: Array,
    required: false
  },
  services_provided: {
    type: Array,
    required: false
  },
  service_format: {
    type: Array,
    required: false
  },
  languages: {
    type: Array,
    required: false
  },
  our_team_includes: {
    type: Array,
    required: false
  },
  my_role_is: {
    type: Array,
    required: false
  },
  years_experience: {
    type: Array,
    required: false
  },
  our_team_includes_certified: {
    type: Array,
    required: false
  },
  we_have_providers_regulated_by: {
    type: Array,
    required: false
  },
  i_am_certified_as: {
    type: Array,
    required: false
  },
  i_am_a_regulated_professional_with: {
    type: Array,
    required: false
  }
});

module.exports = Listing = mongoose.model("listing", ListingSchema);
