import { all, fork } from "redux-saga/effects";

import UserSaga from "./UserSaga";

export default function* rootSaga() {
    yield all([fork(UserSaga)]);
}