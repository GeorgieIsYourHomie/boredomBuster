"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING -
// Redux
const effects_1 = require("redux-saga/effects");
// Function to clear category redux state
// loop on selectedCategories object
// Switch util function: case category value false, dispatch action to category reducer to clear
// * - handleClearCategoryReduxState GEN FUNCTION -
// A generator function to handle dispatching find activity actions
function* handleClearCategoryReduxState(selectedCategories) {
    // Logging
    console.log("\nSelected categories is:", selectedCategories);
    console.log("\nSelected category 'Random' is:", selectedCategories.Random);
    // Declaring array of selected categories
    const selectedCategoriesArray = [];
    // Discerning category for finding activities
    for (let category in selectedCategories) {
        // Placing all in array
        selectedCategoriesArray.push(category);
        //  another for loop iterating through selectedCategories
        for (let category of selectedCategoriesArray) {
            // Logging
            console.log("\nsecond loop, category of selectedCategoriesArray is:", category);
            console.log("second loop, selectedCategories.Random is:", selectedCategories.Random);
            //  if false send dispatch action to clear category
            if (!selectedCategories.category) {
                // Uppercase all category letters
                let categoryAction = category.toUpperCase();
                console.log("uppercase category action is:", categoryAction);
                // Dispatch action to clear category redux state
                yield (0, effects_1.put)({ type: `CLEAR_${categoryAction}_CATEGORY` });
            }
        }
    }
} // * end handleClearCategoryReduxState
// * Exporting handleClearCategoryReduxState
exports.default = handleClearCategoryReduxState;
