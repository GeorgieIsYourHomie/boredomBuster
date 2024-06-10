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
// Utils
// import handleClearCategoryReducerState from "../../utils/handleClearCategoryReducerState";
// Components
const FindActivity_1 = __importDefault(require("../FindActivity/FindActivity"));
const NavBar_1 = __importDefault(require("../NavBar/NavBar"));
// * - App COMPONENT -
const App = () => {
    // * - DECLARATIONS -
    // Categories state hook function and state
    const { selectedCategories, chosenCategories, toggleCategory } = (0, categoryStateHook_1.useCategoryState)();
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-100 mx-auto my-6 flex w-full flex-col justify-center p-8 px-6 md:max-w-4xl" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(NavBar_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "floating w-100 my-2.5" }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "mb-4 max-w-6xl", src: "images/boredom-buster-logo.svg", alt: "Logo design of Boredom Buster app, sans-serif font with outlined symbol of explosion." }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "font-sans" }, { children: "Discover a world of fun and engaging activities with Boredom Buster!\uD83D\uDCA5 Simply select categories you\u2019re interested in, give the button a quick click, and you\u2019ll instantly get a random activity suggestion. It\u2019s the perfect way to quickly find something exciting to do, busting your boredom with ease!" }))] }))] }), (0, jsx_runtime_1.jsx)("main", Object.assign({ className: "mt-10 flex w-full flex-col justify-center text-center" }, { children: (0, jsx_runtime_1.jsx)(FindActivity_1.default, { selectedCategories: selectedCategories, chosenCategories: chosenCategories, toggleCategory: toggleCategory }) }))] })));
}; // * - END App COMPONENT -
// * Exporting App Component
exports.default = App;
