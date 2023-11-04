"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = __importDefault(require("redux-saga"));
// import logger from "redux-logger";
const _rootReducer_1 = __importDefault(require("./reducers/_rootReducer"));
const _rootSaga_1 = __importDefault(require("./sagas/_rootSaga"));
const sagaMiddleware = (0, redux_saga_1.default)();
// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === "development" ? [sagaMiddleware] : [sagaMiddleware];
const store = (0, redux_1.createStore)(
// tells the saga middleware to use the rootReducer
// rootSaga contains all of our other reducers
_rootReducer_1.default, 
// adds all middleware to our project including saga and logger
(0, redux_1.applyMiddleware)(...middlewareList));
// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(_rootSaga_1.default);
exports.default = store;
