import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/ck_logo.jpeg';

export const CustomNavbar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navbar-custom sticky-top" style={{ boxSizing: 'border-box', borderBottom: '2px solid #e8eaf1' }}>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link 
            as={Link} 
            to="/" 
            className={`nav-link-custom nav-underline ${location.pathname === '/' ? 'active' : ''}`} 
          >
            Home
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/about" 
            className={`nav-link-custom nav-underline ${location.pathname === '/about' ? 'active' : ''}`} 
          >
            About
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/service" 
            className={`nav-link-custom nav-underline ${location.pathname === '/service' ? 'active' : ''}`} 
          >
            Services
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/contact" 
            className={`nav-link-custom nav-underline ${location.pathname === '/contact' ? 'active' : ''}`} 
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
