import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import ProductCard from '../component/card/productCard';

import data from '../data/mock';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          { data.map((product)=> (
               <ProductCard product={product}   />
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
