"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING -
// Redux
const effects_1 = require("redux-saga/effects");
// Utils
const handleFindActivityUtils_1 = __importDefault(require("../../utils/handleFindActivityUtils"));
// Axios
const axios_1 = __importDefault(require("axios"));
// * - LISTENER SAGA -
// * Categories Listener Saga
function* categoriesSaga() {
    // Find activities
    yield (0, effects_1.takeLatest)("SEARCH_CHOSEN_CATEGORIES_ACTIVITY", searchChosenCategoryActivity);
    // Find random activity
    yield (0, effects_1.takeLatest)("FIND_RANDOM_ACTIVITY", findRandomActivity);
} // * end categoriesSaga
exports.default = categoriesSaga;
// * - ACTION SAGAS -
// * Find Activities
// Gen function to search for activities based on category
function* searchChosenCategoryActivity(action) {
    // Logging
    console.log(`\nsearchChosenCategoryActivity running due to action:
    "${action.type}"`);
    try {
        // Declaring chosen categories as payload
        const chosenCategories = action.payload;
        // Will find activity depending on the categories
        yield* (0, handleFindActivityUtils_1.default)(chosenCategories);
    }
    catch (error) {
        console.error("\nError finding activities based on categories:", error);
    }
} // * end searchChosenCategoryActivity
// * Find "Random Activity"
// Gen function to search for random activity
function* findRandomActivity(action) {
    // Logging
    console.log(`\findRandomActivity running due to action:
    "${action.type}"`);
    try {
        // Fetching random activity
        const response = yield axios_1.default.get(`/api/activity/random`);
        // Accessing response data (random activity)
        const randomActivity = response.data;
        console.log("randomActivity data is:", randomActivity);
        // // Dispatch action to store random activity the updated checklist
        // yield put({ type: "SET_RANDOM_ACTIVITY", payload: randomActivity });
    }
    catch (error) {
        console.error("\nError finding random activity:", error);
    }
}
