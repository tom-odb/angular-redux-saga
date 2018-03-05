import { Action } from "redux";
import { Todo } from "../../todo.types";

export interface FetchTodosAction extends Action {
  todos: Todo[];
}

export interface CompleteTodoAction extends Action {
  todo: Todo;
}

export type TodosAction = FetchTodosAction | CompleteTodoAction;

export interface TodosState {
  loading: boolean;
  todos: Todo[];
}

export interface TodosResponse {
  completed: Todo;
}
