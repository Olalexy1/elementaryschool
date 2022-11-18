import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import { logout } from "../../slices/auth";
import EventBus from "../../common/EventBus";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdPerson } from 'react-icons/md';

import logo from '../../images/ScholarLogo3.png';

import database from '../database';

import './style.scss';




const NavBar = () => {
  
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
            <Nav.Link className='links' href="/login"><MdPerson />Login</Nav.Link>

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