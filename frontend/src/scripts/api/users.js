// @flow

import { post } from "./backend_client.js";

import type { RegistrationRequestParams } from "../actions/registration";
import type { SignInRequestParams } from "../actions/sign_in";

export const registerUser = (params: RegistrationRequestParams) => post("/users", params);
export const signInUser = (params: SignInRequestParams) => post("/authorization", params);
