"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Properly typed initial state for the reducer
const initialState = {
    socialActivity: null, // Null initial value
};
// * - Social ACTIVITY REDUCER -
const socialActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SOCIAL_ACTIVITY":
            // Setting new activity
            const socialActivity = action.payload;
            return Object.assign(Object.assign({}, state), { socialActivity: socialActivity });
        case "CLEAR_SOCIAL_CATEGORY":
            const noSocialActivity = null;
            return Object.assign(Object.assign({}, state), { socialActivity: noSocialActivity });
        default:
            return state;
    }
};
// * Exporting socialActivityReducer
exports.default = socialActivityReducer;
