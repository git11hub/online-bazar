import { Button, Col } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AllProductsContext } from '../../App';
import { useParams } from 'react-router';

const Checkout = () => {

    const {id} = useParams();
    
    const [allProducts, setAllProducts] = useContext(AllProductsContext);

    const selectedProduct = allProducts.find(product => product._id == id);
    
    return (
        <Container className="mt-5">
            <h2>Check Out</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{selectedProduct.name}</td>
                        <td>1</td>
                        <td>{selectedProduct.price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2">Total</td>
                        <td>{selectedProduct.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Col className="text-right">
                <Button href="/orders" variant="warning">Check Out</Button>
            </Col>
        </Container>
    );
};

export default Checkout;