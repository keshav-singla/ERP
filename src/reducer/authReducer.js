import { combineReducers } from 'redux';

const initialState = {
    token: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
};

const auth_reducer = (initialState, action) => {
    console.log(initialState);
    switch(action.type){    
        case 'AUTH_LOGIN_USER_REQ':
            return initialState;
        
        case 'AUTH_LOGIN_USER_SUCESS':
            return initialState;

        case 'AUTH_LOGIN_USER_FAILURE':
            return initialState;

        case 'AUTH_LOGOUT_USER':
            return initialState;
        
        default:
            return initialState ;
        }
}

export default auth_reducer;