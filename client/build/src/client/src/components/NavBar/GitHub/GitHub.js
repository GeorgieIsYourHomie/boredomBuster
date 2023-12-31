"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// * - GitHub COMPONENT -
const GitHub = ({ navBarButtonStyle }) => {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: navBarButtonStyle }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://github.com/GeorgieIsYourHomie", rel: "noreferrer", target: "_blank" }, { children: "GitHub" })) })) }) }));
}; // * - END GitHub COMPONENT -
// * Exporting GitHub Component
exports.default = GitHub;
