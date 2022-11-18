import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdPerson } from 'react-icons/md';

import { AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

import logo from '../../images/ScholarLogo3.png';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import './style.scss';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const database = [
    {
      firstName: "Olalekan",
      lastName: "Ajayi",
      userMail: "ajayiolalekan729@gmail.com",
      userPassword: "Olalekan94",
    },
  ]; 

  const errors = {
    mail: "Invalid email",
    pass: "Invalid password"
  };

  const handleValidation = (event) => {

    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]+?=.*[0-9]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Characters and Max 22 Characters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;

  };


  const handleSubmit = (event) => {
    //Prevent page reload
    // event.preventDefault();

    var { email, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.userMail === email.value);

    // Compare user info
    if (userData) {
      if (userData.userPassword !== password.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "mail", message: errors.mail });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    handleSubmit();
  };

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
            <Nav.Link className='links' onClick={handleShow}><MdPerson /> Login</Nav.Link>

            <button className="cssbuttons-io">
              <span> Enquiries </span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={loginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/>
              <Form.Text className="text-danger form-text" id="emailHelp">
                {emailError}
              </Form.Text>
              {renderErrorMessage("mail")}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
              <Form.Text className="text-danger" id="passworderror">
                {passwordError}
              </Form.Text>
              {renderErrorMessage("pass")}
            </Form.Group>
            <Button className="Submit-button" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Form
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavBar;