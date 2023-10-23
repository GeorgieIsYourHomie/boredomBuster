"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
const react_1 = __importDefault(require("react"));
// Components
const CategoryItem_1 = __importDefault(require("./CategoryItem/CategoryItem"));
// * - Categories COMPONENT -
const Categories = () => {
    // Array of all categories
    const categories = [
        "Random",
        "Recreation",
        "Social",
        "Education",
        "DIY",
        "Cooking",
        "Charity",
        "Relaxation",
        "Busywork",
        "Music",
    ];
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "mb-6 text-3xl" }, { children: "Select a Category" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex flex-wrap justify-center gap-4" }, { children: categories.map((category) => ((0, jsx_runtime_1.jsx)(CategoryItem_1.default, { category: category }, category))) }))] }));
};
// * Exporting Categories Component
exports.default = Categories;
