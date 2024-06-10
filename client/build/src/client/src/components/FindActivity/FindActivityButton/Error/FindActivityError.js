"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// Hooks
const reduxHook_1 = require("../../../../hooks/reduxHook/reduxHook");
// * - FindActivityError COMPONENT -
const FindActivityError = () => {
    // * - DECLARATIONS -
    const errorPrompt = (0, reduxHook_1.useAppSelector)((store) => store.errorReducer.errorPrompt);
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: errorPrompt && ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: "mt-8 font-sans text-lg text-rose-600" }, { children: errorPrompt }))) }));
};
// * Exporting FindActivityError
exports.default = FindActivityError;
