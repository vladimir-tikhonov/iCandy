import { REGISTRATION_REQUESTED, REGISTRATION_SUCCEEDED, REGISTRATION_FAILED } from "../actions/actions";

export interface IRequestRegistrationParams {
    username: string;
    email: string;
    password: string;
}
export interface IRequestRegistrationAction {
    type: string;
    params: IRequestRegistrationParams;
}
export interface IRegistrationRequest {
    (params: IRequestRegistrationParams): IRequestRegistrationAction;
}
export const registrationRequest: IRegistrationRequest = (params) => ({
    type: REGISTRATION_REQUESTED,
    params,
});


export interface IRegistrationSuccessAction {
    type: string;
}
export interface IRegistrationSuccess {
    (): IRegistrationSuccessAction;
}
export const registrationSuccess: IRegistrationSuccess = () => ({
    type: REGISTRATION_SUCCEEDED,
});


export interface IRegistrationFailedAction {
    type: string;
}
export interface IRegistrationFailed {
    (): IRegistrationFailedAction;
}
export const registrationFailed: IRegistrationFailed = () => ({
    type: REGISTRATION_FAILED,
});
