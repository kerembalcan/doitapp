/* @flow */

import { put, takeLatest, all, call, select } from 'redux-saga/effects';
import {GET_TASKS_FETCH} from "./actionTypes";
import {apolloClient} from "../../graphql/index";
import {getTasks} from "./queries";
import {loadTasksError, loadTasksResponse} from "./actions";

function* loginEffectSaga(action) {
  try {
    let {data} = yield apolloClient.query({query: getTasks});
    yield put(loadTasksResponse(data));

    yield select(state => console.warn(state)); //the way of getting global state;
    yield console.warn(action);
  } catch (e) {
    yield put(loadTasksError(e));
  }
}

export function* loginWatcherSaga() {
  yield takeLatest(GET_TASKS_FETCH, loginEffectSaga);
}