import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './productCart.css';
const ProductCart = ({cart}) => {
  return (
    <>
    <Col  className='my-1'>
    <Link to={`/product-detail/${cart.id}`}>
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cart.avatar} />
      <Card.Body>
        <Card.Title>{cart.name} </Card.Title>
        <Card.Text>
          $ {cart.price}
        </Card.Text>     
      </Card.Body>
    </Card>
    </Link>
    </Col>
    </>
  )
}

export default ProductCart