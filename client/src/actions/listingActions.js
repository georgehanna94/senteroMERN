import axios from "axios";
import { GET_LISTINGS, ADD_LISTING, DELETE_LISTING } from "./types";

// GET ARTICLES
export const getListings = () => (dispatch, getState) => {
  return {
    type: GET_LISTINGS
  };
};
