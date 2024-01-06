import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroupItem} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from './RestReview';
import { useDispatch, useSelector } from 'react-redux';
 import { RestaurantList } from '../actions/homeAction'; 

function RestaurantView() {
 /*  const [restaurants,setRestaurants] = useState([])
 */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   const dispatch = useDispatch() 

  const params = useParams()
  console.log(params.id);

  /* const fetchData = async ()=>{
    const res = await fetch('/restaurants.json')
   res.json().then((data)=>{
    setRestaurants(data.restaurants)
   })
  } */
  /* console.log(restaurants); */

  
   useEffect(()=>{
    /* fetchData() */
   dispatch(RestaurantList()) 
  },[]) 

  const {restaurants} = useSelector(state=>state.restaurantReducer)

  const restaurant = restaurants.find(item=>item.id == params.id)
  console.log(restaurant);
  return (
    <>
        {restaurant ?(
          <Row className='p-3'>
            <Col md={1}></Col>
            <Col md={3}>
              <Image className='rounded' src={restaurant.photograph} alt={restaurant.name} fluid ></Image>
            </Col>
            <Col  md={7}>
            <hr></hr>
              <h4 className='text-center'><b><span className='text-warning'>RESTAURANT</span >&nbsp; DETAILS</b></h4>
              <hr></hr>
            <ListGroup className='mt-4'>
            <ListGroup.Item><h4 className='text-center p-4'>{restaurant.name}</h4></ListGroup.Item>
            <ListGroup.Item>Neighborhood : {restaurant.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Cuisine_type : {restaurant.cuisine_type}</ListGroup.Item>
            <ListGroup.Item>Address : {restaurant.address}</ListGroup.Item>

            <ListGroup.Item className='text-center p-4'>
            <Button variant="warning" onClick={handleShow}>
                Operating Hours
            </Button>
                <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ListGroup>
                          <ListGroup.Item>Monday : {restaurant.operating_hours.Monday}</ListGroup.Item>
                          <ListGroup.Item>Tuesday : {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                          <ListGroup.Item>Wednesday : {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                          <ListGroup.Item>Thursday : {restaurant.operating_hours.Thursday}</ListGroup.Item>
                          <ListGroup.Item>Friday : {restaurant.operating_hours.Friday}</ListGroup.Item>
                          <ListGroup.Item>Saturday : {restaurant.operating_hours.Saturday}</ListGroup.Item>
                          <ListGroup.Item>Sunday : {restaurant.operating_hours.Sunday}</ListGroup.Item>
                        </ListGroup>
                        
                      </Modal.Body>
              </Modal>
              &nbsp;&nbsp;&nbsp;
              <RestReview reviews={restaurant.reviews} />
            </ListGroup.Item>
          </ListGroup>
            <hr className='mt-4'></hr>
            </Col>
            <Col md={1}></Col>
          </Row>
          ) : 'nothing to display'}
    </>

  )
}

export default RestaurantView