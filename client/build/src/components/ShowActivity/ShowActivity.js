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
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { border: "solid black 2px", boxSizing: "border-box" } }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Show activity here" }) })) }));
}; // * - END ShowActivity COMPONENT -
// * Exporting ShowActivity Component
exports.default = ShowActivity;
