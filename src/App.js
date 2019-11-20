import React from 'react';
import './App.css';
import Signup from './components/signUp';
import Login from './components/login';
import Dashboard from './components/userHome';


function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Login />
      <Dashboard /> */}
    </div>
  );
}

export default App;
