import { combineReducers } from "redux";
import basicReducer from './basicReducer';
import stuffReducer from './stuffReducer';

export const reducers = combineReducers({
  stateFromReducer: basicReducer,
  stuff: stuffReducer
});
