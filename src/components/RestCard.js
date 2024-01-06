import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

function RestCard({restaurant}) {
    console.log(restaurant);

  return (
    <Link to={`/view-restaurant/${restaurant.id}`} style={{color:'white',textDecoration:'none'}}>
      <Card>
          <Card.Img style={{height: '300px'}}  variant="top" src={restaurant.photograph} />
          <Card.Body className='m-2'>
            <Card.Title className='text-center text-warning'>{restaurant.name}</Card.Title>
           <hr/>
           <Row>
            <Col className='ms-4'>
            <Card.Text>
              <p>{restaurant.neighborhood}</p>
            </Card.Text>
            </Col>
            <Col className='ms-4'>
            <Card.Text>
              <p>Cuisine : {restaurant.cuisine_type}</p>
            </Card.Text>
            </Col>
           </Row>
          </Card.Body>
        </Card>
    </Link>
  )
}

export default RestCard