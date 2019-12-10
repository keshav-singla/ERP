import React from 'react';
import './App.css';

import Signup from './components/signUp';
import Login from './components/login';
import Dashboard from './components/userHome';

// React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from 'react-redux'
import configureStore from "./store";
import createHistory from 'history/createBrowserHistory';

import RequireAuthentication from './utils/userAuthentication';

const history = createHistory() // <-- createHistory() call

const store = configureStore(history) 

function App() {
  return (
    <div className="App" >
      <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={RequireAuthentication(Dashboard)}  />
        </Switch>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
