import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';
import { ProductsContext } from '../../App';

const Home = () => {

    const [products, setProducts] = useContext(ProductsContext);
    console.log(products);

    // const [events, setEvents] = useState([]);
    // console.log(events);

    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <Container>
            <Row>
                
                
                {
                    products.map(product =><Product product={product}></Product>)
                }
                {/* {
                    events.map(event => <Product></Product>)
                } */}
            </Row>

        </Container>
    );
};

export default Home;