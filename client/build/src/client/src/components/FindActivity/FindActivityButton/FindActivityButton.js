"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// Redux
const reduxHook_1 = require("../../../hooks/reduxHook/reduxHook");
// * - FindActivityButton COMPONENT -
const FindActivityButton = ({ chosenCategories }) => {
    // * - DECLARATIONS -
    const dispatch = (0, reduxHook_1.useAppDispatch)();
    // * - FUNCTIONS -
    // * Function to loop through chosenCategories
    //  If value matches any category, send dispatch
    const handleFindActivityButton = (event) => {
        event.preventDefault();
        console.log("chosenCategories are:", chosenCategories);
        // chosenCategories true, dispatch action,
        // otherwise toggle on prompt
        if (chosenCategories && chosenCategories.length > 0) {
            // Dispatching action and payload of chosenCategories for activities
            dispatch({
                type: "SEARCH_CHOSEN_CATEGORIES_ACTIVITY",
                payload: chosenCategories,
            });
            // Dispatching action to clear errors
            dispatch({
                type: "NO_ERRORS",
            });
        }
        else if (chosenCategories && (chosenCategories === null || chosenCategories === void 0 ? void 0 : chosenCategories.length) === 0) {
            // Error prompt dispatch here if no selected category
            dispatch({
                type: "SELECT_A_CATEGORY",
            });
            console.log("Please select a category.");
        }
        else {
            return;
        }
    }; // * end handleFindActivityButton
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mb-2" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleFindActivityButton, className: "mb-8 mt-14 transform rounded-full bg-indigo-700 px-10 py-2 text-2xl text-white shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-transform duration-150 hover:scale-110 hover:border hover:border-black hover:bg-white hover:text-black hover:shadow-[0px_9px_30px_-4px_rgba(74,63,205)] active:scale-75" }, { children: "Find Activity" })) })) }));
}; // * - END FindActivityButton COMPONENT -
// * Exporting FindActivityButton Component
exports.default = FindActivityButton;
