import { combineReducers } from "redux";
import listingReducer from "./listingReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  listingReducer,
  errorReducer,
  authReducer
});
