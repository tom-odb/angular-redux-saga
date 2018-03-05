import { call, put, fork, takeLatest } from "redux-saga/effects";

import { Todo } from "../../todo.types";

import { TODOS_FETCH, TODOS_COMPLETE } from "./todos.actiontypes";
import { loadTodos, updateTodos } from "./todos.actions";
import { CompleteTodoAction } from "./todos.types";

function fetchTodosRequest(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        id: "1",
        task: "Stuff",
        createdDate: new Date(),
        completedDate: null,
        done: false,
      }, {
        id: "2",
        task: "Things",
        createdDate: new Date(),
        completedDate: null,
        done: false,
      }]);
    }, 1000);
  });
}

export function* fetchTodos(): Generator {
  const response = yield call(fetchTodosRequest);

  yield put(loadTodos(response));
}

export function completeTodoRequest(todo: Todo): Promise<Todo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...todo,
        done: true,
        completedDate: new Date(),
      });
    }, 1000);
  });
}

export function* completeTodo({ todo }: CompleteTodoAction): Generator {
  const response = yield call(completeTodoRequest, todo);

  yield put(updateTodos(response));
}

export function* todosSaga(): Generator {
  yield fork<string, any>(takeLatest, TODOS_FETCH, fetchTodos);
  yield fork<string, any>(takeLatest, TODOS_COMPLETE, completeTodo);
}
