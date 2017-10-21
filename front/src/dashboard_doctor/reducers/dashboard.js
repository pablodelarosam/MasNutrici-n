import * as constants from '../../constants'


export function patientsReducer(state = [], action) {
    switch (action.type) {
        case constants.RECV_PATIENTS:
            return {...state, "patients": action["patients"]["patients"]};
        default:
            return state;
    }
};
