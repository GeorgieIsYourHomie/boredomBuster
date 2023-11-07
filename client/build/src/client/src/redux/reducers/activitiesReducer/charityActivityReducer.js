"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    charityActivity: null, // Null initial value
};
// * - CHARITY ACTIVITY REDUCER -
const charityActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CHARITY_ACTIVITY":
            // Setting new activity
            const newCharityActivity = action.payload;
            return Object.assign(Object.assign({}, state), { charityActivity: newCharityActivity });
        case "CLEAR_CHARITY_CATEGORY":
            const noCharityActivity = null;
            return Object.assign(Object.assign({}, state), { charityActivity: noCharityActivity });
        default:
            return state;
    }
};
// * Exporting charityActivityReducer
exports.default = charityActivityReducer;
