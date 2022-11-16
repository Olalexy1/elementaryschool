import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdPerson } from 'react-icons/md';

import logo from '../../images/ScholarLogo3.png';

import './style.scss';

function NavBar() {
  return (
    <Navbar fluid className="navigation-container" bg="light" expand="lg" sticky="top">
      <Container fluid className='navigation'>
      <Navbar.Brand className="brand" href="/">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Scholars Elementary School logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links-container ms-auto my-1">
            <Nav.Link className='links' href="/">Home</Nav.Link>
            <Nav.Link className='links' href="/Rooms">Admissions</Nav.Link>
            <Nav.Link className='links' href="/Booking">Virtual Tour</Nav.Link>
            <Nav.Link className='links' href="/Blog">Gallery</Nav.Link>
            <Nav.Link className='links' href="/Contact">Contact Us</Nav.Link>
            <Nav.Link className='links' href="#link"><MdPerson/> Login</Nav.Link>

            <button className="cssbuttons-io">
              <span> Enquiries </span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;