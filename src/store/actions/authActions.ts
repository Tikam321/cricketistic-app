import { AuthType } from "../actionType/actionType"

export interface signUpObj {
    userName: string,
    password: string,
    
}
export type loginObj = signUpObj;

export const getSignUp = (data: signUpObj) => {
    return {
        type: AuthType.getSignUp as const,
        payload: data 
    }
};

export const getSignUpSuccess = (data: boolean) => {
    return {
        type: AuthType.getSignUpSuccess as const,
        payload: data 
    }
}

export const getLogin = (data: loginObj) => {
    return {
        type: AuthType.getLogin as const,
        payload: data 
    }
}

export const getLoginSuccess = (data: boolean) => {
    return {
        type: AuthType.getLoginSuccess as const,
        payload: data 
    }
}

export default {
    getSignUp,
    getSignUpSuccess,
    getLogin,
    getLoginSuccess
}