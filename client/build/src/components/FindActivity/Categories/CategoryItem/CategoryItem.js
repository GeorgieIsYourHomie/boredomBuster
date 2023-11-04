"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
// Category Style
const categoryButtonStyle_1 = require("../../../../Styles/category/categoryButtonStyle");
// * - CategoryItem COMPONENT -
const CategoryItem = ({ category, selectedCategories, chosenCategories, toggleCategory, }) => {
    // * - STATE -
    // For setting the category style on click
    const [categoryButtonStyling, setCategoryButtonStyling] = (0, react_2.useState)(false);
    // * - DECLARATIONS -
    // Category class assignment for styling
    const categoryClass = (0, categoryButtonStyle_1.setCategoryButtonStyle)(category, categoryButtonStyling);
    // * FUNCTIONS
    // Selecting category
    const selectCategory = (event) => {
        // Prevent default event
        event.preventDefault();
        // Set the selected category as previous state (true/false)
        setCategoryButtonStyling(!categoryButtonStyling);
        // Function called here to toggle selected category state
        toggleCategory(category);
    };
    // * Use useEffect to log the updated state
    (0, react_2.useEffect)(() => {
        console.log(`Category: ${category}, State: ${selectedCategories[category]}`);
        console.log("chosenCategories is:", chosenCategories);
    }, [selectedCategories, chosenCategories, category]);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: categoryClass, onClick: selectCategory }, { children: category })) }));
};
// * Exporting CategoryItem Component
exports.default = CategoryItem;
