"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/redux/rootSaga.ts
const effects_1 = require("redux-saga/effects");
// Import your individual sagas here
// import { watchSomeFeatureSaga } from '../features/someFeature/sagas';
const categoriesSaga_1 = __importDefault(require("./categoriesSaga"));
function* rootSaga() {
    yield (0, effects_1.all)([
        // watchSomeFeatureSaga(),
        // Add other sagas here
        (0, categoriesSaga_1.default)(),
    ]);
}
exports.default = rootSaga;
