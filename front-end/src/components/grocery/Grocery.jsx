// Modules
import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Item from '../item/Item';
import Header from '../header/Header';
import SideBar from '../sidebar/Sidebar';

// Estilos
import './Grocery.scss';

// Code
export default class Grocery extends Component {
	state = {
		grocery: [],
	};

	async componentDidMount() {
		const res = await axios.get('http://localhost:4000/api/grocerystore');

		this.setState({ grocery: res.data });
		console.log(this.state.grocery);
	}

	render() {
		const props = this.props;

		return (
			<React.Fragment>
				<Header></Header>

				<div className='container-info'>
					<SideBar></SideBar>
					<div className='info'>
						<h2 className='title'>BODEGAS</h2>
						<div className='sub'>
							<div className='total'>
								<h3>Bodegas Activos:</h3>
								<p>@NumActivos@</p>
							</div>

							<div className='btn new'>
								<FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
								Nueva Bodega
							</div>
						</div>
						<div className='table'>
							<div className='header-table'>
								<h3>Nombre</h3>
								<h3>Dirección</h3>
								<h3>Nombres</h3>
								<h3>Apellidos</h3>
								<div></div>
							</div>
							{/* {this.state.grocery.map((user) => (
								<Item
									key={user._id}
									username={user.username}
									rol={user.rol}
									nombres={user.nombres}
									apellidos={user.apellidos}
								/>
							))} */}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
