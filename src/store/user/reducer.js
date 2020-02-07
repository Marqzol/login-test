import { SET_USER_NAME, SET_USER_PASSWORD, SET_LOGIN_STATUS } from './actionTypes';

const initialUserState = {
    name: 'John',
    surname: 'Doe',
    logged: false
};

export default function userReducer(state = initialUserState, action) {
    if (action.type === SET_USER_NAME) {
        return {
            ...state, name: action.payload
        }
    }

    if (action.type === SET_LOGIN_STATUS) {
        return {
            ...state, logged: action.payload
        }
    }

    if (action.type === 'user/setLoginSuccess') {
        return {
            ...state, logged: true
        }
    }

    return state
}