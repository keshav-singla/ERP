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
            localStorage.removeItem("Refresh_Token")
            // this.props.history.push(`/`);
            state = action.payload
            console.log(state);
            return state    
        
        default :
            return state;
    }
}

const reducer = combineReducers( {user: user_reducer} )

export default reducer;