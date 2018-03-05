import { Component } from "@angular/core";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs/Observable";

import { Todo } from "../../todo.types";
import { TodosActioncreator } from "../../store";

@Component({
  selector: "rs-overview-page",
  templateUrl: "./overview.page.html",
})
export class OverviewPageComponent {
  @select(["todos", "todos"]) public todos$: Observable<Todo[]>;
  @select(["todos", "loading"]) public loading$: Observable<boolean>;

  constructor(
    private todosActions: TodosActioncreator
  ) {
    this.todosActions.fetchTodos();
  }

  public handleCompleted(todo: Todo): void {
    this.todosActions.complete(todo);
  }
}
