import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";
import { composeWithDevTools } from 'redux-devtools-extension';

let middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(sagas);

export { store };
