import { combineReducers } from "redux";
import { REGISTRATION_REQUESTED, REGISTRATION_SUCCEEDED, REGISTRATION_FAILED } from "../actions/actions";

export interface IRegistrationState {
    isRegistrationInProgress: boolean;
}

function isRegistrationInProgress(state = false, action) {
    switch (action.type) {
    case REGISTRATION_REQUESTED:
        return true;
    case REGISTRATION_SUCCEEDED:
    case REGISTRATION_FAILED:
        return false;
    default:
        return state;
    }
}

const registration = combineReducers({
    isRegistrationInProgress,
});

export default registration;

export function getIsRegistrationInProgress(state: IRegistrationState) {
    return state.isRegistrationInProgress;
}
