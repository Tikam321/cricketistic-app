import { takeEvery, put, call} from '@redux-saga/core/effects';
import { AuthType } from '../store/actionType/actionType';
import axios from  'axios';
import { getLogin, getLoginSuccess, getSignUp, getSignUpSuccess } from '../store/actions/authActions';
import { warn } from 'console';
import { config } from 'process';
export function* authSaga() {
    yield takeEvery(AuthType.getSignUp, getSignUpSaga);
    yield takeEvery(AuthType.getLogin, getLoginSaga)
}


export function* getSignUpSaga(action: ReturnType<typeof getSignUp>) {
    try {
        const data = {...action.payload, roles: "ROLE_USER"}
        const resp: {data: boolean} = yield call(axios.post, "/new", data);
        if (resp) {
            yield put(getSignUpSuccess(resp.data));
        }
    } 
    catch (error) {
        console.warn("there is error in signin api ", error);
    }
}

export function* getLoginSaga(action: ReturnType<typeof getLogin>) {
    try {
        console.warn("getLoginSafa called.");
        
        const data = action.payload;
        const resp: string = yield call(axios.post, "/authenticate", data, {headers: {}});
        localStorage.setItem("token", resp);
        console.warn(resp);
        if (resp) {
            localStorage.setItem("token", resp);
            yield put(getLoginSuccess(true));
        }
    }
    catch (error) {
        console.warn("invalid user occurred.", error);
    }
}
