import React, { useContext } from 'react';
import { Container } from 'react-bootstrap'
import ShowOrder from './ShowOrder'
import { orderListContext, userContext } from '../App';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Orders = () => {
    const [user, setUser] = useContext(userContext)
    const [orderList, setOrderList] = useContext(orderListContext)
    return (
        <Container >
            <h1>
                <Link to="/"><FaHome /></Link>
            </h1>
            <div className="text-center">
                <h3>Hello {user.displayName}</h3>
                <h5>We received {orderList.length} order from you.</h5>
                {
                    orderList.map(item => <ShowOrder data={item} key={item._id} />)
                }
            </div>
        </Container>
    );
};

export default Orders;