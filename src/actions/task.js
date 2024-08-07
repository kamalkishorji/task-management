import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "./actionTypes";

export function fetchTaskRequest(data) {
  return {
    type: FETCH_ALL_FARM_TASKS_REQUEST,
    data,
  };
}
export function fetchFarmTaskSuccess(data) {
  return {
    type: FETCH_ALL_FARM_TASKS_SUCCESS,
    data,
  };
}
export function fetchFarmTaskFailure(error) {
  return {
    type: FETCH_ALL_FARM_TASKS_FAILURE,
    error,
  };
}

export function fetchPolyhouseTaskRequest(data) {
  return {
    type: FETCH_ALL_POLYHOUSE_TASKS_REQUEST,
    data,
  };
}
export function fetchPolyhouseTaskSuccess(data) {
  return {
    type: FETCH_ALL_POLYHOUSE_TASKS_SUCCESS,
    data,
  };
}
export function fetchPolyhouseTaskFailure(error) {
  return {
    type: FETCH_ALL_POLYHOUSE_TASKS_FAILURE,
    error,
  };
}

export function fetchZoneTaskRequest(data) {
  return {
    type: FETCH_ALL_ZONE_TASKS_REQUEST,
    data,
  };
}
export function fetchZoneTaskSuccess(data) {
  return {
    type: FETCH_ALL_ZONE_TASKS_SUCCESS,
    data,
  };
}
export function fetchZoneTaskFailure(error) {
  return {
    type: FETCH_ALL_ZONE_TASKS_FAILURE,
    error,
  };
}
export function fetchAllTaskRequest(data) {
  return {
    type: FETCH_ALL_TASKS_REQUEST,
    data,
  };
}
export function fetchAllTaskSuccess(data) {
  return {
    type: FETCH_ALL_TASKS_SUCCESS,
    data,
  };
}
export function fetchAllTaskFailure(error) {
  return {
    type: FETCH_ALL_TASKS_FAILURE,
    error,
  };
}
export function addTaskCommentRequest(data) {
  return {
    type: ADD_TASKS_COMMENTS_REQUEST,
    data,
  };
}
export function addTaskCommentSuccess(data) {
  return {
    type: ADD_TASKS_COMMENTS_SUCCESS,
    data,
  };
}
export function addTaskCommentFailure(error) {
  return {
    type: ADD_TASKS_COMMENTS_FAILURE,
    error,
  };
}

export function addFarmTaskRequest(data) {
  return {
    type: ADD_FARM_TASK_REQUEST,
    data,
  };
}
export function addFarmTaskSuccess(data) {
  return {
    type: ADD_FARM_TASK_SUCCESS,
    data,
  };
}
export function addFarmTaskFailure(error) {
  return {
    type: ADD_FARM_TASK_FAILURE,
    error,
  };
}
export function updateTaskStatusRequest(data) {
  return {
    type: UPDATE_TASK_STATUS_REQUEST,
    data,
  };
}
export function updateTaskStatusSuccess(data) {
  return {
    type: UPDATE_TASK_STATUS_SUCCESS,
    data,
  };
}
export function updateTaskStatusFailure(error) {
  return {
    type: UPDATE_TASK_STATUS_FAILURE,
    error,
  };
}
