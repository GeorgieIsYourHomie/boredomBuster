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
    // Random activity reducer
    const randomActivity = (0, reduxHook_1.useAppSelector)((store) => store.randomActivityReducer.randomActivity);
    // Recreation activity reducer
    const recreationActivity = (0, reduxHook_1.useAppSelector)((store) => store.recreationActivityReducer.recreationActivity);
    console.log("recreationActivity is:", recreationActivity);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl" }, { children: "Activities" })), !randomActivity && !recreationActivity && (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-lg" }, { children: "Find a fun activity to do!" })), randomActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-rose-600" }, { children: "Random:" })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "text-xl" }, { children: [randomActivity.activity, "."] }))] })), recreationActivity && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "mt-3 text-2xl font-semibold text-orange-600" }, { children: "Recreational:" })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "text-xl" }, { children: [recreationActivity.activity, "."] }))] }))] })) }));
}; // * - END ShowActivity COMPONENT -
// * Exporting ShowActivity Component
exports.default = ShowActivity;
