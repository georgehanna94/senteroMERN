const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

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
router.post("/", auth, (req, res) => {
  const newListing = new Listing({
    company_name: req.body.company_name,
    email: req.body.email,
    first_name: req.body.first_name,
    surname: req.body.surname,
    membership_level: req.body.membership_level,
    phone: req.body.phone,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    postal_code: req.body.postal_code,
    website: req.body.website,
    regions_served: req.body.regions_served,
    service_locations: req.body.service_locations,
    populations_served: req.body.populations_served,
    services_provided: req.body.services_provided,
    service_format: req.body.service_format,
    languages: req.body.languages,
    our_team_includes: req.body.our_team_includes,
    my_role_is: req.body.my_role_is,
    years_experience: req.body.years_experience,
    our_team_includes_certified: req.body.our_team_includes_certified,
    we_have_providers_regulated_by: req.body.we_have_providers_regulated_by,
    i_am_certified_as: req.body.i_am_certified_as,
    i_am_a_regulated_professional_with:
      req.body.i_am_a_regulated_professional_with
  });

  newListing.save().then(listing => res.json(listing));
});

// @route DELETE api/listings/:id
// @desc Delete a Listing
// @access Public
router.delete("/:id", auth, (req, res) => {
  Listing.findById(req.params.id)
    .then(listing => listing.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
