import * as constants from '../../constants'

export function loginHasError(state = false, action) {
    switch (action.type) {
        case constants.RECV_ERROR:
            return action.hasError;

        default:
            return state;
    }
}

export function loginRequest(state = false, action) {
    switch (action.type) {
        case constants.REQ_DATA:
            return action.requesting;

        default:
            return state;
    }
}

export function loginReducer(state = {}, action) {
    switch (action.type) {
        case constants.RECV_DATA:
            return action.data;
        default:
            return state;
    }
};
