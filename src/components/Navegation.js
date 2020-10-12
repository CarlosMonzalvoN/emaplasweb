import React, {useState } from 'react';
import '../css/navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import logo from "../img/logo_azul.png";

function Navegation() {
    
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar sticky="top" bg="light" expand="lg" expanded={expanded}>
            <div className="container">
            <Navbar.Brand href="/">
                <img src={logo} alt="Plasticos Ema" width="150"></img>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link onClick={() => setExpanded(false)} to="/" className="nav-link">Inicio</Link>
                    <Link onClick={() => setExpanded(false)} to="/products" className="nav-link">Productos</Link>
                    <Link onClick={() => setExpanded(false)} to="/contact" className="nav-link">Contacto</Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navegation;