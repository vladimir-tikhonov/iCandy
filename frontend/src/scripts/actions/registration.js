import { REGISTRATION_REQUESTED, REGISTRATION_SUCCEEDED, REGISTRATION_FAILED } from "../actions/actions";

export const registrationRequest = (params) => ({
    type: REGISTRATION_REQUESTED,
    params,
});


export const registrationSuccess = () => ({
    type: REGISTRATION_SUCCEEDED,
});

export const registrationFailed = () => ({
    type: REGISTRATION_FAILED,
});
