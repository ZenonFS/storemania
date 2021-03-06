import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login.css';

export default class Login extends Component {
	render() {
		return (
			<div className='fondo'>
				<div className='container-fluid'>
					<div className='row'>
						<div class='col CarD'>
							<div class='card'>
								<div class='card-body'>
									<h1 class='card-title mr-bottom mr-top title'>StoreMania</h1>
									<h3 class='card-text text-uppercase mr-bottom mr-top'>
										login
									</h3>
									<input
										type='name'
										className='caja mr-bottom'
										placeholder='Username'
										aria-label='Username'
									/>
									<input
										type='password'
										className='caja mr-top'
										placeholder='Password'
										aria-label='Password'
									/>
									<Link to='/users' class='btn'>
										Iniciar
									</Link>
								</div>
								<div className='registrar mr-bottom'>
									<p>¿No tienes alguna cuenta?</p>
									<Link to='/registre'>Registrate aqui</Link>
								</div>
							</div>
						</div>
						<div className='col footer'>
							<h1>Yarah, Alex & Suárez</h1>
							<p>&copy; Derechos Reservados</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
