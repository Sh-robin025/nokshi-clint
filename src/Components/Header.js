import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown, DropdownButton, Button, Container, Badge } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import { orderListContext, userContext } from '../App';

const Header = () => {
    const history = useHistory()
    const [user, setUser] = useContext(userContext)
    const [orderList, setOrderList] = useContext(orderListContext)

    useEffect(() => {
        fetch('https://nokshi.herokuapp.com/orders?email=' + user?.email)
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [user?.email])

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Nokshi</Navbar.Brand>
                    <Nav>
                        <Link to="/" className="">
                            <Button variant="" className="text-light">
                                <h6>Home</h6>
                            </Button>
                        </Link>
                        <Link to="/admin" className="mx-5">
                            <Button variant="" className="text-light">
                                <h6>Admin</h6>
                            </Button>
                        </Link>
                        {
                            user ? <DropdownButton
                                menuAlign="right"
                                title={<img src={user.photoURL} alt="" style={{ height: '30px', borderRadius: '50%' }} />}
                                id="dropdown-menu-align-right"
                            >
                                <Dropdown.Item eventKey="1" className="text-center">
                                    <Button variant="outline-info"
                                        onClick={() => history.push('/orders')} >
                                        <FiShoppingCart /> <Badge variant="light">{orderList?.length}</Badge>
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" className="text-center">{user.displayName}</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4" className="text-center bg-light">
                                    <Button variant="outline-info"
                                        onClick={() => setUser(null)}
                                    >
                                        Log Out</Button>
                                </Dropdown.Item>
                            </DropdownButton>
                                : <Button variant="outline-info"
                                    onClick={() => history.push('/login')}>Login</Button>
                        }
                    </Nav>


                </Container>
            </Navbar>
        </div>
    );
};

export default Header;