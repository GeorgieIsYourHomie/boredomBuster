"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaring error prompts variable
let errorPrompt;
// * - ERROR REDUCER -
const errorReducer = (state = { errorPrompt }, action) => {
    switch (action.type) {
        case "SELECT_A_CATEGORY":
            // Setting new errorPrompt
            errorPrompt = "Please select a category!";
            return Object.assign(Object.assign({}, state), { errorPrompt });
        case "NO_ERRORS":
            // Clear errors
            errorPrompt = "";
            return Object.assign(Object.assign({}, state), { errorPrompt });
        default:
            return state;
    }
};
// * Exporting errorReducer
exports.default = errorReducer;
