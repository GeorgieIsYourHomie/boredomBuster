"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    relaxationActivity: null, // Null initial value
};
// * - RELAXATION ACTIVITY REDUCER -
const relaxationActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RELAXATION_ACTIVITY":
            // Setting new activity
            const newRelaxationActivity = action.payload;
            return Object.assign(Object.assign({}, state), { relaxationActivity: newRelaxationActivity });
        case "CLEAR_RELAXATION_CATEGORY":
            const noRelaxationActivity = null;
            return Object.assign(Object.assign({}, state), { relaxationActivity: noRelaxationActivity });
        default:
            return state;
    }
};
// * Exporting relaxationActivityReducer
exports.default = relaxationActivityReducer;
