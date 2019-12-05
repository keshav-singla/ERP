import { combineReducers } from 'redux';

const initialState = {
    token: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
};

const auth_reducer = (state = initialState, action) => {
    console.log(initialState);
    switch(action.type){    
        case 'AUTH_LOGIN_USER_REQ':
            return Object.assign({}, state, {
                isAuthenticating: true,
            });
        
        case 'AUTH_LOGIN_USER_SUCESS':
            return Object.assign({}, state, {
                    isAuthenticating: false,
                    isAuthenticated: true,
                    token: action.payload,
                });

        case 'AUTH_LOGIN_USER_FAILURE':
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
            });

        case 'AUTH_LOGOUT_USER':
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
            });
        
        default:
            return initialState ;
        }
}

const authReducer = combineReducers( {userAuth: auth_reducer} )


export default authReducer;