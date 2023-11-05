// * - IMPORTING -
// Redux
import { put, takeLatest } from "redux-saga/effects";
// Utils
import handleFindActivityUtils from "../../utils/handleFindActivityUtils";
// Axios
import axios, { AxiosResponse } from "axios";
// Types
import { DispatchedActivityType } from "../../types/categories/CategoryTypes";
import type { ChosenCategories } from "../../types/categories/CategoryTypes";
import { Activity } from "../../../../shared/models/activity";

// * - LISTENER SAGA -
// * Categories Listener Saga
export default function* categoriesSaga() {
  // Find activities
  yield takeLatest(
    "SEARCH_CHOSEN_CATEGORIES_ACTIVITY",
    searchChosenCategoryActivity
  );
  // Find random activity
  yield takeLatest("FIND_RANDOM_ACTIVITY", findRandomActivity);
  // Find recreational activity
  yield takeLatest("FIND_RECREATION_ACTIVITY", findRecreationalActivity);
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
    // Check if the payload is of type ChosenCategories (i.e., an array of strings)
    if (Array.isArray(action.payload)) {
      // Declaring chosen categories as payload
      const chosenCategories: ChosenCategories = action.payload;

      // Will find activity depending on the categories
      yield* handleFindActivityUtils(chosenCategories);
    } else {
      // Handle the case where payload is not ChosenCategories
      console.error(
        "Payload is not an array of chosen categories:",
        action.payload
      );
    }
  } catch (error) {
    console.error("\nError finding activities based on categories:", error);
  }
} // * end searchChosenCategoryActivity

// * Find Random Activity
// Gen function to search for random activity
function* findRandomActivity() {
  try {
    // Fetching random activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/random`
    );

    // Accessing response data (random activity)
    const randomActivity: Activity = response.data;

    // Dispatch action to set new random activity
    yield put({ type: "SET_RANDOM_ACTIVITY", payload: randomActivity });
  } catch (error) {
    console.error("\nError finding random activity:", error);
  }
}

// * Find Recreational Activity
// Gen function to search for recreational activity
function* findRecreationalActivity() {
  try {
    // Fetching recreational activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/recreation`
    );

    // Accessing response data (recreational activity)
    const recreationalActivity: Activity = response.data;

    // Dispatch action to set new recreational activity
    yield put({
      type: "SET_RECREATIONAL_ACTIVITY",
      payload: recreationalActivity,
    });
  } catch (error) {
    console.error("\nError finding recreational activity:", error);
  }
}
