import React from 'react';
import './App.css';
import Signup from './components/signUp';
import Login from './components/login';
import Dashboard from './components/userHome';

//React-Router
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
        <Route eaxctpath="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Dashboard />
        </Route>
      </Switch> 
      </div>
    </Router>
  );
}

export default App;
