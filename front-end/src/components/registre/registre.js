import React, { Component } from 'react'
import './registre.css';
import {Link} from 'react-router-dom'

export default class registre extends Component {
    render() {
        return (
            <div className="fondo">
            <div className="container-fluid">
                <div className="row">                    
                        <div class="col CarD">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="card-title mr-bottom mr-top">StoreMania</h1>
                                    <h3 class="card-text text-uppercase mr-bottom mr-top">Sign UP</h3>

                                    <div class="flexbox-1">                               
                                        <input type="name" className="caja mr-top" placeholder="Nombre" aria-label="Nombre" />  
                                        <input type="name" className="caja mr-top" placeholder="Apellido" aria-label="Apellido" />
                                    </div>  
                                    
                                    <div class="flexbox-1">
                                    <input type="name" className="caja mr-top" placeholder="Username" aria-label="Username" />                                    
                                    <input type="password" className="caja mr-top" placeholder="Password" aria-label="Passwor" />
                                    </div>

                                   <a href="#" class="btn"> Registrarse</a>
                                </div>
                                <div className="registrar mr-bottom">
                                        <p >¿Ya tienes Cuenta?  </p>
                                        <Link to="/login" >Regresar</Link>
                                    </div>
                                
                            </div>
                        </div>
                        <div className="col footer">
                            <h1>Nombre Autor</h1>
                            <p>&copy; Derechos Reservados</p>
                        </div>
                </div>
            </div>
        </div>
        )
    } 
}
