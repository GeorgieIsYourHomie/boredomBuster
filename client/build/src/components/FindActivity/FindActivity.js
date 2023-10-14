"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// Components
const FindActivityButton_1 = __importDefault(require("./FindActivityButton/FindActivityButton"));
const Categories_1 = __importDefault(require("./Categories/Categories"));
// * - FindActivityButton COMPONENT -
const FindActivity = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { border: "solid black 3px" } }, { children: [(0, jsx_runtime_1.jsx)(FindActivityButton_1.default, {}), (0, jsx_runtime_1.jsx)(Categories_1.default, {})] })) }));
}; // * - END FindActivityButton COMPONENT -
// * Exporting FindActivityButton Component
exports.default = FindActivity;
