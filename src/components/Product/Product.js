import { Button, Col, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ProductsContext } from '../../App';
import { useHistory } from 'react-router';

const Product = (props) => {
    
    const {imageURL, name, price, _id} = props.product;

    const history = useHistory();

    const order = () => {
        history.push(`/checkout/${_id}`);
    }
    
    return (
        
        <Card className="mt-5 m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Row>
                    <Col>
                        <h3>${price}</h3>
                    </Col>
                    <Col>
                        <Button onClick={order} variant="primary">Buy Now</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
    );
};

export default Product;