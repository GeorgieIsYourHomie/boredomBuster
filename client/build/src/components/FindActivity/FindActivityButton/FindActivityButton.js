"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// Category custom hook
const categoryState_1 = require("../../../hooks/category/categoryState");
// * - FindActivityButton COMPONENT -
const FindActivityButton = () => {
    // * - DECLARATIONS -
    // All chosen categories state
    const { chosenCategories } = (0, categoryState_1.useCategoryState)();
    // * - FUNCTIONS -
    // Function to loop through chosenCategories
    //  If value matches any category, send dispatch
    const handleFindActivityButton = () => {
        console.log("chosenCategories are:", chosenCategories);
    };
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mb-2" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleFindActivityButton, className: " m-6 mb-8 mt-12 transform rounded-full bg-indigo-700 px-10 py-2 text-2xl text-white shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-transform duration-150 hover:scale-110 hover:border hover:border-black hover:bg-white hover:text-black hover:shadow-[0px_9px_30px_-4px_rgba(74,63,205)] active:scale-75" }, { children: "Find Activity" })) })) }));
}; // * - END FindActivityButton COMPONENT -
// * Exporting FindActivityButton Component
exports.default = FindActivityButton;
