import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons'

import './sidebar.scss'

export default class Sidebar extends Component {
    obtenerRuta = () => {
        console.log(this.props);
        
    }
    render() {

        return (
            <div className="sidebar">
                
                <Link className="item" to="/users">
                    <FontAwesomeIcon icon={faUsers} onClick={this.obtenerRuta()}></FontAwesomeIcon>
                </Link>
                <Link className="item" to="/grocerystores">
                    <FontAwesomeIcon icon={faStoreAlt}></FontAwesomeIcon>
                </Link>
                <Link className="item" to="/articles">
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </Link>
            </div>
        )
    }
}
