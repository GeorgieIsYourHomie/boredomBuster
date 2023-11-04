// src/redux/rootSaga.ts
import { all } from "redux-saga/effects";
// Import your individual sagas here
// import { watchSomeFeatureSaga } from '../features/someFeature/sagas';
import checklistsSaga from "./categoriesSaga";

export default function* rootSaga() {
  yield all([
    // watchSomeFeatureSaga(),
    // Add other sagas here
    checklistsSaga(),
  ]);
}
