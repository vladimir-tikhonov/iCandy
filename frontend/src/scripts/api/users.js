// @flow

import { post } from "./backend_client.js";

import type { RegistrationRequestParams } from "../actions/registration";

export const registerUser = (params: RegistrationRequestParams) => post("/users", params);
