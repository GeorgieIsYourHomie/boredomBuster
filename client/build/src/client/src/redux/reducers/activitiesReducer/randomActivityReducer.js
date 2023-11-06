"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    randomActivity: null, // Null initial value
};
// * - RANDOM ACTIVITY REDUCER -
const randomActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RANDOM_ACTIVITY":
            // Setting new activity
            const newRandomActivity = action.payload;
            return Object.assign(Object.assign({}, state), { randomActivity: newRandomActivity });
        case "CLEAR_RANDOM_CATEGORY":
            const noRandomActivity = null;
            return Object.assign(Object.assign({}, state), { randomActivity: noRandomActivity });
        default:
            return state;
    }
};
// * Exporting randomActivityReducer
exports.default = randomActivityReducer;
