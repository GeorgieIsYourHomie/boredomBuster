// * - IMPORTING -
// Redux
import { combineReducers } from "@reduxjs/toolkit";
// Reducer
import errorReducer from "./errorReducer";

// * - Root Reducer -
const rootReducer = combineReducers({
  errorReducer,
}); // * end rootReducer

// * Exporting rootReducer
export default rootReducer;
