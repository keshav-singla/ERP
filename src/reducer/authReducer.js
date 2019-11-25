import { combineReducers } from 'redux';

const initialState = {
    token: null,
    email: null,
    isAuthenticated: false,
    isAuthenticating: false,
};

const auth_reducer = (initialState, action) => {
    switch(action.type){
        case 'USERCREATED':
            return initialState 
        
        default : 
            return initialState ;    

        }
}

export default auth_reducer;