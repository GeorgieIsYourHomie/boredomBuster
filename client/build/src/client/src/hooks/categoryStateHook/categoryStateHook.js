"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCategoryState = void 0;
// * - IMPORTING -
// React
const react_1 = require("react");
// * - useCategoryState HOOK -
const useCategoryState = () => {
    // * - STATE -
    // All categories selected/unselected
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
    // Chosen categories, selected/unselected
    const [chosenCategories, setChosenCategories] = (0, react_1.useState)([]);
    // * - FUNCTIONS -
    // * Function to toggle chosen category
    const toggleChosenCategory = (category) => {
        setChosenCategories((prevChosenCategories) => {
            const isCategorySelected = prevChosenCategories.includes(category);
            if (isCategorySelected) {
                // Return a new array without the category
                return prevChosenCategories.filter((chosenCategory) => chosenCategory !== category);
            }
            else {
                // Return a new array with the added category
                return [...prevChosenCategories, category];
            }
        });
    };
    // * Function to toggle selected category
    const toggleCategory = (category) => {
        // Updating the state for all categories
        setSelectedCategories((prevState) => (Object.assign(Object.assign({}, prevState), { [category]: !prevState[category] })));
        // Toggle chosen category in the array
        toggleChosenCategory(category);
    };
    return {
        selectedCategories,
        chosenCategories,
        toggleCategory,
    };
};
exports.useCategoryState = useCategoryState;
