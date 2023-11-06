// * - IMPORTING -
// Redux
import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import errorReducer from "./errorReducer";
import randomActivityReducer from "./activitiesReducer/randomActivityReducer";
import recreationActivityReducer from "./activitiesReducer/recreationActivityReducer";
import toggleShowActivityReducer from "./showActivityReducer";

// * - Root Reducer -
const rootReducer = combineReducers({
  errorReducer,
  randomActivityReducer,
  recreationActivityReducer,
  toggleShowActivityReducer,
}); // * end rootReducer

// * Exporting rootReducer
export default rootReducer;
