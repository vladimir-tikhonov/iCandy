// @flow

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import currentUser from "./currentUser";
import registration from "./registration";

import type { CurrentUserState } from "./currentUser";
import type { RegistrationState } from "./registration";

export default combineReducers({
    currentUser,
    registration,
    routing: routerReducer,
});

type ApplicationState = {
    currentUser: CurrentUserState,
    registration: RegistrationState
}

export const getCurrentUser = (state: ApplicationState) => state.currentUser;
export const getRegistration = (state: ApplicationState) => state.registration;
