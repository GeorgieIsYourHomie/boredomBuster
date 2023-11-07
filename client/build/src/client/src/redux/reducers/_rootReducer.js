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
const socialActivityReducer_1 = __importDefault(require("./activitiesReducer/socialActivityReducer"));
const educationalActivityReducer_1 = __importDefault(require("./activitiesReducer/educationalActivityReducer"));
const DIYActivityReducer_1 = __importDefault(require("./activitiesReducer/DIYActivityReducer"));
const cookingActivityReducer_1 = __importDefault(require("./activitiesReducer/cookingActivityReducer"));
const charityActivityReducer_1 = __importDefault(require("./activitiesReducer/charityActivityReducer"));
const relaxationActivityReducer_1 = __importDefault(require("./activitiesReducer/relaxationActivityReducer"));
const busyWorkActivityReducer_1 = __importDefault(require("./activitiesReducer/busyWorkActivityReducer"));
const musicActivityReducer_1 = __importDefault(require("./activitiesReducer/musicActivityReducer"));
// * - Root Reducer -
const rootReducer = (0, toolkit_1.combineReducers)({
    errorReducer: errorReducer_1.default,
    randomActivityReducer: randomActivityReducer_1.default,
    recreationActivityReducer: recreationActivityReducer_1.default,
    toggleShowActivityReducer: showActivityReducer_1.default,
    socialActivityReducer: socialActivityReducer_1.default,
    educationalActivityReducer: educationalActivityReducer_1.default,
    DIYActivityReducer: DIYActivityReducer_1.default,
    cookingActivityReducer: cookingActivityReducer_1.default,
    charityActivityReducer: charityActivityReducer_1.default,
    relaxationActivityReducer: relaxationActivityReducer_1.default,
    busyworkActivityReducer: busyWorkActivityReducer_1.default,
    musicActivityReducer: musicActivityReducer_1.default
}); // * end rootReducer
// * Exporting rootReducer
exports.default = rootReducer;
