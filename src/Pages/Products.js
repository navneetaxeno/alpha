import React from 'react'
import {useState, useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from '../Components/Button';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            }
            )
            .catch(error => {
                setError(error);
                setLoading(false);
            }
            );
    }, []);

  return (
    <div>
        {loading ? <div>Loading...</div> :
        <Container className="py-5">
        <Row>
          {products &&
            products.map((product, i) => {
              return (
                <Col key={i} xs={12} sm={6} md={3}>
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Button className="btn btn-sm btn-primary mr-5" text="Read More" />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
        }
    </div>
  )
}
