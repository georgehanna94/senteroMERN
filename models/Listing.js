const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ListingSchema = new Schema({
  companyname: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model("listing", ListingSchema);
