// * - IMPORTING -
// Redux
import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import errorReducer from "./errorReducer";
import randomActivityReducer from "./activitiesReducer/randomActivityReducer";
import recreationActivityReducer from "./activitiesReducer/recreationActivityReducer";
import toggleShowActivityReducer from "./showActivityReducer";
import socialActivityReducer from "./activitiesReducer/socialActivityReducer";

// * - Root Reducer -
const rootReducer = combineReducers({
  errorReducer,
  randomActivityReducer,
  recreationActivityReducer,
  toggleShowActivityReducer,
  socialActivityReducer,
}); // * end rootReducer

// * Exporting rootReducer
export default rootReducer;
