"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    busyworkActivity: null, // Null initial value
};
// * - BUSYWORK ACTIVITY REDUCER -
const busyworkActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BUSYWORK_ACTIVITY":
            // Setting new activity
            const newBusyworkActivity = action.payload;
            return Object.assign(Object.assign({}, state), { busyworkActivity: newBusyworkActivity });
        case "CLEAR_BUSYWORK_CATEGORY":
            const noBusyworkActivity = null;
            return Object.assign(Object.assign({}, state), { busyworkActivity: noBusyworkActivity });
        default:
            return state;
    }
};
// * Exporting busyworkActivityReducer
exports.default = busyworkActivityReducer;
