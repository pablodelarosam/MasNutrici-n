import * as constants from '../constants'
import moment from "moment"


export function requestHasError(state = false, action) {
  switch (action.type) {
    case constants.RECV_ERROR:
      return action.hasError;
    default:
      return state;
  }
}

export function receivedGeneralRequestReducer(state = false, action) {
  switch (action.type) {
    case constants.GENERAL_REQUEST:
      return action.receivedGeneralRequest;
    default:
      return state;
  }
}


export function profileReducer(state = {}, action) {
  switch (action.type) {
    case constants.RECV_DATA_PROFILE:
      return action.data;
    default:
      return state;
  }
}

export function requestInfo(state = false, action) {
  switch (action.type) {
    case constants.UPDATED_PROFILE:
      return action.completed;
    default:
      return state;

  }
}
