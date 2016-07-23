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

export type RegistrationErrorsState = {
    username?: string,
    email?: string,
    password?: string,
}

function registrationErrors(state: RegistrationErrorsState = {}, action) {
    switch (action.type) {
    case REGISTRATION_REQUESTED:
    case REGISTRATION_SUCCEEDED:
        return {};
    case REGISTRATION_FAILED:
        return {...action.errors};
    default:
        return state;
    }
}

export type RegistrationState = {
    isRegistrationInProgress: bool,
    registrationErrors: RegistrationErrorsState
}

export default combineReducers({
    isRegistrationInProgress,
    registrationErrors,
});

export const getIsRegistrationInProgress = (state: RegistrationState) => state.isRegistrationInProgress;
export const getRegistrationErrors = (state: RegistrationState) => state.registrationErrors;
