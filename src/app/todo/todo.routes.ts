import { Routes } from "@angular/router";
import { OverviewPageComponent } from "./pages/overview/overview.page";

export const TODO_ROUTES: Routes = [
  {
    path: "",
    component: OverviewPageComponent,
    pathMatch: "full",
  },
];
