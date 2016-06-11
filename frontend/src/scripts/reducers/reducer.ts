import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import currentUser from "./currentUser";
import { IRegistrationState, default as registration } from "./registration";

export interface IApplicationState {
    registration: IRegistrationState;
    currentUser: Object;
}

export default combineReducers({
    currentUser,
    registration,
    routing: routerReducer,
});

export const getCurrentUser = (state: IApplicationState) => state.currentUser;
export const getRegistration = (state: IApplicationState) => state.registration;
