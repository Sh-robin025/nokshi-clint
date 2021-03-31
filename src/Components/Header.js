import React from 'react';
import { Navbar, Nav, Dropdown, DropdownButton, Button, Container, Badge } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Nokshi</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/admin" className="mx-5">Admin</Nav.Link>
                        <Button variant="outline-info">Login</Button>
                    </Nav>

                    {/* <DropdownButton
                        menuAlign="right"
                        title={<FaUserCircle />}
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item eventKey="1">
                            <Button variant="outline-info">
                                <FiShoppingCart /> <Badge variant="light">0</Badge>
                            </Button>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton> */}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;