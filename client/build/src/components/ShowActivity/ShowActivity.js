"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// * - ShowActivity COMPONENT -
const ShowActivity = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mt-8  flex max-w-xl flex-col justify-center rounded-lg border border-black bg-white p-4 shadow-[4px_8px_30px_-5px_rgba(0,0,0,0.3)]" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl" }, { children: "Activity" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: " text-xl" }, { children: "Learn a new language" }))] })) }));
}; // * - END ShowActivity COMPONENT -
// * Exporting ShowActivity Component
exports.default = ShowActivity;
