// * - IMPORTING -
// Redux
import { put } from "redux-saga/effects";
// Types
import { SelectedCategoriesState } from "../types/categories/CategoryTypes";

// Function to clear category redux state
// loop on selectedCategories object
// Switch util function: case category value false, dispatch action to category reducer to clear
// * - handleClearCategoryReduxState GEN FUNCTION -
// A generator function to handle dispatching find activity actions
function* handleClearCategoryReduxState(
  selectedCategories: SelectedCategoriesState
) {
  // Logging
  console.log("\nSelected categories is:", selectedCategories);
  console.log("\nSelected category 'Random' is:", selectedCategories.Random);

  // Declaring array of selected categories
  const selectedCategoriesArray: string[] = [];

  // Discerning category for finding activities
  for (let category in selectedCategories) {
    // Placing all in array
    selectedCategoriesArray.push(category);

    //  another for loop iterating through selectedCategories
    for (let category of selectedCategoriesArray) {
      // Logging
      console.log(
        "\nsecond loop, category of selectedCategoriesArray is:",
        category
      );
      console.log(
        "second loop, selectedCategories.Random is:",
        selectedCategories.Random
      );
      //  if false send dispatch action to clear category
      if (!selectedCategories.category) {
        // Uppercase all category letters
        let categoryAction = category.toUpperCase();

        console.log("uppercase category action is:", categoryAction);

        // Dispatch action to clear category redux state
        yield put({ type: `CLEAR_${categoryAction}_CATEGORY` });
      }
    }
  }
} // * end handleClearCategoryReduxState

// * Exporting handleClearCategoryReduxState
export default handleClearCategoryReduxState;
