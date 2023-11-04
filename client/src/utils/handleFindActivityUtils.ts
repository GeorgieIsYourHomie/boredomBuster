// * - IMPORTING -
// Redux Saga
import { put } from "redux-saga/effects";
// Types
import type { ChosenCategories } from "../types/categories/CategoryTypes";

// * - handleFindActivityUtils GEN FUNCTION -
// A generator function to handle dispatching find activity actions
function* handleFindActivityUtils(chosenCategories: ChosenCategories) {
  if (chosenCategories) {
    // Discerning category for finding activities
    for (let chosenCategory of chosenCategories) {
      switch (chosenCategory) {
        case "Random":
          yield put({
            type: "FIND_RANDOM_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Recreation":
          yield put({
            type: "FIND_RECREATION_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Social":
          yield put({
            type: "FIND_SOCIAL_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Education":
          yield put({
            type: "FIND_EDUCATION_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "DIY":
          yield put({
            type: "FIND_DIY_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Cooking":
          yield put({
            type: "FIND_COOKING_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Charity":
          yield put({
            type: "FIND_CHARITY_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Relaxation":
          yield put({
            type: "FIND_RELAXATION_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Busywork":
          yield put({
            type: "FIND_BUSYWORK_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        case "Music":
          yield put({
            type: "FIND_MUSIC_ACTIVITY",
            payload: chosenCategory,
          });
          break;
        default:
          break;
      }
    }
  }
} // * end handleFindActivityUtils

// * Exporting handleFindActivityUtils
export default handleFindActivityUtils;
