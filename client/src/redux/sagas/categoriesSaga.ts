// * - IMPORTING -
// Redux
import { put, takeLatest } from "redux-saga/effects";
// Axios
// import axios from "axios";
// Types
import { DispatchedActivityType } from "../../types/categories/CategoryTypes";
import type { ChosenCategories } from "../../types/categories/CategoryTypes";

// * - LISTENER SAGA -
// * Categories Listener Saga
export default function* categoriesSaga() {
  yield takeLatest(
    "SEARCH_CHOSEN_CATEGORIES_ACTIVITY",
    searchChosenCategoryActivity
  );
} // * end categoriesSaga

// * - ACTION SAGAS -
// * Find Activities
// Gen function to search for activities based on category
function* searchChosenCategoryActivity(action: DispatchedActivityType) {
  // Logging
  console.log(
    `\nsearchChosenCategoryActivity running due to action:
    "${action.type}"`
  );

  try {
    // Declaring chosen categories as payload
    const chosenCategories: ChosenCategories  = action.payload;


    // For loop with switch statement, discerning category actions for activities
    yield put({ type: "S", payload: chosenCategories });

    // Dispatch action to checklists reducer, setting the global state to data
  } catch {
    console.log("\nError getting all checklists.");
  }
} // * end searchChosenCategoryActivity

// * Find "Random Activity"
// Gen function to search for random activity
