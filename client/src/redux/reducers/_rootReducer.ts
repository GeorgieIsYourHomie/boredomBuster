// * - IMPORTING -
// Redux
import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import errorReducer from "./errorReducer";
import randomActivityReducer from "./activitiesReducer/randomActivityReducer";

// * - Root Reducer -
const rootReducer = combineReducers({
  errorReducer,
  randomActivityReducer,
}); // * end rootReducer

// * Exporting rootReducer
export default rootReducer;
