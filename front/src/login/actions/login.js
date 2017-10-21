import * as constants from '../../constants'
import axios from 'axios';
import {receiveError} from '../../general_dash/dashboard'
import {browserHistory} from 'react-router';


export function receiveLogin(json) {
  return {type: constants.RECV_DATA, data: json}
};


export function login(email, password) {
  return function(dispatch) {
    axios({
      url: constants.HOST_NAME + '/api/v0/login',
      method: 'post',
      responseType: 'json',
      data: {
        email: email,
        password: password
      }
    }).then(function(response) {
      if (response.data["user"]) {
        sessionStorage.setItem('user', JSON.stringify(response.data["user"]));
        if (response.data["user"]["role"] == "doctor" || response.data["user"]["role"] == "supervisor")
          browserHistory.push('/dashboard/doctor')
        else
          browserHistory.push('/dashboard/paciente')

        dispatch(receiveLogin(response.data));
      }

    }).catch(function(response) {
      console.log(response);
      dispatch(receiveError(true));
    })
  }
};
