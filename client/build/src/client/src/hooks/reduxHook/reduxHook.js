"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = exports.useAppDispatch = void 0;
// * - IMPORTING -
// This hook is for
// Redux
const react_redux_1 = require("react-redux");
// * - REDUX HOOKS -
// Use throughout app instead of plain `useDispatch` and `useSelector` due to TypeScript
exports.useAppDispatch = react_redux_1.useDispatch;
exports.useAppSelector = react_redux_1.useSelector;
