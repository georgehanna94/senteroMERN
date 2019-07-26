import axios from "axios";
import {
  GET_LISTINGS,
  ADD_LISTING,
  DELETE_LISTING,
  LISTINGS_LOADING
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

// GET LISTINGS
export const getListings = () => dispatch => {
  dispatch(setListingsLoading());
  axios
    .get("/api/listings/")
    .then(res => {
      dispatch({
        type: GET_LISTINGS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addListing = listing => (dispatch, getState) => {
  axios
    .post("/api/listings", listing, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_LISTING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteListing = id => (dispatch, getState) => {
  axios
    .delete(`api/listings/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_LISTING,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setListingsLoading = () => {
  return {
    type: LISTINGS_LOADING
  };
};
