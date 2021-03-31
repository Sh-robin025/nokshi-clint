import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const imageHost = (e) => {
        const imageData = new FormData()
        imageData.set('key', 'c0c27e2c45a2d6cf07a97ef163c77a21');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImageURL(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const onSubmit = (data) => {
        const productData = {
            title: data.productName,
            description: data.details,
            price: data.price,
            brand: data.brand,
            image: imageURL,
        }

        fetch("http://localhost:5050/addProduct", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                console.log("server side responsed", res);
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="col-md-9" style={{ height: '100vh' }}>
            <Container className="mt-5">
                <h4 className="p-3">Add New Product :</h4>
                <Form onSubmit={handleSubmit(onSubmit)}
                    className="bg-light p-5">
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            <h6>Product Name :</h6>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Product Name"
                                name="productName" ref={register({ required: true })} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            <h6>Details : </h6>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Details"
                                name="details" ref={register({ required: true })} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            <h6>Price : </h6>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" placeholder="Price"
                                name="price" ref={register({ required: true })} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            <h6>Image :</h6>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file"
                                onChange={imageHost}
                                name="image" ref={register({ required: true })}>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            <h6>Brand : </h6>
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="brand"
                                name="brand" ref={register({ required: true })} />
                        </Col>
                    </Form.Group>
                    <br />
                    <div className="d-flex flex-row-reverse">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;