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
const handleClearCategoryReducerState_1 = __importDefault(require("../../utils/handleClearCategoryReducerState"));
// Axios
const axios_1 = __importDefault(require("axios"));
// * - LISTENER SAGA -
// * Categories Listener Saga
function* categoriesSaga() {
    // Clear category reducer states
    yield (0, effects_1.takeLatest)("CLEAR_CATEGORY_REDUCERS", clearCategoryReducerStates);
    // Find activities
    yield (0, effects_1.takeLatest)("SEARCH_CHOSEN_CATEGORIES_ACTIVITY", searchChosenCategoryActivity);
    // Find random activity
    yield (0, effects_1.takeLatest)("FIND_RANDOM_ACTIVITY", findRandomActivity);
    // Find recreational activity
    yield (0, effects_1.takeLatest)("FIND_RECREATION_ACTIVITY", findRecreationalActivity);
} // * end categoriesSaga
exports.default = categoriesSaga;
// * - ACTION SAGAS -
function* clearCategoryReducerStates(action) {
    const selectedCategories = action.payload;
    yield* (0, handleClearCategoryReducerState_1.default)(selectedCategories);
}
// * Find Activities
// Gen function to search for activities based on category
function* searchChosenCategoryActivity(action) {
    // Logging
    console.log(`\nsearchChosenCategoryActivity running due to action:
    "${action.type}"`);
    try {
        // Check if the payload is of type ChosenCategories (i.e., an array of strings)
        if (Array.isArray(action.payload)) {
            // Declaring chosen categories as payload
            const chosenCategories = action.payload;
            // Will find activity depending on the categories
            yield* (0, handleFindActivityUtils_1.default)(chosenCategories);
        }
        else {
            // Handle the case where payload is not ChosenCategories
            console.error("Payload is not an array of chosen categories:", action.payload);
        }
    }
    catch (error) {
        console.error("\nError finding activities based on categories:", error);
    }
} // * end searchChosenCategoryActivity
// * Find Random Activity
// Gen function to search for random activity
function* findRandomActivity() {
    try {
        // Fetching random activity
        const response = yield axios_1.default.get(`/bored/activity/random`);
        // Accessing response data (random activity)
        const randomActivity = response.data;
        // Dispatch action to set new random activity
        yield (0, effects_1.put)({ type: "SET_RANDOM_ACTIVITY", payload: randomActivity });
    }
    catch (error) {
        console.error("\nError finding random activity:", error);
    }
}
// * Find Recreational Activity
// Gen function to search for recreational activity
function* findRecreationalActivity() {
    try {
        // Fetching recreational activity
        const response = yield axios_1.default.get(`/bored/activity/recreation`);
        // Accessing response data (recreational activity)
        const recreationalActivity = response.data;
        // Dispatch action to set new recreational activity
        yield (0, effects_1.put)({
            type: "SET_RECREATIONAL_ACTIVITY",
            payload: recreationalActivity,
        });
    }
    catch (error) {
        console.error("\nError finding recreational activity:", error);
    }
}
