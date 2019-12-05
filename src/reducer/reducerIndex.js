import { combineReducers } from 'redux';

const user_reducer =( state=[], action ) => {
    switch(action.type){
        case 'USERCREATED':
            state = action.payload
            console.log(state);
            return state

        case 'SIGNIN':
            state = action.payload
            console.log(state);
            return state

        case 'SIGNOUT':
            // this.props.history.dispatch(`/`);
            state = action.payload
            console.log(state);
            return state    
        
        default :
            return state;
    }
}

const initialState = {
    token: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
};

const auth_reducer = (state = initialState, action) => {
    // console.log(initialState);
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

const reducer = combineReducers( {user: user_reducer, auth_reducer} )

export default reducer;