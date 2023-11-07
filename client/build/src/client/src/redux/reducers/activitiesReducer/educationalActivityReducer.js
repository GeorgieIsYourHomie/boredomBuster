"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    educationalActivity: null, // Null initial value
};
// * - Educational ACTIVITY REDUCER -
const educationalActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EDUCATIONAL_ACTIVITY":
            // Setting new activity
            const educationalActivity = action.payload;
            return Object.assign(Object.assign({}, state), { educationalActivity: educationalActivity });
        case "CLEAR_EDUCATION_CATEGORY":
            const noEducationalActivity = null;
            return Object.assign(Object.assign({}, state), { educationalActivity: noEducationalActivity });
        default:
            return state;
    }
};
// * Exporting educationalActivityReducer
exports.default = educationalActivityReducer;
