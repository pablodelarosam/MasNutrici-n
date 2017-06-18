import * as constants from '../../constants'

export function signinHasError(state = false, action) {
    switch (action.type) {
        case constants.RECV_ERROR:
            return action.hasError;

        default:
            return state;
    }
}

export function signinRequest(state = false, action) {
    switch (action.type) {
        case constants.REQ_DATA:
            return action.requesting;

        default:
            return state;
    }
}

export function signinReducer(state = {}, action) {
    switch (action.type) {
        case constants.RECV_DATA:
            return action.data;
        default:
            return state;
    }
};
