import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import './App.scss';

//bootstrap
import $ from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

//rutas
import Users from './components/users/Users'
import Header from './components/header/Header'
import Login from './components/login/Login'

function App() {
  return (
    // <div className="App">
    //   <Users title="Usuario"></Users>
    // </div>
    <Router>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route path='/users' component={Users}/>
      <Route path='/dashboard' component={Header} />
    </Switch>
  </Router>
  );
}

export default App;
