import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/ck_logo.png';

export const CustomNavbar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navbar-custom sticky-top pe-2 ps-2" style={{ boxSizing: 'border-box', borderBottom: '2px solid #e8eaf1' }}>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav id='nav-link'>
          {/* <Nav.Link
            as={Link}
            to="/"
            className={`nav-link-custom nav-underline ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Nav.Link> */}
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
            to="/news"
            className={`nav-link-custom nav-underline ${location.pathname === '/news' ? 'active' : ''}`}
          >
            News
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

      <div className='d-flex gap-2' id='nav-button'>
        <button className='hiring-btn' style={{ width: '120px', padding: '.5rem', background: '#f6f6f4', color: 'black', border: 'none' }}>We're hiring</button>
        <button style={{ width: '120px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}>Get Started</button>
      </div>
    </Navbar>
  );
};
