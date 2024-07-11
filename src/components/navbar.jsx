import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/ck_logo.png';
import { Hiringform } from './hiring_form';

export const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-custom sticky-top pe-2 ps-2"
        style={{ boxSizing: 'border-box', borderBottom: '2px solid #e8eaf1' }}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav id="nav-link">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-custom nav-underline ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link-custom nav-underline ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/service"
              className={`nav-link-custom nav-underline ${location.pathname === '/service' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/news"
              className={`nav-link-custom nav-underline ${location.pathname === '/news' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              News
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link-custom nav-underline ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

         <div className="d-flex gap-2" id="nav-button">
          <button
            className="hiring-btn"
            style={{ width: '120px', padding: '.5rem', background: '#f6f6f4', color: 'black', border: 'none' }}
            onClick={handleShow}
          >
            We're hiring
          </button>
          <a href='/Getstart'>
          <button
            style={{ width: '120px', padding: '.5rem', background: '#f85c1d', color: 'white', border: 'none' }}
          >
            Get Started
          </button></a>
        </div>
      </Navbar>

      {/* Contact Form Modal */}
      <Hiringform showModal={showModal} handleClose={handleClose} />
    </>
  );
};
