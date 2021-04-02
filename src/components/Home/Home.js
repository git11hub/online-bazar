import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';
import { AllProductsContext } from '../../App';

const Home = () => {

    const [allProducts, setAllProducts] = useContext(AllProductsContext);
    console.log(allProducts);

    const [products, setProducts] = useState([]);
    console.log(products);

    // const [events, setEvents] = useState([]);
    // console.log(events);

    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setAllProducts(data);
            })
    }, [])

    return (
        <Container>
            <Row>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </Row>

        </Container>
    );
};

export default Home;