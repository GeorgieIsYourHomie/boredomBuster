"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
const react_1 = require("react");
require("./App.css");
// * - App COMPONENT -
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsx)("h1", { children: "Boredom Buster" }) }) }));
};
// * Exporting App Component
exports.default = App;
