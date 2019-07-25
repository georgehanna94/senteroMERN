import { GET_LISTINGS, DELETE_LISTING, ADD_LISTING } from "../actions/types.js";

const initialState = {
  listing: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };

    case DELETE_LISTING:
      return {
        ...state,
        listings: state.listings.filter(
          listing => listing.id !== action.payload
        )
      };

    case ADD_LISTING:
      return {
        ...state,
        listings: [...state.listings, action.payload]
      };

    default:
      return state;
  }
}
