import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import currentUser from "./currentUser";
import registration from "./registration";

export default combineReducers({
    currentUser,
    registration,
    routing: routerReducer,
});

export const getCurrentUser = (state) => state.currentUser;
export const getRegistration = (state) => state.registration;
