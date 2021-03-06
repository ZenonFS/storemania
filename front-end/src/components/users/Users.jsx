// Modules
import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Item from './../item/Item';
import Header from './../header/Header';
import SideBar from './../sidebar/Sidebar';

// Estilos
import './Users.scss';

// Code
export default class Users extends Component {
	state = {
		users: [],
	};

	async componentDidMount() {
		const res = await axios.get('http://localhost:4000/api/users');

		this.setState({ users: res.data });
		console.log(this.state.users);
	}

	render() {
		const props = this.props;

		return (
			<React.Fragment>
				<Header></Header>

				<div className='container-info'>
					<SideBar></SideBar>
					<div className='info'>
						<h2 className='title'>USUARIOS</h2>
						<div className='sub'>
							<div className='total'>
								<h3>Usuarios Activos:</h3>
								<p>@NumActivos@</p>
							</div>

							<div className='btn new'>
								<FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
								Nuevo Usuario
							</div>
						</div>
						<div className='table'>
							<div className='header-table'>
								<h3>Username</h3>
								<h3>Rol</h3>
								<h3>Nombres</h3>
								<h3>Apellidos</h3>
								<div></div>
							</div>
							{this.state.users.map((user) => (
								<Item
									key={user._id}
									username={user.username}
									rol={user.rol}
									nombres={user.firstName}
									apellidos={user.lastName}
								/>
							))}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
