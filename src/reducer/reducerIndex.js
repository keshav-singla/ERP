import { combineReducers } from 'redux';

const user_reducer =( state=[], action ) => {
    switch(action.type){
        default :
            return state;
    }
}

const reducer = combineReducers({user: user_reducer})

export default reducer;