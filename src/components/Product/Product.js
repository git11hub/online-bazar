import { Button, Col, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ProductsContext } from '../../App';

const Product = (props) => {
    
    const {imageURL, name, price} = props.product;
    console.log(name);

    // const [products, setProducts] = useContext(ProductsContext);
    // const {imageURL, name, price} = products[0];
    // console.log(price);

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
                        <Button variant="primary">Buy Now</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        
    );
};

export default Product;