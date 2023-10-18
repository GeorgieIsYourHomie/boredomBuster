"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// * - LinkedIn COMPONENT -
const LinkedIn = ({ navBarButtonStyle }) => {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://www.linkedin.com/in/georgio-harris-82370a239/", rel: "noreferrer", target: "_blank" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: navBarButtonStyle }, { children: "LinkedIn" })) })) }) }));
}; // * - END LinkedIn COMPONENT -
// * Exporting LinkedIn Component
exports.default = LinkedIn;
