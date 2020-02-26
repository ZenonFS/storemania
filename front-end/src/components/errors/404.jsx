import React, { Component } from 'react';

// Styles
import './assets/scss/style.scss';

// Other Assets
import meme from './assets/img/gato-llorando.png';

export default class error404 extends Component {
	render() {
		const { location } = this.props;

		return (
			<div className='errors'>
				<h1>Error 404 - Page no Found!</h1>
				<p>
					No match to <code>{location.pathname}</code>
				</p>
				<img src={meme} alt='Gato iorando' className='meme' />
			</div>
		);
	}
}
