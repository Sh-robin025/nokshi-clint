import React, { useContext, useEffect, useState } from 'react';
import { Button, Jumbotron, Container, Table, Col, Image } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { orderPdContext } from '../App';

const CheckOut = () => {
    const { id } = useParams()
    const [orderPd, setOrderPd] = useContext(orderPdContext)
    const [quantity, setQuantity] = useState(1)
    const history = useHistory()

    useEffect(() => {
        fetch(`https://nokshi.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => { setOrderPd(data[0]) })
    }, [id])

    const handleCheckOut = () => {
        history.push("/shipment")
        const orderInfo = { ...orderPd, quantity }
        setOrderPd(orderInfo);
    }

    return (
        <Container>
            <div className="d-flex">
                <h1>
                    <Link to="/"><FaHome /></Link>
                </h1>
                <h2 className="mx-auto mt-2">Check Out</h2>
            </div>
            {
                orderPd === undefined ? <Spinner /> :
                    <Jumbotron className="row">
                        <Col md={3}>
                            <Image src={orderPd.image} style={{ maxWidth: '200px' }} />
                            <h6>{orderPd.brand}</h6><br /><br />
                            <strong>Quantity:</strong>
                            <strong className="ml-3" style={{ fontSize: '20px', letterSpacing: '3px' }}>
                                <AiFillMinusCircle onClick={() => setQuantity(quantity - 1)} /> {quantity} <AiFillPlusCircle onClick={() => setQuantity(quantity + 1)} />
                            </strong>
                        </Col>
                        <Col md={3}>
                            <strong>Details : </strong><br />{orderPd.description}
                        </Col>
                        <Col md={6}>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Product Price</th>
                                        <th>$ {orderPd.price} * {quantity}</th>
                                        <th>$ {orderPd.price * quantity}</th>
                                    </tr>
                                    <tr>
                                        <th colSpan="2">Shipping Cost</th>
                                        <th>$ 40</th>
                                    </tr>
                                    <tr>
                                        <th colSpan="2">Total Cost</th>
                                        <th>$ {orderPd.price * quantity + 40}</th>
                                    </tr>
                                </thead>
                            </Table>
                            <div className="d-flex flex-row-reverse mt-5">
                                <Button variant="primary"
                                    onClick={handleCheckOut}>Proceed To Check Out</Button>
                            </div>
                        </Col>
                    </Jumbotron>
            }
        </Container>
    );
};

export default CheckOut;