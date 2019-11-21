import { combineReducers } from 'redux';

const user_reducer =( state=[], action ) => {
    switch(action.type){
        case 'USERCREATED':
            console.log(state);
            console.log(action.payload);
            
            return state
        case 'SIGNIN':
            console.log(state);
            console.log(action.payload);
            
            return state

        default :
            return state;
    }
}

const reducer = combineReducers( {user: user_reducer} )

export default reducer;