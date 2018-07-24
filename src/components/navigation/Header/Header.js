import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';
import {Link} from 'react-router-dom';

const header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="100" height="50" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/vagas">Vagas</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default header;