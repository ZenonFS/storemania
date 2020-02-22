import React, { Component } from 'react';
import './Item.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Item extends Component {
    rol = (rol) => {
        switch (rol) {
            case 1:
                return 'Admin';

            case 2:
                return 'Bodeguero';
            

            case 3:
                return 'Vendedor';
            

            case 4:
                return 'Comprador';

        
            default:
   
                return 'Indefinido';
        }
    }

    render() {
        const props = this.props;

        

        return (
            <div className="item">
                <p>{props.username}</p>
                <p>{this.rol(props.rol)}</p>
                <p>{props.nombres}</p>
                <p>{props.apellidos}</p>
                <div>
                    <div className="btn edit"><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></div>
                    <div className="btn delete"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></div>
                </div>
            </div>
        )
    }
}
