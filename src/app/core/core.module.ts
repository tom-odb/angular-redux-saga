import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CORE_ROUTES } from "./core.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CORE_ROUTES),
  ],
})
export class CoreModule {}
