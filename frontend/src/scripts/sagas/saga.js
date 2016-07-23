// @flow

import { takeEvery } from "redux-saga";
import { call, put } from "redux-saga/effects";
import get from "lodash/get";

import { REGISTRATION_REQUESTED, SIGN_IN_REQUESTED } from "../actions/actions";
import { registrationSuccess, registrationFailed } from "../actions/registration";
import { signInSuccess, signInFailed } from "../actions/sign_in";
import { registerUser, signInUser } from "../api/users.js";

function * performSignIn({params}) {
    try {
        yield call(signInUser, params);
        yield put(signInSuccess());
    } catch (e) {
        const errors = get(e, ["response", "data", "errors"], {});
        yield put(signInFailed(errors));
    }
}

function * performRegistration({params}) {
    try {
        yield call(registerUser, params);
        yield performSignIn({params: { usernameOrEmail: params.email, password: params.password }});
        yield put(registrationSuccess());
    } catch (e) {
        const errors = get(e, ["response", "data", "errors"], {});
        yield put(registrationFailed(errors));
    }
}

export default function * saga(): Generator<any, any, any> {
    yield [
        takeEvery(REGISTRATION_REQUESTED, performRegistration),
        takeEvery(SIGN_IN_REQUESTED, performSignIn),
    ];
}
