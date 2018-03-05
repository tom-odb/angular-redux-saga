import { applyMiddleware, Action } from "redux";
import { runSaga, RunSagaOptions } from "redux-saga";
import { NgModule } from "@angular/core";
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store";

import { environment } from "../../environments/environment";

import { AppState } from "./store.types";
import { rootReducer, initialState, middlewares } from "./store.conf";
import { sagaMiddleware, rootSaga } from "./store.saga";

@NgModule({
  imports: [
    NgReduxModule,
  ],
})
export class StoreModule {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private devTools: DevToolsExtension,
  ) {
    const DEVMODE = !environment.production;
    const enhancers = DEVMODE && devTools.isEnabled() ? [ devTools.enhancer() ] : [];
    const sagaOptions: RunSagaOptions<any, AppState> = {
      subscribe: cb => ngRedux.subscribe((action = {}) => {
        cb(action);
      }),
      getState: ngRedux.getState,
      dispatch: ngRedux.dispatch,
    };

    ngRedux.configureStore(rootReducer, initialState, middlewares, enhancers);

    sagaMiddleware.run(rootSaga, ngRedux);

  }
}
