// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE
import fire from '../config.js/fireBaseConfiguration';
import {
    USER_CREATED,
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGOUT_USER,
} from '../constants';
import { push } from 'react-router-redux';

// Sign-up
export const createdUser = (userData) => {
    console.log(userData.name);
    return {
        type: USER_CREATED,
        payload: userData
    };
}

// Login
export const userSignIn = (email, password, history) => {
    console.log(email);
    console.log(password);
    return (dispatch, state) => {
        console.log(history);
        dispatch(authLoginUserReq());
        
        fire.auth().signInWithEmailAndPassword(email, password)
            // Response of the API
            .then(response => {
                console.log(response.user.refreshToken);
                dispatch(authLoginUserSucess(response.user.refreshToken));
                history.push('/home')
            })
            // Handle errors of the API
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                dispatch(authLoginUserFailure(errorMessage));
            });
    }
}

// Log out
export function userSignOut(history) {
    return (dispatch, state) => {
        fire.auth().signOut()
        .then(() => {
            dispatch(autLoggedOutSuccess())
        })
        .catch(function(error) {
        });
        return Promise.resolve();
    }
}

// Authenctication of User
export const authLoginUserReq = (token) => {
    return {
        type: AUTH_LOGIN_USER_REQUEST,
        payload: token
    }
}

export const authLoginUserSucess = (token) => {
    console.log(token);
    localStorage.setItem('Refresh_Token', token);
    return {
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: token
    }
}

export const authLoginUserFailure = (error) => {
    return {
        type: AUTH_LOGIN_USER_FAILURE,
        payload: error
    }
}

export const authLogoutUser = () => {
    localStorage.removeItem('Refresh_Token');
        return {
            type : AUTH_LOGOUT_USER
        }
}

export const autLoggedOutSuccess = () => {
        return(dispatch) => {
            dispatch(authLogoutUser())
            dispatch(push('/'))
        }
}