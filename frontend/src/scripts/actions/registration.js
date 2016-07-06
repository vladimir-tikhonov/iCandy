// @flow

import { REGISTRATION_REQUESTED, REGISTRATION_SUCCEEDED, REGISTRATION_FAILED } from "../actions/actions";

export type RegistrationRequestParams = {
    username: string,
    email: string,
    password: string,
}

export const registrationRequest = (params: RegistrationRequestParams) => ({
    type: REGISTRATION_REQUESTED,
    params,
});

export const registrationSuccess = () => ({
    type: REGISTRATION_SUCCEEDED,
});

export const registrationFailed = () => ({
    type: REGISTRATION_FAILED,
});
