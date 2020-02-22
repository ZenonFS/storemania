import React, { Component } from 'react'
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="fondo">
                <div className="container-fluid">
                    <div className="row">                    
                            <div class="col CarD">
                                <div class="card">
                                    <div class="card-body">
                                        <h1 class="card-title mr-bottom mr-top">StoreMania</h1>
                                        <h3 class="card-text text-uppercase mr-bottom mr-top">login</h3>                                        
                                        <input type="name" className="caja mr-bottom" placeholder="Username" aria-label="Username" />                                        
                                        <input type="password" className="caja mr-top" placeholder="Password" aria-label="Password" />
                                       <a href="#" class="btn"> Iniciar</a>
                                    </div>
                                    <div className="registrar mr-bottom">
                                        <p >¿No tienes alguna cuenta?  </p>
                                        <a>Registrate aqui</a>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col footer">
                                <h1>Nombre Autor</h1>
                                <p>&copy; Derecos Reservados</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
