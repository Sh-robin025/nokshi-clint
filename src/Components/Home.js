import React, { useEffect, useState } from 'react';
import Header from './Header'
import Product from './Product';
import { Container } from 'react-bootstrap';
import Spinner from './Spinner';

const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch("https://nokshi.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header />
            <Container>
                <div className="row mt-5">
                    {
                        products != null ? products.map(product => <Product product={product} key={product._id} />) :
                            <Spinner />
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;