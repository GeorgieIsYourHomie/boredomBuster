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
const reduxHook_1 = require("../../hooks/reduxHook/reduxHook");
// Components
const FindActivityButton_1 = __importDefault(require("./FindActivityButton/FindActivityButton"));
const Categories_1 = __importDefault(require("./Categories/Categories"));
const FindActivityError_1 = __importDefault(require("./FindActivityButton/Error/FindActivityError"));
const ShowActivity_1 = __importDefault(require("../ShowActivity/ShowActivity"));
// * - FindActivityButton COMPONENT -
const FindActivity = ({ selectedCategories, chosenCategories, toggleCategory, }) => {
    // * - DECLARATIONS -
    // toggleShowActivity reducer
    const toggleShowActivity = (0, reduxHook_1.useAppSelector)((store) => store.toggleShowActivityReducer.toggleShowActivity);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-full rounded-2xl border-2 border-black bg-white p-7 shadow-[24px_32px_0px_2px_rgba(0,0,0,90)]" }, { children: [(0, jsx_runtime_1.jsx)(Categories_1.default, { selectedCategories: selectedCategories, chosenCategories: chosenCategories, toggleCategory: toggleCategory }), (0, jsx_runtime_1.jsx)(FindActivityError_1.default, {}), (0, jsx_runtime_1.jsx)(FindActivityButton_1.default, { chosenCategories: chosenCategories }), toggleShowActivity && chosenCategories && chosenCategories.length > 0 && (0, jsx_runtime_1.jsx)(ShowActivity_1.default, {})] })) }));
}; // * - END FindActivityButton COMPONENT -
// * Exporting FindActivityButton Component
exports.default = FindActivity;
