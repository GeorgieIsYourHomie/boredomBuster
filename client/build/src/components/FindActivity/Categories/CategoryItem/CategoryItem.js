"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// * - CategoryItem COMPONENT -
const CategoryItem = ({ category }) => {
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("p", { children: category }) }));
}; // * - END CategoryItem COMPONENT -
// * Exporting CategoryItem Component
exports.default = CategoryItem;
