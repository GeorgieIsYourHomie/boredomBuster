"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// CSS
require("./App.css");
// Components
const FindActivity_1 = __importDefault(require("../FindActivity/FindActivity"));
const ShowActivity_1 = __importDefault(require("../ShowActivity/ShowActivity"));
const NavBar_1 = __importDefault(require("../NavBar/NavBar"));
// * - App COMPONENT -
const App = () => {
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { border: "solid black 2px" } }, { children: (0, jsx_runtime_1.jsx)(NavBar_1.default, {}) })), (0, jsx_runtime_1.jsx)("h1", { children: "Boredom Buster" })] }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(FindActivity_1.default, {}), (0, jsx_runtime_1.jsx)(ShowActivity_1.default, {})] })] }));
}; // * - END App COMPONENT -
// * Exporting App Component
exports.default = App;
