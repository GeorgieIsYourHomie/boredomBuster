"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING -
// Redux
const toolkit_1 = require("@reduxjs/toolkit");
// Reducers
const errorReducer_1 = __importDefault(require("./errorReducer"));
const randomActivityReducer_1 = __importDefault(require("./activitiesReducer/randomActivityReducer"));
const recreationActivityReducer_1 = __importDefault(require("./activitiesReducer/recreationActivityReducer"));
const showActivityReducer_1 = __importDefault(require("./showActivityReducer"));
// * - Root Reducer -
const rootReducer = (0, toolkit_1.combineReducers)({
    errorReducer: errorReducer_1.default,
    randomActivityReducer: randomActivityReducer_1.default,
    recreationActivityReducer: recreationActivityReducer_1.default,
    toggleShowActivityReducer: showActivityReducer_1.default,
}); // * end rootReducer
// * Exporting rootReducer
exports.default = rootReducer;
