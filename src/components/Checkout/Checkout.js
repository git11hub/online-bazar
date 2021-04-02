import { Button, Col } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { AllProductsContext } from '../../App';
import { useParams } from 'react-router';

const Checkout = () => {

    const {id} = useParams();
    console.log(id);
    
    const [allProducts, setAllProducts] = useContext(AllProductsContext);
    console.log(allProducts);

    const selectedProduct = allProducts.find(product => product._id == id);
    console.log(selectedProduct);

    // const [selectedProduct, setSelectedProduct] = useState([]);
    // console.log(selectedProduct);

    // useEffect(() => {
    //     const url = `http://localhost:5055/checkout/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // setAllProducts(data);
    //         })
    // }, [])

    // const selectedProduct = allProducts.find(product => product.name == name);
    // console.log(selectedProduct);

    // const {imageURL, name, price} = allProducts[0];
    // console.log(allProducts);

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
                <Button variant="warning">Check Out</Button>
            </Col>
        </Container>
    );
};

export default Checkout;