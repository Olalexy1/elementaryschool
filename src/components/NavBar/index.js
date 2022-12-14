import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


import { logout } from "../../slices/auth";
import EventBus from "../../common/EventBus";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MdPerson } from 'react-icons/md';

import logo from '../../images/ScholarLogo3.png';

import './style.scss';



const NavBar = () => {

  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Navbar fluid={"true"} className="navigation-container" bg="light" expand="lg" sticky="top">
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
            <Nav.Link className='links' href="/admissions">Admissions</Nav.Link>
            <Nav.Link className='links' href="/virtualtour">Virtual Tour</Nav.Link>
            <Nav.Link className='links' href="/gallery">Gallery</Nav.Link>
            <Nav.Link className='links' href="/Contact">Contact Us</Nav.Link>
            {showModeratorBoard && (
              <Nav.Link className='links' href="/mod"><MdPerson /> Moderator Board</Nav.Link>
            )}

            {showAdminBoard && (
              <Nav.Link className='links' href="/admin"><MdPerson /> Admin Board</Nav.Link>
            )}

            {currentUser && (
              <Nav.Link className='links' href="/user"><MdPerson /> User</Nav.Link>
            )}

            <NavDropdown className='links' title="Account" id="basic-nav-dropdown">
              {currentUser ? (
                <><NavDropdown.Item className='drop-links' href="/profile"><MdPerson /> {currentUser.username}</NavDropdown.Item><NavDropdown.Item className='drop-links' href="/login" onClick={logOut}>Logout</NavDropdown.Item></>
              ) : (
                <><NavDropdown.Item className='drop-links' href="/login"><MdPerson /> Login</NavDropdown.Item><NavDropdown.Item className='drop-links' href="/register">Register</NavDropdown.Item></>
              )}
            </NavDropdown>

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