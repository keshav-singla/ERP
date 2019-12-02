// ACTION TO BE PERFORMED ACCORDING TO THEIR TYPE

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
export const userSignOut = (signedOut) => {
    return {
        type : 'SIGNOUT',
        payload : signedOut
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