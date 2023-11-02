"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
const react_1 = __importStar(require("react"));
// Category Style
const categoryButtonStyle_1 = require("../../../../Styles/category/categoryButtonStyle");
// Custom Hook
const categoryState_1 = require("../../../../hooks/category/categoryState");
// * - CategoryItem COMPONENT -
const CategoryItem = ({ category }) => {
    // * - STATE -
    // For setting the category style on click
    const [categoryButtonStyling, setCategoryButtonStyling] = (0, react_1.useState)(false);
    // * - DECLARATIONS -
    // Category class assignment for styling
    const categoryClass = (0, categoryButtonStyle_1.setCategoryButtonStyle)(category, categoryButtonStyling);
    // All chosen categories state
    const { chosenCategories } = (0, categoryState_1.useCategoryState)();
    // Categories use state hook
    const categoryStateHook = (0, categoryState_1.useCategoryState)();
    // * FUNCTIONS
    // Selecting category
    const selectCategory = (event) => {
        // Prevent default event
        event.preventDefault();
        // Set the selected category as previous state (true/false)
        setCategoryButtonStyling(!categoryButtonStyling);
        // Function called here to toggle selected category state
        categoryStateHook.toggleCategory(category);
    };
    // * Use useEffect to log the updated state
    (0, react_1.useEffect)(() => {
        console.log(`Category: ${category}, State: ${categoryStateHook.selectedCategories[category]}`);
        console.log("chosenCategories is:", chosenCategories);
    }, [categoryStateHook.selectedCategories, chosenCategories, category]);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: categoryClass, onClick: selectCategory }, { children: category })) }));
};
// * Exporting CategoryItem Component
exports.default = CategoryItem;
