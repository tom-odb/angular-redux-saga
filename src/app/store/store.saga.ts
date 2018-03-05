import { default as createSagaMiddleware, SagaMiddleware } from "redux-saga";
import { all } from "redux-saga/effects";

import { todoSaga } from "../todo/store";

import { AppState } from "./store.types";

export function* rootSaga() {
  yield all([
    ...todoSaga,
  ]);
}

export const sagaMiddleware: SagaMiddleware<AppState> = createSagaMiddleware();
