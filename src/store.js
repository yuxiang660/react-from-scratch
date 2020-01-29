import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";

let middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);
const store = createStore(reducers, middleware);

sagaMiddleware.run(sagas);

export { store };
