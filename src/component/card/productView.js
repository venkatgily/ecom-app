import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './productView.css';

const ProductView = ({ product }) => {

  return (
    <Row>
      <Col xs lg={4}>
        <img src={product} alt='Product image' />
      </Col>
      <Col xs lg={8}></Col>
    </Row>
  )

}

export default ProductView;
