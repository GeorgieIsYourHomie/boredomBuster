"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
// Import your slice reducers here
// import someFeatureReducer from '../features/someFeature/someFeatureSlice';
const dummyReducer = (state = [], action) => [
    ...state,
    action,
];
const rootReducer = (0, toolkit_1.combineReducers)({
    // someFeature: someFeatureReducer,
    // Add other slice reducers here
    dummyReducer,
});
exports.default = rootReducer;
