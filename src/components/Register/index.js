import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import './style.scss';

const Register = () => {
    let navigate = useNavigate();
    const [successful, setSuccessful] = useState(false);
    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(true);
    const [type, setType] = useState(false);
    const [loading, setLoading] = useState(false);

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
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            )
            .required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 6 &&
                    val.toString().length <= 40
            )
            .required("This field is required!"),
    });

    const handleRegister = (formValue) => {
        const { username, email, password } = formValue;

        setSuccessful(false);

        dispatch(register({ username, email, password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
                navigate("/profile");
                window.location.reload();
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

    return (
        <Container className="register-form py-5">
            <Row className="justify-content-md-center form-container">
                <Col lg={6} md={8}>
                    <h3>Registration Form</h3>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                    >
                        <FormikForm>
                            {!successful && (
                                <div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="username">Username</label>
                                        <Field name="username" type="text" className="form-control mb-2" />
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="email">Email</label>
                                        <Field name="email" type="email" className="form-control mb-2" />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">Password</label>
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
                                        <Button type="submit" className="cssbuttons-io" disabled={loading}>
                                            {loading && (
                                                <Spinner animation="border" />
                                            )}
                                            <span>Register</span>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </FormikForm>
                    </Formik>

                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Register;