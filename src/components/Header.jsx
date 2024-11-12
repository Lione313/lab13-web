import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Agrega tu archivo CSS para personalizar los estilos

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="logo">Lab13-React+SpringBoot</h1>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/clientes" className="nav-link">Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productos" className="nav-link">Productos</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

