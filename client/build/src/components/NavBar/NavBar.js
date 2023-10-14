"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
const TechStack_1 = __importDefault(require("./TechStack/TechStack"));
const LinkedIn_1 = __importDefault(require("./LinkedIn/LinkedIn"));
const GitHub_1 = __importDefault(require("./GitHub/GitHub"));
// Components
// * - NavBar COMPONENT -
const NavBar = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: "flex", flexDirection: "row" } }, { children: [(0, jsx_runtime_1.jsx)(TechStack_1.default, {}), (0, jsx_runtime_1.jsx)(LinkedIn_1.default, {}), (0, jsx_runtime_1.jsx)(GitHub_1.default, {})] })) }));
}; // * - END NavBar COMPONENT -
// * Exporting Navbar Component
exports.default = NavBar;
