"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Redux
// import { useAppDispatch } from "../../hooks/reduxHook/reduxHook";
// CSS
require("./App.css");
// Hooks
const categoryStateHook_1 = require("../../hooks/categoryStateHook/categoryStateHook");
const reduxHook_1 = require("../../hooks/reduxHook/reduxHook");
// Utils
// import handleClearCategoryReducerState from "../../utils/handleClearCategoryReducerState";
// Components
const FindActivity_1 = __importDefault(require("../FindActivity/FindActivity"));
const ShowActivity_1 = __importDefault(require("../ShowActivity/ShowActivity"));
const NavBar_1 = __importDefault(require("../NavBar/NavBar"));
// * - App COMPONENT -
const App = () => {
    // * - DECLARATIONS -
    // Categories state hook function and state
    const { selectedCategories, chosenCategories, toggleCategory } = (0, categoryStateHook_1.useCategoryState)();
    // toggleShowActivity reducer
    const toggleShowActivity = (0, reduxHook_1.useAppSelector)((store) => store.toggleShowActivityReducer.toggleShowActivity);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-80 mx-auto my-3 flex w-full flex-col justify-center px-6 md:max-w-xl" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(NavBar_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "w-100 my-2.5" }, { children: (0, jsx_runtime_1.jsx)("img", { className: "floating max-w-6xl", src: "images/boredom-buster-logo.svg", alt: "Logo design of Boredom Buster app, sans-serif font with outlined symbol of explosion." }) }))] }), (0, jsx_runtime_1.jsxs)("main", Object.assign({ className: "mt-9 text-center" }, { children: [(0, jsx_runtime_1.jsx)(FindActivity_1.default, { selectedCategories: selectedCategories, chosenCategories: chosenCategories, toggleCategory: toggleCategory }), toggleShowActivity && chosenCategories.length > 0 && (0, jsx_runtime_1.jsx)(ShowActivity_1.default, {})] }))] })));
}; // * - END App COMPONENT -
// * Exporting App Component
exports.default = App;
