// @flow

import { combineReducers } from "redux";
import { SIGN_IN_REQUESTED, SIGN_IN_SUCCEEDED, SIGN_IN_FAILED } from "../actions/actions";

function isSignInInProgress(state: bool = false, action) {
    switch (action.type) {
    case SIGN_IN_REQUESTED:
        return true;
    case SIGN_IN_SUCCEEDED:
    case SIGN_IN_FAILED:
        return false;
    default:
        return state;
    }
}

export type SignInErrorsState = {
    usernameOrEmail?: string,
    password?: string,
}

function signInErrors(state: SignInErrorsState = {}, action) {
    switch (action.type) {
    case SIGN_IN_REQUESTED:
    case SIGN_IN_SUCCEEDED:
        return {};
    case SIGN_IN_FAILED:
        return {...action.errors};
    default:
        return state;
    }
}

export type SignInState = {
    isSignInInProgress: bool,
    signInErrors: SignInErrorsState
}

export default combineReducers({
    isSignInInProgress,
    signInErrors,
});

export const getIsSignInInProgress = (state: SignInState) => state.isSignInInProgress;
export const getSignInErrors = (state: SignInState) => state.signInErrors;
