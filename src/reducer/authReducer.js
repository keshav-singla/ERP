import { createReducer } from '../utils'
import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGOUT_USER,
} from '../constants';


const initialState = {
    token: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
};

export default createReducer(initialState, {
    [AUTH_LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: true,
        });
    },
    [AUTH_LOGIN_USER_SUCCESS]: (state, payload) => {
        console.log(payload);
        console.log(state);
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: true,
            token: payload,
        });
    },
    [AUTH_LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            isAuthenticating: false,
            isAuthenticated: false,
            token: null,
        });
    },
    [AUTH_LOGOUT_USER]: (state, payload) => {
        return Object.assign({}, state, initialState);
    },
});

















































// import { combineReducers } from 'redux';

// const initialState = {
//     token: null,
//     email: null,
//     isAuthenticated: false,
//     isAuthenticating: false,
// };

// const auth_reducer = (state = initialState, action) => {
//     console.log(initialState);
//     switch(action.type){    
//         case 'AUTH_LOGIN_USER_REQ':
//             return Object.assign({}, state, {
//                 isAuthenticating: true,
//                 isAuthenticated: false,
//             });
        
//         case 'AUTH_LOGIN_USER_SUCESS':
//             return Object.assign({}, state, {
//                     isAuthenticating: false,
//                     isAuthenticated: true,
//                     token: action.payload,
//                 });

//         case 'AUTH_LOGIN_USER_FAILURE':
//             return Object.assign({}, state, {
//                 isAuthenticating: false,
//                 isAuthenticated: false,
//                 token: null,
//             });

//         case 'AUTH_LOGOUT_USER':
//             return Object.assign({}, state, {
//                 isAuthenticating: false,
//                 isAuthenticated: false,
//                 token: null,
//             });
        
//         default:
//             return initialState ;
//         }
// }

// const authReducer = combineReducers( {userAuth: auth_reducer} )


// export default authReducer;