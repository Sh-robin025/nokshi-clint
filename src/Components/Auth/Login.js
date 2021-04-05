import React from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Login = () => {

    return (
        <div className="row justify-content-center">
            <Form className="col-md-4 bg-light p-4 mt-5" style={{ border: '1px solid black' }}>
                <Form.Label>Log in</Form.Label> <br /> <br />
                <Form.Group controlId="formBasicEmail">
                    <Form.Control required name="email" type="email" placeholder="Email"
                        style={{ border: 'none', borderBottom: '1px solid gray' }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control required name="password" type="password" placeholder="Password"
                        style={{ border: 'none', borderBottom: '1px solid gray' }} />
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Form.Group controlId="formBasicCheckbox" style={{ fontSize: '15px' }}>
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Link style={{ fontSize: '15px' }}>Forgot Password ?</Link>
                </div>
                <br />
                <Button variant="primary" block type="submit"
                >Submit</Button> <br />
                <p style={{ fontSize: '15px', textAlign: 'center' }}>Don't have account ? <span style={{ borderBottom: "1px solid blue", color: "blue", cursor: "pointer" }}
                > Create a  account.</span></p>
            </Form>
        </div >
    );
};

export default Login;