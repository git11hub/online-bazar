import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Orders = () => {
    return (
        <Container className="mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>example@gmail.com</td>
                        <td>Honey</td>
                        <td>$350</td>
                        <td>10-04-2021</td>
                    </tr>                    
                </tbody>
            </Table>
        </Container>
    );
};

export default Orders;