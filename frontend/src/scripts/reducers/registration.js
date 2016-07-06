// @flow

import { combineReducers } from "redux";
import { REGISTRATION_REQUESTED, REGISTRATION_SUCCEEDED, REGISTRATION_FAILED } from "../actions/actions";

function isRegistrationInProgress(state: bool = false, action) {
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

export type RegistrationState = {
    isRegistrationInProgress: bool
}

const registration = combineReducers({
    isRegistrationInProgress,
});

export default registration;

export const getIsRegistrationInProgress = (state: RegistrationState) => state.isRegistrationInProgress;
