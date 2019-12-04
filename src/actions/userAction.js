// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE
import { push } from 'react-router-redux';


// Sign-up
export const createdUser = ( userData ) => {
    console.log(userData);
    return {
        type : 'USERCREATED',
        payload: userData   
    };
}

// Login
export const userSignIn = (signedInData) => {
    console.log(signedInData);
    return {
        type: 'SIGNIN',
        payload : signedInData
    }
}

//Log out
export function userLogout() {
    localStorage.removeItem('token');
    return {
        type : 'SIGNOUT'
    } 
}

export function userSignOut (redirect = '/') {
    localStorage.removeItem("Refresh_Token")
    return (dispatch, state) => {
        dispatch(userLogout());
        dispatch(push('/signup'));
        return Promise.resolve();
    }
}

// Authentication of User
export const authLoginUserReq = (token) => {
    return {
        type : 'AUTH_LOGIN_USER_REQ',
        payload : token
    }
}

export const authLoginUserSucess = (token) => {
    return {
        type : 'AUTH_LOGIN_USER_SUCESS',
        payload : token
    }
}

export const authLoginUserFailure = (token) => {
    return {
        type : 'AUTH_LOGIN_USER_FAILURE',
        payload : token
    }
}

export const authLogoutUser = (token) => {
    return {
        type : 'AUTH_LOGOUT_USER',
        payload : token
    }
}