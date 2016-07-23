// @flow

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import currentUser from "./currentUser";
import registration from "./registration";
import signIn from "./sign_in";

import type { CurrentUserState } from "./currentUser";
import type { RegistrationState } from "./registration";
import type { SignInState } from "./sign_in";

export default combineReducers({
    currentUser,
    registration,
    signIn,
    routing: routerReducer,
});

type ApplicationState = {
    currentUser: CurrentUserState,
    registration: RegistrationState,
    signIn: SignInState
}

export const getCurrentUser = (state: ApplicationState) => state.currentUser;
export const getRegistration = (state: ApplicationState) => state.registration;
export const getSignIn = (state: ApplicationState) => state.signIn;
