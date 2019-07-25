const express = require("express");
const router = express.Router();

//Listing Model
const Listing = require("../../models/Listing");

// @route GET api/listings
// @desc Get all listings
// @access Public
router.get("/", (req, res) => {
  Listing.find()
    .sort({ date: -1 })
    .then(listings => res.json(listings));
});

// @route POST api/listings
// @desc Create a Listing
// @access Public
router.post("/", (req, res) => {
  const newListing = new Listing({
    companyname: req.body.companyname
  });

  newListing.save().then(listing => res.json(listing));
});

// @route DELETE api/listings/:id
// @desc Delete a Listing
// @access Public
router.delete("/:id", (req, res) => {
  Listing.findById(req.params.id)
    .then(listing => listing.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
