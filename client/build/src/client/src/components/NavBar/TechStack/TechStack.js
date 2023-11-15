"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// React
const react_1 = __importStar(require("react"));
// * - TechStack COMPONENT -
const TechStack = ({ navBarButtonStyle }) => {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    // Event handler to toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: `${navBarButtonStyle}`, onClick: toggleDropdown }, { children: "Tech Stack" })), isDropdownOpen && ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: " w-44max-w-full absolute z-50 mt-2 rounded-2xl border-4 border-black bg-white p-7 " }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "JavaScript" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "TypeScript" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "React" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "NodeJS" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "TailwindCSS" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "HTML/CSS" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "transition-transform hover:scale-110" }, { children: "Redux" }))] })))] }) }));
}; // * - END TechStack COMPONENT -
// * Exporting TechStack Component
exports.default = TechStack;
