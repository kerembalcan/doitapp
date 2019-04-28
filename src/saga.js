/* @flow */

import { all } from 'redux-saga/effects';
import {loginWatcherSaga} from "./login/saga";

export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
  ]);
}