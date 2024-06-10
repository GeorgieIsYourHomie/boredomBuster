"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// Redux
const reduxHook_1 = require("../../hooks/reduxHook/reduxHook");
// * - ShowActivity COMPONENT -
const ShowActivity = () => {
    // * - DECLARATIONS -
    // Random activity reducer
    const randomActivity = (0, reduxHook_1.useAppSelector)((store) => store.randomActivityReducer.randomActivity);
    // Recreation activity reducer
    const recreationActivity = (0, reduxHook_1.useAppSelector)((store) => store.recreationActivityReducer.recreationActivity);
    // Recreation activity reducer
    const socialActivity = (0, reduxHook_1.useAppSelector)((store) => store.socialActivityReducer.socialActivity);
    // Educational activity reducer
    const educationalActivity = (0, reduxHook_1.useAppSelector)((store) => store.educationalActivityReducer.educationalActivity);
    // DIY activity reducer
    const DIYActivity = (0, reduxHook_1.useAppSelector)((store) => store.DIYActivityReducer.DIYActivity);
    // Cooking activity reducer
    const cookingActivity = (0, reduxHook_1.useAppSelector)((store) => store.cookingActivityReducer.cookingActivity);
    // Charity activity reducer
    const charityActivity = (0, reduxHook_1.useAppSelector)((store) => store.charityActivityReducer.charityActivity);
    // Relaxation activity reducer
    const relaxationActivity = (0, reduxHook_1.useAppSelector)((store) => store.relaxationActivityReducer.relaxationActivity);
    // Busywork activity reducer
    const busyworkActivity = (0, reduxHook_1.useAppSelector)((store) => store.busyworkActivityReducer.busyworkActivity);
    // Music activity reducer
    const musicActivity = (0, reduxHook_1.useAppSelector)((store) => store.musicActivityReducer.musicActivity);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl" }, { children: "Activities" })), !randomActivity &&
                    !recreationActivity &&
                    !socialActivity &&
                    !educationalActivity &&
                    !DIYActivity &&
                    !cookingActivity &&
                    !charityActivity &&
                    !relaxationActivity &&
                    !busyworkActivity &&
                    !musicActivity && ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: "font-sans text-lg" }, { children: "Find a fun activity to do!" }))), randomActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-rose-600" }, { children: "Random:" })), (0, jsx_runtime_1.jsxs)("p", { children: [randomActivity.activity, "."] })] })), recreationActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-orange-600" }, { children: "Recreational:" })), (0, jsx_runtime_1.jsxs)("p", { children: [recreationActivity.activity, "."] })] })), socialActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-green-600" }, { children: "Social:" })), (0, jsx_runtime_1.jsxs)("p", { children: [socialActivity.activity, "."] })] })), educationalActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-indigo-600" }, { children: "Educational:" })), (0, jsx_runtime_1.jsxs)("p", { children: [educationalActivity.activity, "."] })] })), DIYActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-rose-600" }, { children: "DIY:" })), (0, jsx_runtime_1.jsxs)("p", { children: [DIYActivity.activity, "."] })] })), cookingActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-orange-600" }, { children: "Cooking:" })), (0, jsx_runtime_1.jsxs)("p", { children: [cookingActivity.activity, "."] })] })), charityActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-green-600" }, { children: "Charity:" })), (0, jsx_runtime_1.jsxs)("p", { children: [charityActivity.activity, "."] })] })), relaxationActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-indigo-600" }, { children: "Relaxation:" })), (0, jsx_runtime_1.jsxs)("p", { children: [relaxationActivity.activity, "."] })] })), busyworkActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-rose-600" }, { children: "Busywork:" })), (0, jsx_runtime_1.jsxs)("p", { children: [busyworkActivity.activity, "."] })] })), musicActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-orange-600" }, { children: "Music:" })), (0, jsx_runtime_1.jsxs)("p", { children: [musicActivity.activity, "."] })] }))] }) }));
}; // * - END ShowActivity COMPONENT -
// * Exporting ShowActivity Component
exports.default = ShowActivity;
