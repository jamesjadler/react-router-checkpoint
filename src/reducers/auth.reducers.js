import {
    USER_LOGIN_PENDING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_SIGNUP_PENDING,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_LOGOUT
} from '../actions/auth.actions'

let initialState = {
    isLoading: false,
    user: {},
    showLoginError: false,
    showSignupError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_PENDING:
            return {...state, isLoading: true, loggedIn: false};
        case USER_LOGIN_SUCCESS:
            return {...state, isLoading: false, user: action.payload, loggedIn: true, nextPage: '/profile'};
        case USER_LOGIN_FAILED:
            return {...state, isLoading: false, showLoginError: true, loggedIn: false};
        case USER_SIGNUP_PENDING:
            return {...state, isLoading: true};
        case USER_SIGNUP_SUCCESS:
            return {...state, isLoading: false, nextPage: '/login'};
        case USER_SIGNUP_FAILED:
            return {...state, isLoading: false, showSignupError: true};
        case USER_LOGOUT:
            return {...state, user: {}, loggedIn: false, nextPage: null};
        default:
            return state;
    }
}
