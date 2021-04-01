import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const Product = () => {
    return (
        <Card className="mt-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.ibb.co/Gcc0x1q/012218f4d43ade31f4e6146e2178f4be.jpg" />
            <Card.Body>
                <Card.Title>Product Name</Card.Title>

                <Row>
                    <Col>
                        <h3>$455</h3>
                    </Col>
                    <Col>
                        <Button variant="primary">Buy Now</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Product;