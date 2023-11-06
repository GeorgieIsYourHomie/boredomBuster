// * - IMPORTING -
// Redux
import { put, takeLatest } from "redux-saga/effects";
// Utils
import handleFindActivityUtils from "../../utils/handleFindActivityUtils";
import handleClearCategoryReduxState from "../../utils/handleClearCategoryReducerState";
// Axios
import axios, { AxiosResponse } from "axios";
// Types
import { DispatchedActivityType } from "../../types/categories/CategoryTypes";
import type {
  ChosenCategories,
  SelectedCategoriesState,
} from "../../types/categories/CategoryTypes";
import { Activity } from "../../../../shared/models/activity";

// * - LISTENER SAGA -
// * Categories Listener Saga
export default function* categoriesSaga() {
  // Clear category reducer states
  yield takeLatest("CLEAR_CATEGORY_REDUCERS", clearCategoryReducerStates);
  // Find activities
  yield takeLatest(
    "SEARCH_CHOSEN_CATEGORIES_ACTIVITY",
    searchChosenCategoryActivity
  );
  // Find random activity
  yield takeLatest("FIND_RANDOM_ACTIVITY", findRandomActivity);
  // Find recreational activity
  yield takeLatest("FIND_RECREATION_ACTIVITY", findRecreationalActivity);
  // Find social activity
  yield takeLatest("FIND_SOCIAL_ACTIVITY", findSocialActivity);
  // Find educational activity
  yield takeLatest("FIND_EDUCATION_ACTIVITY", findEducationalActivity);
  // Find DIY activity
  yield takeLatest("FIND_DIY_ACTIVITY", findDIYActivity);
  // Find cooking activity
  yield takeLatest("FIND_COOKING_ACTIVITY", findCookingActivity);
  // Find charity activity
  yield takeLatest("FIND_CHARITY_ACTIVITY", findCharityActivity);
  // Find relaxation activity
  yield takeLatest("FIND_RELAXATION_ACTIVITY", findRelaxationActivity);
  // Find busywork activity
  yield takeLatest("FIND_BUSYWORK_ACTIVITY", findBusyworkActivity);
  // Find music activity
  yield takeLatest("FIND_MUSIC_ACTIVITY", findMusicActivity);
} // * end categoriesSaga

// * - ACTION SAGAS -
// * Clear Category Reducer States
// Gen function to clear all category reducer states if false
function* clearCategoryReducerStates(action: DispatchedActivityType) {
  const selectedCategories = action.payload as SelectedCategoriesState;
  yield* handleClearCategoryReduxState(selectedCategories);
}

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
} // * end findRandomActivity

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
} // * end findRecreationalActivity

// * Find Social Activity
// Gen function to search for social activity
function* findSocialActivity() {
  try {
    // Fetching social activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/social`
    );

    // Accessing response data (social activity)
    const socialActivity: Activity = response.data;

    // Dispatch action to set new social activity
    yield put({
      type: "SET_SOCIAL_ACTIVITY",
      payload: socialActivity,
    });
  } catch (error) {
    console.error("\nError finding social activity:", error);
  }
} // * end findSocialActivity;

// * Find Educational Activity
// Gen function to search for educational activity
function* findEducationalActivity() {
  try {
    // Fetching educational activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/education`
    );

    // Accessing response data (educational activity)
    const educationalActivity: Activity = response.data;

    // Dispatch action to set new educational activity
    yield put({
      type: "SET_EDUCATIONAL_ACTIVITY",
      payload: educationalActivity,
    });
  } catch (error) {
    console.error("\nError finding educational activity:", error);
  }
} // * end findEducationalActivity;

// * Find DIY Activity
// Gen function to search for DIY activity
function* findDIYActivity() {
  try {
    // Fetching DIY activity
    const response: AxiosResponse<Activity> =
      yield axios.get(`/bored/activity/diy`);

    // Accessing response data (DIY activity)
    const DIYActivity: Activity = response.data;

    // Dispatch action to set new DIY activity
    yield put({
      type: "SET_DIY_ACTIVITY",
      payload: DIYActivity,
    });
  } catch (error) {
    console.error("\nError finding DIY activity:", error);
  }
} // * end findDIYActivity;

// * Find Cooking Activity
// Gen function to search for cooking activity
function* findCookingActivity() {
  try {
    // Fetching cooking activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/cooking`
    );

    // Accessing response data (cooking activity)
    const cookingActivity: Activity = response.data;

    // Dispatch action to set new cooking activity
    yield put({
      type: "SET_COOKING_ACTIVITY",
      payload: cookingActivity,
    });
  } catch (error) {
    console.error("\nError finding cooking activity:", error);
  }
} // * end findCookingActivity;

// * Find Charity Activity
// Gen function to search for charity activity
function* findCharityActivity() {
  try {
    // Fetching charity activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/charity`
    );

    // Accessing response data (charity activity)
    const charityActivity: Activity = response.data;

    // Dispatch action to set new cooking activity
    yield put({
      type: "SET_CHARITY_ACTIVITY",
      payload: charityActivity,
    });
  } catch (error) {
    console.error("\nError finding charity activity:", error);
  }
} // * end findCharityActivity;

// * Find Relaxation Activity
// Gen function to search for relaxation activity
function* findRelaxationActivity() {
  try {
    // Fetching relaxation activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/relaxation`
    );

    // Accessing response data (relaxation activity)
    const relaxationActivity: Activity = response.data;

    // Dispatch action to set new relaxation activity
    yield put({
      type: "SET_RELAXATION_ACTIVITY",
      payload: relaxationActivity,
    });
  } catch (error) {
    console.error("\nError finding relaxation activity:", error);
  }
} // * end findRelaxationActivity;

// * Find Busywork Activity
// Gen function to search for busywork activity
function* findBusyworkActivity() {
  try {
    // Fetching busywork activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/busywork`
    );

    // Accessing response data (busywork activity)
    const busyworkActivity: Activity = response.data;

    // Dispatch action to set new relaxation activity
    yield put({
      type: "SET_BUSYWORK_ACTIVITY",
      payload: busyworkActivity,
    });
  } catch (error) {
    console.error("\nError finding busywork activity:", error);
  }
} // * end findBusyworkActivity;

// * Find Music Activity
// Gen function to search for music activity
function* findMusicActivity() {
  try {
    // Fetching music activity
    const response: AxiosResponse<Activity> = yield axios.get(
      `/bored/activity/music`
    );

    // Accessing response data (music activity)
    const musicActivity: Activity = response.data;

    // Dispatch action to set new music activity
    yield put({
      type: "SET_MUSIC_ACTIVITY",
      payload: musicActivity,
    });
  } catch (error) {
    console.error("\nError finding music activity:", error);
  }
} // * end findMusicActivity;
