// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE
import fire from '../config.js/fireBaseConfiguration';
import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGOUT_USER,
} from '../constants';
import {push} from 'react-router-redux';

// Sign-up
export const createdUser = (userData) => {
    console.log(userData);
    return {
        type: 'USERCREATED',
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
                dispatch(authLoginUserFailure(errorMessage));
            });
    }
}

//Log out
export function userSignOut(history) {
    // localStorage.removeItem("Refresh_Token")
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

export const authLoginUserFailure = (token) => {
    return {
        type: AUTH_LOGIN_USER_FAILURE,
        payload: token
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