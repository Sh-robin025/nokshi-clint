import React, { useContext, useState } from 'react';
import { Button, Form, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { orderPdContext, userContext } from '../App';
import { FaHome } from 'react-icons/fa';
import { MdCloudDone } from 'react-icons/md';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Shipment = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(userContext);
    const [orderPd, setOrderPd] = useContext(orderPdContext);
    const [orderConfirm, setOrderConfirm] = useState(false);

    const onSubmit = data => {
        const date = new Date().toDateString('dd/mm/yyyy')
        const info = { ...data, orderPd, date }
        fetch("https://nokshi.herokuapp.com/addOrder", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => {
                res.status === 200 && setOrderConfirm(true)
            })
    }
    return (
        <Container>
            <div className="d-flex">
                <h1>
                    <Link to="/"><FaHome /></Link>
                </h1>
                <h2 className="mx-auto mt-2">Shipment :</h2>
            </div>
            {
                orderConfirm ? <div className="text-center">
                    <MdCloudDone style={{ fontSize: '100px' }} />
                    <h4>{user.email}</h4>
                    <h3>Your Order has been Placed Successfully.</h3>
                    <Link to="/">Go to Home.</Link>
                </div> :
                    <Form className="bg-light p-4" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={user.displayName} name="name"
                                    ref={register({ required: true, maxLength: 20 })} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter email"
                                    defaultValue={user.email}
                                    name="email"
                                    ref={register({ required: true })} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Enter phone number"
                                    defaultValue={user.phone} name="phone"
                                    ref={register({ required: true })} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" name="address1"
                                    ref={register({ required: true })} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control name="city" ref={register({ required: true })} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" name="state" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control name="zip" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            }
        </Container>
    );
};

export default Shipment;