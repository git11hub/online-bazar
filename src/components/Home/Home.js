import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    return (
        <Container>
            
            <Product></Product>
        </Container>
    );
};

export default Home;