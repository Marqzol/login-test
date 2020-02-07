import { SET_USER_NAME, SET_LOGIN_STATUS } from './actionTypes';

export const setUserName = (userName) => {
    return {
        type: SET_USER_NAME,
        payload: userName
    }
}

export const setLoginStatus = (status) => {
    return {
        type: SET_LOGIN_STATUS,
        payload: status
    }
}

export const setLoginSuccess = () => {
    return { type: 'user/setLoginSuccess' }
}