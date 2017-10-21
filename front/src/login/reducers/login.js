import * as constants from '../../constants'

export function loginHasError(state = false, action) {
    switch (action.type) {
        case constants.RECV_ERROR:
            return action.hasError;

        default:
            return state;
    }
}


export function loginReducer(state = {}, action) {
    switch (action.type) {
        case constants.RECV_DATA:
            return {...state, "user": action.data["user"]};
        default:
            return state;
    }
};
