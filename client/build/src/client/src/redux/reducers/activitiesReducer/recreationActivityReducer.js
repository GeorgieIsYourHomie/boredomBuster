"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    recreationActivity: null, // Null initial value
};
// * - Recreation ACTIVITY REDUCER -
const recreationActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RECREATIONAL_ACTIVITY":
            // Setting new activity
            const newRecreationActivity = action.payload;
            return Object.assign(Object.assign({}, state), { recreationActivity: newRecreationActivity });
        case "CLEAR_RECREATION_CATEGORY":
            const noRecreationalActivity = null;
            return Object.assign(Object.assign({}, state), { recreationActivity: noRecreationalActivity });
        default:
            return state;
    }
};
// * Exporting recreationActivityReducer
exports.default = recreationActivityReducer;
