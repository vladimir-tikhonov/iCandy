// @flow

import { SIGN_IN_REQUESTED, SIGN_IN_SUCCEEDED, SIGN_IN_FAILED } from "../actions/actions";

export type SignInRequestParams = {
    usernameOrEmail: string,
    password: string,
}

export type SignInRequestErrors = {
    usernameOrEmail: string,
}

export const signInRequest = (params: SignInRequestParams) => ({
    type: SIGN_IN_REQUESTED,
    params,
});

export const signInSuccess = () => ({
    type: SIGN_IN_SUCCEEDED,
});

export const signInFailed = (errors: SignInRequestErrors) => ({
    type: SIGN_IN_FAILED,
    errors,
});
