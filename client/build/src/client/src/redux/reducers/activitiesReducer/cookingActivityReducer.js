"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    cookingActivity: null, // Null initial value
};
// * - COOKING ACTIVITY REDUCER -
const cookingActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COOKING_ACTIVITY":
            // Setting new activity
            const newCookingActivity = action.payload;
            return Object.assign(Object.assign({}, state), { cookingActivity: newCookingActivity });
        case "CLEAR_COOKING_CATEGORY":
            const noCookingActivity = null;
            return Object.assign(Object.assign({}, state), { cookingActivity: noCookingActivity });
        default:
            return state;
    }
};
// * Exporting cookingActivityReducer
exports.default = cookingActivityReducer;
