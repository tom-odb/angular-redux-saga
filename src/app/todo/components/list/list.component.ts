import { Component, HostBinding, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../../todo.types";

@Component({
  selector: "rs-list",
  templateUrl: "./list.component.html",
})
export class ListComponent {
  @HostBinding("class.o-todo-list") public listClasslist = true;
  @Input() public todos: Todo[] = [];
  @Output() public completed: EventEmitter<Todo> = new EventEmitter<Todo>();

  public handleCompleted(todo: Todo): void {
    this.completed.emit(todo);
  }
}
