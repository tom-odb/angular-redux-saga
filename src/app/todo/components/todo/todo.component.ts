import { Component, HostBinding, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../../todo.types";

@Component({
  selector: "rs-todo",
  templateUrl: "./todo.component.html",
})
export class TodoComponent {
  @HostBinding("class.m-todo") public todoClassList = true;
  @Input() public todo: Todo;
  @Output() public completed: EventEmitter<Todo> = new EventEmitter<Todo>();

  public handleCompleted(): void {
    this.completed.emit(this.todo);
  }
}
