/* @flow */

import {GET_TASKS_FAIL, GET_TASKS_FETCH, GET_TASKS_RESPONSE} from "./actionTypes";

export function loadTasks() {
  return {
    type: GET_TASKS_FETCH
  };
}

export function loadTasksError(error) {
  return {
    type: GET_TASKS_FAIL,
    error
  };
}

export function loadTasksResponse(data) {
  return {
    type: GET_TASKS_RESPONSE,
    data
  }
}