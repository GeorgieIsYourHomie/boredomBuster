"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    DIYActivity: null, // Null initial value
};
// * - DIY ACTIVITY REDUCER -
const DIYActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DIY_ACTIVITY":
            // Setting new activity
            const newDIYActivity = action.payload;
            return Object.assign(Object.assign({}, state), { DIYActivity: newDIYActivity });
        case "CLEAR_DIY_CATEGORY":
            const noDIYActivity = null;
            return Object.assign(Object.assign({}, state), { DIYActivity: noDIYActivity });
        default:
            return state;
    }
};
// * Exporting DIYActivityReducer
exports.default = DIYActivityReducer;
