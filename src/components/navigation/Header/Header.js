import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';

const header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} width="100" height="50" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Vagas</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default header;