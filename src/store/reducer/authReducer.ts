import { AnyAction } from "redux";
import Ranking, { rankingObjectType } from "../../Container/Ranking";
import RankingType from "../actionType/rankingType";
import rankingActions from "../actions/rankingActions"
import {produce} from "immer";
import authActions, { loginObj, signUpObj } from "../actions/authActions";
import { AuthType } from "../actionType/actionType";

type initStateType = {
    signUpObj: signUpObj,
    loginObj: loginObj,
    isSignUp: boolean,
    isLogin: boolean
}

const initState: initStateType = {
    signUpObj: {
        userName: "",
        password: "",
    },
    loginObj: {
        userName: "",
        password: "",
    },
    isSignUp: false,
    isLogin: false
}

type Action = ReturnType<typeof authActions[keyof typeof authActions]>;
const authReducer = (state: initStateType = initState, action: Action) => produce(state, draft => {
    switch(action.type) {
        case AuthType.getLoginSuccess:
            Object.assign(draft, {isSignUp: action.payload});
            break;
        case AuthType.getSignUpSuccess:
            Object.assign(draft, {isLogin: action.payload});
            break;
        default:
            Object.assign(draft);
    }
})

export default authReducer;