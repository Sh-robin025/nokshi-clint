import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {

    return (
        <div className="col-md-3">
            <Card className="m-3">
                <Card.Img variant="top" style={{ height: '200px' }} src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    <h4>$ {product.price}</h4>
                </Card.Body>
                <Button variant="primary">Buy Now</Button>
            </Card>
        </div>
    );
};

export default Product;