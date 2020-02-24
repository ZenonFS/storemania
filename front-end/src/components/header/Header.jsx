import React, { Component, Fragment } from 'react'
import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid cPrin">
                    <div className="row">
                        <div className="col">
                        <nav className=" navbar navbar-light ">
                            <div className="burguer navbar-brand">
                                <div className="line primera"></div>
                                <div className="line segunda"></div>
                                <div className="line tercera"></div>
                            </div>
                            <h1>StoreMania</h1>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </nav>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
