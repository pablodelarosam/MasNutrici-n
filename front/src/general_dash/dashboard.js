import axios from 'axios';
import * as constants from '../constants'


export function receiveError(bool) {
    return {
        type: constants.RECV_ERROR,
        hasError: bool
    }
};


export function receiveGeneralRequest(bool) {
  return {
    type: constants.GENERAL_REQUEST,
    receivedGeneralRequest: bool
  }
}


export function receiveData(array) {
    return {
        type: constants.RECV_DATA_NEWSFEED,
        data: array
    }
};


export function updatedProfile(bool) {
    return {
        type: constants.UPDATED_PROFILE,
        completed: bool
    }
};


export function receiveProfile(json) {
    return {
        type: constants.RECV_DATA_PROFILE,
        data: json
    }
};


// Profile API
export function getProfile(id, type) {
    return function(dispatch) {
        axios({
            url: constants.HOST_NAME + '/api/v0/user/' + id,
            method: 'get',
            responseType: 'json'
        }).then(function(response) {
            let user = response.data;
            let u = {
              "id": id,
              "email" : user.email,
              "name": user.name,
              "role": user.role
            }
            if (type !== "explore") {
              sessionStorage.setItem('user', JSON.stringify(u));
              dispatch(updatedProfile(false))
            }
            dispatch(receiveProfile(user));
        }).catch(function(response) {
            dispatch(receiveError(true));
        })
    }
};

export function updateProfile(userId, data) {
    // Sparse Data
    return function(dispatch) {
        axios({
            url: constants.HOST_NAME + '/api/v0/user/' + userId,
            method: 'put',
            responseType: 'json',
            data: data
        }).then(function(response) {
          let data = response.data;
          if(data.status == 200) {
            dispatch(updatedProfile(true))
          }
        }).catch(function(response) {
            dispatch(receiveError(true));
        })
    }
};


export function createProfile(data) {
    console.log("DATA", data)
    // Sparse Data
    return function(dispatch) {
        axios({
            url: constants.HOST_NAME + '/api/v0/signup',
            method: 'post',
            responseType: 'json',
            data: data
        }).then(function(response) {
          console.log("RESPONSE", response)
          let data = response.data;
          if(data.status == 200) {
            dispatch(updatedProfile(true))
          }
        }).catch(function(response) {
          console.log("Error", response)
            dispatch(receiveError(true));
        })
    }
};



export function removeProfile(userId) {
  return function(dispatch) {
      axios({
          url: constants.HOST_NAME + '/api/v0/user/' + userId,
          method: 'delete',
          responseType: 'json'
      }).then(function(response) {
        let data = response.data;
        if(data.status == 200) {
          dispatch(updatedProfile(true))
        }
      }).catch(function(response) {
          dispatch(receiveError(true));
      })
  }
}


export function receiveDataTimeTable(array) {
    return {
        type: constants.RECV_DATA_TIMETABLE,
        data: array
    }
};

export function getTimeTable(user_type) {
    return function(dispatch) {
        axios({
            url: constants.HOST_NAME + '/api/v0/timetable/59095f58bcd7fabdc603d1fa',
            method: 'get',
            responseType: 'json',
            params: {
              "user_type": user_type
            }
        }).then(function(response) {
            dispatch(receiveDataTimeTable(response.data));
        }).catch(function(response) {
            dispatch(receiveError(true));
        })
    }
};
