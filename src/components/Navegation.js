import React from 'react';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import logo from "../img/logo_azul.png";

class Navegation extends React.Component {

    render() {
        return (
            <Navbar sticky="top" bg="light" expand="lg">
                <div className="container">
                <Navbar.Brand href="/">
                    <img src={logo} alt="Plasticos Ema" width="150"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Inicio</Link>
                        <Link to="/products" className="nav-link">Productos</Link>
                        <Link to="/ubication" className="nav-link">Ubicacion</Link>
                        {/* <Link to="/contact" className="nav-link">Contacto</Link> */}
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
};

export default Navegation;