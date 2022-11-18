import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import './style.scss';

import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

const Login = () => {
  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const Eye = () => {
    if (password == "password") {
      setPassword("text");
      setEye(false);
      setType(true);
    }
    else {
      setPassword("password");
      setEye(true);
      setType(false);
    }
  }

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <Container className="login-form py-5">
      <Row className="justify-content-md-center form-container">
        <Col lg={6} md={8}>
          <h3>Login Form</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <FormikForm>
              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="form-control mb-2" required />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <InputGroup className="input-group">
                  <Field name="password" type={password} className="form-control mb-2" required />
                  <Form.Text onClick={Eye}>{eye ? <AiFillEyeInvisible className='eye' /> : <AiFillEye className='eye' />}</Form.Text>
                </InputGroup>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group mb-3">
                <Button type="submit" className="cssbuttons-io form-group" disabled={loading}>
                  {loading && (
                    <Spinner animation="border" />
                  )}
                  <span>Login</span>
                </Button>
              </div>

            </FormikForm>
          </Formik>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Col>
      </Row>


    </Container>
  );
};

export default Login;