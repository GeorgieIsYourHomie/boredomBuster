// * - IMPORTING -
// Redux
import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import errorReducer from "./errorReducer";
import randomActivityReducer from "./activitiesReducer/randomActivityReducer";
import recreationActivityReducer from "./activitiesReducer/recreationActivityReducer";
import toggleShowActivityReducer from "./showActivityReducer";
import socialActivityReducer from "./activitiesReducer/socialActivityReducer";
import educationalActivityReducer from "./activitiesReducer/educationalActivityReducer";
import DIYActivityReducer from "./activitiesReducer/DIYActivityReducer";
import cookingActivityReducer from "./activitiesReducer/cookingActivityReducer";
import charityActivityReducer from "./activitiesReducer/charityActivityReducer";
import relaxationActivityReducer from "./activitiesReducer/relaxationActivityReducer";
import busyworkActivityReducer from "./activitiesReducer/busyWorkActivityReducer";
import musicActivityReducer from "./activitiesReducer/musicActivityReducer";

// * - Root Reducer -
const rootReducer = combineReducers({
  errorReducer,
  randomActivityReducer,
  recreationActivityReducer,
  toggleShowActivityReducer,
  socialActivityReducer,
  educationalActivityReducer,
  DIYActivityReducer,
  cookingActivityReducer,
  charityActivityReducer,
  relaxationActivityReducer,
  busyworkActivityReducer,
  musicActivityReducer
}); // * end rootReducer

// * Exporting rootReducer
export default rootReducer;
