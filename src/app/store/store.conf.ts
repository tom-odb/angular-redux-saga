import { combineReducers, applyMiddleware, Middleware } from "redux";

import { AppState } from "./store.types";
import { sagaMiddleware } from "./store.saga";
import { todoReducers, TODO_INITIAL_STATE } from "../todo/store";

export const rootReducer = combineReducers<AppState>({
  ...todoReducers,
});

export const middlewares: Middleware[] = [
  sagaMiddleware,
];

export const initialState: AppState = {
  ...TODO_INITIAL_STATE,
};

export default {
  rootReducer,
  middlewares,
  initialState,
};
