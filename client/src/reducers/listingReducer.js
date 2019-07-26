import {
  GET_LISTINGS,
  DELETE_LISTING,
  ADD_LISTING,
  LISTINGS_LOADING
} from "../actions/types.js";

const initialState = {
  listings: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: action.payload,
        loading: false
      };

    case DELETE_LISTING:
      return {
        ...state,
        listings: state.listings.filter(
          listing => listing._id !== action.payload
        )
      };

    case ADD_LISTING:
      return {
        ...state,
        listings: [...state.listings, action.payload]
      };
    case LISTINGS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
