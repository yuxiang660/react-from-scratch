import { takeLatest, put, call } from 'redux-saga/effects'
import actions from '../actions'
import api from '../api';

function* getStuff() {
  try {
    const data = yield call(api.getStuff);
    yield put({ type: actions.GOT_STUFF, data });
  } catch (error) {
    console.log('saga fail: ', error);
    yield put({ type: actions.GOT_NO_STUFF, error })
  }
}

export function* sagas() {
  yield takeLatest(actions.GET_STUFF, getStuff);
}
