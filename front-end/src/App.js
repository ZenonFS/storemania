import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

//bootstrap
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

//rutas
import Users from './components/users/Users';
import GroceryStores from './components/grocery/Grocery';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Error404 from './components/errors/404';
import registre from './components/registre/registre';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/grocerystores' component={GroceryStores} />
				<Route exact path='/users' component={Users} />
				{/* <Route path='/dashboard' component={Header} /> */}
				<Route path='/registre' component={registre} />
				<Route exact path='/login' component={Login} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
}

export default App;
