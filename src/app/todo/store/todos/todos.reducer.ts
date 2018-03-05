import { Todo } from "../../todo.types";

import { TodosAction, TodosState, FetchTodosAction, CompleteTodoAction } from "./todos.types";
import { TODOS_LOAD, TODOS_FETCH, TODOS_COMPLETE, TODOS_UPDATE } from "./todos.actiontypes";
import { TODOS_INITIAL_STATE } from "./todos.initial-state";

export const todosReducer = (
  state: TodosState = TODOS_INITIAL_STATE,
  action: TodosAction,
): TodosState => {
  if (action.type === TODOS_FETCH) {
    return {
      loading: true,
      todos: null,
    };
  }

  if (action.type === TODOS_LOAD) {
    return {
      loading: false,
      todos: [...(action as FetchTodosAction).todos],
    };
  }

  if (action.type === TODOS_UPDATE) {
    return {
      loading: false,
      todos: state.todos.map((todo: Todo) => {
        if (todo.id === (action as CompleteTodoAction).todo.id) {
          return {
            ...(action as CompleteTodoAction).todo,
          };

        }

        return {
          ...todo,
        };
      }),
    };
  }

  return state;
};
