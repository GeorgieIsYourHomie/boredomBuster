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
    // Find social activity
    yield (0, effects_1.takeLatest)("FIND_SOCIAL_ACTIVITY", findSocialActivity);
    // Find educational activity
    yield (0, effects_1.takeLatest)("FIND_EDUCATION_ACTIVITY", findEducationalActivity);
    // Find DIY activity
    yield (0, effects_1.takeLatest)("FIND_DIY_ACTIVITY", findDIYActivity);
    // Find cooking activity
    yield (0, effects_1.takeLatest)("FIND_COOKING_ACTIVITY", findCookingActivity);
    // Find charity activity
    yield (0, effects_1.takeLatest)("FIND_CHARITY_ACTIVITY", findCharityActivity);
    // Find relaxation activity
    yield (0, effects_1.takeLatest)("FIND_RELAXATION_ACTIVITY", findRelaxationActivity);
    // Find busywork activity
    yield (0, effects_1.takeLatest)("FIND_BUSYWORK_ACTIVITY", findBusyworkActivity);
    // Find music activity
    yield (0, effects_1.takeLatest)("FIND_MUSIC_ACTIVITY", findMusicActivity);
} // * end categoriesSaga
exports.default = categoriesSaga;
// * - ACTION SAGAS -
// * Clear Category Reducer States
// Gen function to clear all category reducer states if false
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
} // * end findRandomActivity
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
} // * end findRecreationalActivity
// * Find Social Activity
// Gen function to search for social activity
function* findSocialActivity() {
    try {
        // Fetching social activity
        const response = yield axios_1.default.get(`/bored/activity/social`);
        // Accessing response data (social activity)
        const socialActivity = response.data;
        // Dispatch action to set new social activity
        yield (0, effects_1.put)({
            type: "SET_SOCIAL_ACTIVITY",
            payload: socialActivity,
        });
    }
    catch (error) {
        console.error("\nError finding social activity:", error);
    }
} // * end findSocialActivity;
// * Find Educational Activity
// Gen function to search for educational activity
function* findEducationalActivity() {
    try {
        // Fetching educational activity
        const response = yield axios_1.default.get(`/bored/activity/education`);
        // Accessing response data (educational activity)
        const educationalActivity = response.data;
        // Dispatch action to set new educational activity
        yield (0, effects_1.put)({
            type: "SET_EDUCATIONAL_ACTIVITY",
            payload: educationalActivity,
        });
    }
    catch (error) {
        console.error("\nError finding educational activity:", error);
    }
} // * end findEducationalActivity;
// * Find DIY Activity
// Gen function to search for DIY activity
function* findDIYActivity() {
    try {
        // Fetching DIY activity
        const response = yield axios_1.default.get(`/bored/activity/diy`);
        // Accessing response data (DIY activity)
        const DIYActivity = response.data;
        // Dispatch action to set new DIY activity
        yield (0, effects_1.put)({
            type: "SET_DIY_ACTIVITY",
            payload: DIYActivity,
        });
    }
    catch (error) {
        console.error("\nError finding DIY activity:", error);
    }
} // * end findDIYActivity;
// * Find Cooking Activity
// Gen function to search for cooking activity
function* findCookingActivity() {
    try {
        // Fetching cooking activity
        const response = yield axios_1.default.get(`/bored/activity/cooking`);
        // Accessing response data (cooking activity)
        const cookingActivity = response.data;
        // Dispatch action to set new cooking activity
        yield (0, effects_1.put)({
            type: "SET_COOKING_ACTIVITY",
            payload: cookingActivity,
        });
    }
    catch (error) {
        console.error("\nError finding cooking activity:", error);
    }
} // * end findCookingActivity;
// * Find Charity Activity
// Gen function to search for charity activity
function* findCharityActivity() {
    try {
        // Fetching charity activity
        const response = yield axios_1.default.get(`/bored/activity/charity`);
        // Accessing response data (charity activity)
        const charityActivity = response.data;
        // Dispatch action to set new cooking activity
        yield (0, effects_1.put)({
            type: "SET_CHARITY_ACTIVITY",
            payload: charityActivity,
        });
    }
    catch (error) {
        console.error("\nError finding charity activity:", error);
    }
} // * end findCharityActivity;
// * Find Relaxation Activity
// Gen function to search for relaxation activity
function* findRelaxationActivity() {
    try {
        // Fetching relaxation activity
        const response = yield axios_1.default.get(`/bored/activity/relaxation`);
        // Accessing response data (relaxation activity)
        const relaxationActivity = response.data;
        // Dispatch action to set new relaxation activity
        yield (0, effects_1.put)({
            type: "SET_RELAXATION_ACTIVITY",
            payload: relaxationActivity,
        });
    }
    catch (error) {
        console.error("\nError finding relaxation activity:", error);
    }
} // * end findRelaxationActivity;
// * Find Busywork Activity
// Gen function to search for busywork activity
function* findBusyworkActivity() {
    try {
        // Fetching busywork activity
        const response = yield axios_1.default.get(`/bored/activity/busywork`);
        // Accessing response data (busywork activity)
        const busyworkActivity = response.data;
        // Dispatch action to set new relaxation activity
        yield (0, effects_1.put)({
            type: "SET_BUSYWORK_ACTIVITY",
            payload: busyworkActivity,
        });
    }
    catch (error) {
        console.error("\nError finding busywork activity:", error);
    }
} // * end findBusyworkActivity;
// * Find Music Activity
// Gen function to search for music activity
function* findMusicActivity() {
    try {
        // Fetching music activity
        const response = yield axios_1.default.get(`/bored/activity/music`);
        // Accessing response data (music activity)
        const musicActivity = response.data;
        // Dispatch action to set new music activity
        yield (0, effects_1.put)({
            type: "SET_MUSIC_ACTIVITY",
            payload: musicActivity,
        });
    }
    catch (error) {
        console.error("\nError finding music activity:", error);
    }
} // * end findMusicActivity;
