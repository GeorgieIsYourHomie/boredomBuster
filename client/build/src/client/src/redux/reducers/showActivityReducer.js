"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaring error prompts variable
let initialState = {
    toggleShowActivity: false,
};
// * - ERROR REDUCER -
const toggleShowActivityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_ACTIVITY_ON":
            // Setting toggleShowActivity on
            const toggleShowActivityOn = true;
            return Object.assign(Object.assign({}, state), { toggleShowActivity: toggleShowActivityOn });
        case "TOGGLE_SHOW_ACTIVITY_OFF":
            // Setting toggleShowActivity off
            const toggleShowActivityOff = true;
            return Object.assign(Object.assign({}, state), { toggleShowActivity: toggleShowActivityOff });
        default:
            return state;
    }
};
// * Exporting toggleShowActivityReducer
exports.default = toggleShowActivityReducer;
