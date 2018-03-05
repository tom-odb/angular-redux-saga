import { Todo } from "../../todo.types";

import { FetchTodosAction, CompleteTodoAction, TodosResponse } from "./todos.types";
import { TODOS_LOAD, TODOS_COMPLETE, TODOS_UPDATE } from "./todos.actiontypes";

export const loadTodos = (todos: Todo[]): FetchTodosAction => {
  return {
    type: TODOS_LOAD,
    todos,
  };
};

export const updateTodos = (todo: Todo): CompleteTodoAction => {
  return {
    type: TODOS_UPDATE,
    todo,
  };
}
