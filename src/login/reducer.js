/* @flow */

import {GET_TASKS_FETCH} from "./actionTypes";

export type LoginState = {
};

export const loginReducerInitialState = {
};

export default function loginReducer(state: LoginState = loginReducerInitialState, action: Object) {
  switch (action.type) {
    case GET_TASKS_FETCH: {
      return state;
    }
    default:
      return state
  }
}