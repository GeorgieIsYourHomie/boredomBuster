"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING -
// Redux
const toolkit_1 = require("@reduxjs/toolkit");
// Reducer
const errorReducer_1 = __importDefault(require("./errorReducer"));
// * - Root Reducer -
const rootReducer = (0, toolkit_1.combineReducers)({
    errorReducer: errorReducer_1.default,
}); // * end rootReducer
// * Exporting rootReducer
exports.default = rootReducer;
