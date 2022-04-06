import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = ({ product }) => {


  return (
    <Card key={product.id} style={{ display: 'inline-block', width: '18rem', margin: '0 1rem 2rem 1rem' }}>
      <Link to="/product-view">
        <Card.Img variant="top" src={product.img} style={{ height: '255px' }} />
      </Link>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          {/* <Button className="view-button"><Link to="/product-view">View</Link></Button> */}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
