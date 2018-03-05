import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


// DEFINE MODULES THAT SHOULD NOT BE LAZY LOADED HERE
// https://github.com/angular/angular-cli/issues/4192#issuecomment-274775116
import { CoreModule } from "./core/core.module";
import { TodoModule } from "./todo/todo.module";

// Do not delete. Used to ensure CoreModule is loaded in the same bundle.
// Referencing the function directly in `loadChildren` breaks AoT compiler.
export function loadCoreModule() {
	return CoreModule;
}
export function loadTodoModule() {
	return TodoModule;
}
//////////////////////////////////////////////////////

export const ROUTES: Routes = [
  { path: "todos", loadChildren: "./todo/todo.module#TodoModule" },
	{ path: "", loadChildren: "./core/core.module#CoreModule" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
