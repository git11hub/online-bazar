import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Online Bazar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                    <Button href="/login" variant="danger">Login</Button>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </Container>
    );
};

export default Header;