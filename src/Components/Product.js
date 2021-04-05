import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Product = ({ product }) => {
    const history = useHistory()
    const handleBuy = () => {
        history.push(`/checkOut/${product._id}`)
    }

    return (
        <div className="col-md-3">
            <Card className="m-3">
                <Card.Img variant="top" style={{ height: '200px' }} src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    <h4>$ {product.price}</h4>
                </Card.Body>
                <Button variant="primary" onClick={handleBuy}>Buy Now</Button>
            </Card>
        </div>
    );
};

export default Product;