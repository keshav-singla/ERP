import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from 'react-router-redux';
import reducer from "../reducer/reducerIndex";
//import authReducer from '../reducer/authReducer'

const initialState = {};

const configureStore  = (browserHistory) => {

  let middleware = [
    thunkMiddleware, // lets us dispatch() functions
    routerMiddleware(browserHistory), // <-- here I put createHistory() response/value
  ]

return createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
    ))
}

export default configureStore;