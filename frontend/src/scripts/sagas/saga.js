import { takeEvery } from "redux-saga";
import { put } from "redux-saga/effects";

import { REGISTRATION_REQUESTED } from "../actions/actions";
import { registrationFailed, registrationSuccess } from "../actions/registration";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


function* performRegistration(action) {
    try {
        yield sleep(1000);
        yield put(registrationSuccess());
    } catch (e) {
        yield put(registrationFailed());
    }
}

export default function* saga() {
    yield* takeEvery(REGISTRATION_REQUESTED, performRegistration);
}
