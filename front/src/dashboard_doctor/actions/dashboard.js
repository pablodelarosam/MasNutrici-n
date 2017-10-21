
import * as constants from '../../constants'
import {receiveError, updatedProfile} from '../../general_dash/dashboard'
import axios from 'axios';


export function receivePatients(array) {
  return {type: constants.RECV_PATIENTS, patients: array}
};

export function getPatients(user) {
  return function(dispatch) {
    axios({
      url: constants.HOST_NAME + '/api/v0/patients/' + user,
      method: 'get',
      responseType: 'json'
    }).then(function(response) {
        dispatch(receivePatients(response.data));
        dispatch(updatedProfile(false))
    }).catch(function(response) {
      console.log(response);
      dispatch(receiveError(true));
    })
  }
};
