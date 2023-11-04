"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// * - IMPORTING -
// React
const react_1 = __importDefault(require("react"));
// React DOM
const client_1 = __importDefault(require("react-dom/client"));
// Redux
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./redux/store"));
// Tailwind compiled file
require("../src/output.css");
// CSS
require("./index.css");
// Components
const App_1 = __importDefault(require("./components/App/App"));
// * Connects root html to React
const root = client_1.default.createRoot(document.getElementById("root"));
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.default }, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) })) }));
