import { authSaga } from "./authSaga"
import { rankingSaga } from "./rankingSaga"
import {fork, all} from "redux-saga/effects"

export default function* rootSaga() {
    yield all([
        fork(rankingSaga),
        fork(authSaga)
    ])
    // yield fork(rankingSaga)
    // yield fork(authSaga)
};