"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
const CategoryItem_1 = __importDefault(require("./CategoryItem/CategoryItem"));
// * - Categories COMPONENT -
const Categories = () => {
    // Array of all categories
    const Categories = [
        "education",
        "recreational",
        "social",
        "diy",
        "charity",
        "cooking",
        "relaxation",
        "music",
        "busywork",
    ];
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { children: Categories.map((category) => {
                return (0, jsx_runtime_1.jsx)(CategoryItem_1.default, { category: category }, category);
            }) }) }));
}; // * - END Categories COMPONENT -
// * Exporting Categories Component
exports.default = Categories;
