// @flow

import { takeEvery } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { REGISTRATION_REQUESTED } from "../actions/actions";
import { registrationFailed, registrationSuccess } from "../actions/registration";
import { registerUser } from "../api/users.js";

function * performRegistration({params}) {
    try {
        yield call(registerUser, params);
        yield put(registrationSuccess());
    } catch (e) {
        yield put(registrationFailed(e.response.data.errors));
    }
}

export default function * saga(): Generator<any, any, any> {
    yield * takeEvery(REGISTRATION_REQUESTED, performRegistration);
}
