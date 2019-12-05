// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE
import { push } from 'react-router-redux';
import fire from '../config.js/fireBaseConfiguration';

// Sign-up
export const createdUser = (userData) => {
    console.log(userData);
    return {
        type: 'USERCREATED',
        payload: userData
    };
}

// Login
export const userSignIn = (email, password) => {
    console.log(email);
    console.log(password);
    return (dispatch, state) => {
        dispatch(authLoginUserReq());
        fire.auth().signInWithEmailAndPassword(email, password)
            // Response of the API
            .then(response => {
                console.log(response.user.refreshToken);
                dispatch(authLoginUserSucess(response.user.refreshToken));
                dispatch(push('/home'))            
            })
            // Handle errors of the API
            .catch((error) => {
                var errorMessage = error.message;
                dispatch(authLoginUserFailure(errorMessage));
            });
    }
}

//Log out
export function userLogout() {
    localStorage.removeItem('token');
    return {
        type: 'SIGNOUT'
    }
}

export function userSignOut() {
    localStorage.removeItem("Refresh_Token")
    return (dispatch, state) => {
        dispatch(userLogout());
        dispatch(push('/'));
        return Promise.resolve();
    }
}

// Authenctication of User
export const authLoginUserReq = (token) => {
    return {
        type: 'AUTH_LOGIN_USER_REQ',
        payload: token
    }
}

export const authLoginUserSucess = (token) => {
    console.log(token);
    localStorage.setItem('Refresh_Token', token);
    return {
        type: 'AUTH_LOGIN_USER_SUCESS',
        payload: token
    }
}

export const authLoginUserFailure = (token) => {
    return {
        type: 'AUTH_LOGIN_USER_FAILURE',
        payload: token
    }
}

export const authLogoutUser = (token) => {
    return {
        type: 'AUTH_LOGOUT_USER',
        payload: token
    }
}