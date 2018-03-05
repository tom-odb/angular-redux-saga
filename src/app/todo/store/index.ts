import { TODOS_INITIAL_STATE } from "./todos/todos.initial-state";
import { todosReducer } from "./todos/todos.reducer";
import { todosSaga } from "./todos/todos.saga";
import { TodoState } from "./store.types";

export { TodoState } from "./store.types";
export { TodosActioncreator } from "./todos/todos.actioncreator";
export { loadTodos } from "./todos/todos.actions";
export { TODOS_FETCH, TODOS_LOAD } from "./todos/todos.actiontypes";
export { TodosAction, TodosState } from "./todos/todos.types";

export const todoReducers = {
  todos: todosReducer,
};

export const TODO_INITIAL_STATE: TodoState = {
  todos: TODOS_INITIAL_STATE,
};

export const todoSaga = [
  todosSaga(),
];
