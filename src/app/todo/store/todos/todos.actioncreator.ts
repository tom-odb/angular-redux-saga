import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";

import { TodoState } from "../store.types";
import { Todo } from "../../todo.types";

import { TODOS_FETCH, TODOS_LOAD, TODOS_COMPLETE } from "./todos.actiontypes";

@Injectable()
export class TodosActioncreator {
  constructor(
    private ngRedux: NgRedux<TodoState>
  ) {}

  public fetchTodos(): void {
    this.ngRedux.dispatch({
      type: TODOS_FETCH,
    });
  }

  public complete(todo: Todo): void {
    this.ngRedux.dispatch({
      type: TODOS_COMPLETE,
      todo,
    });
  }
}
