"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCategoryState = void 0;
// * - IMPORTING -
// React
const react_1 = require("react");
// * Custom hook for managing category state
const useCategoryState = () => {
    // * - STATE -
    // All categories
    const [selectedCategories, setSelectedCategories] = (0, react_1.useState)({
        Random: false,
        Recreation: false,
        Social: false,
        Education: false,
        DIY: false,
        Cooking: false,
        Charity: false,
        Relaxation: false,
        Busywork: false,
        Music: false,
    });
    // * Function to toggle selected category
    const toggleCategory = (category) => {
        // Targeting category by argument and setting it to the opposite value
        setSelectedCategories((prevState) => (Object.assign(Object.assign({}, prevState), { [category]: !prevState[category] })));
    };
    // * Returning category state and state toggle function
    return {
        selectedCategories,
        toggleCategory,
    };
};
exports.useCategoryState = useCategoryState;
