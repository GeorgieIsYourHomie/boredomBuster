"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// Components
const TechStack_1 = __importDefault(require("./TechStack/TechStack"));
const LinkedIn_1 = __importDefault(require("./LinkedIn/LinkedIn"));
const GitHub_1 = __importDefault(require("./GitHub/GitHub"));
// * - NavBar COMPONENT -
const NavBar = () => {
    // * - DECLARATIONS -
    // Declaring nav bar button styling
    const navBarButtonStyle = "transform rounded-full border border-black bg-black px-3 text-xs text-black text-white shadow-[0px_9px_30px_-10px_rgba(74,63,205)] transition-colors transition-transform duration-150 hover:bg-white hover:text-black hover:shadow-[0px_9px_30px_-4px_rgba(20,20,20)] active:scale-75  md:text-lg md:shadow-none";
    // * - RENDERING -
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-8 flex flex-row justify-center gap-8" }, { children: [(0, jsx_runtime_1.jsx)(TechStack_1.default, { navBarButtonStyle: navBarButtonStyle }), (0, jsx_runtime_1.jsx)(LinkedIn_1.default, { navBarButtonStyle: navBarButtonStyle }), (0, jsx_runtime_1.jsx)(GitHub_1.default, { navBarButtonStyle: navBarButtonStyle })] })) }));
}; // * - END NavBar COMPONENT -
// * Exporting Navbar Component
exports.default = NavBar;
