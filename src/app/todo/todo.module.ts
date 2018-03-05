import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgReduxModule } from "@angular-redux/store";
import { RouterModule } from "@angular/router";

import { TodosActioncreator } from "./store";
import { Components } from "./components";
import { Pages } from "./pages";
import { TODO_ROUTES } from "./todo.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TODO_ROUTES),
  ],
  providers: [
    TodosActioncreator,
  ],
  declarations: [
    ...Components,
    ...Pages,
  ],
})
export class TodoModule {}
