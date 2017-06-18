import * as constants from '../../constants'
import axios from 'axios';

export function receiveError(bool) {
    return {
        type: constants.RECV_ERROR,
        hasError: bool
    }
};

export function requestData(bool) {
    return {
        type: constants.REQ_DATA,
        requesting: bool
    }
}

export function receiveData(json) {
    return {
        type: constants.RECV_DATA,
        data: json
    }
};

export function login(url, email, password) {
    return function(dispatch) {
        dispatch(requestData(true));
        axios({
            url: url,
            method: 'post',
            responseType: 'json',
            data: {
              email: email,
              password: password
            }
        }).then(function(response) {
            dispatch(receiveData(response.data));
        }).catch(function(response) {
            dispatch(receiveError(true));
        })
    }
};
