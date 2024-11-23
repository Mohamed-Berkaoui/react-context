import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductBox({product}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} height={200} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
    {product.price} $
      </Card.Text>
   <Link to={`/product/${product.id}`}>   <Button variant="primary">show more</Button></Link>
    </Card.Body>
  </Card>
  )
}

export default ProductBox