import { SearchChosenCategoryActivity } from "../../types/categories/CategoryTypes";
import { combineReducers } from "@reduxjs/toolkit";
// Import your slice reducers here
// import someFeatureReducer from '../features/someFeature/someFeatureSlice';

const dummyReducer = (state = [], action: SearchChosenCategoryActivity) => [
  ...state,
  action,
];

const rootReducer = combineReducers({
  // someFeature: someFeatureReducer,
  // Add other slice reducers here
  dummyReducer,
});

export default rootReducer;
