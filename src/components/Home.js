import React, { useState,useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import RestCard from './RestCard'
import { RestaurantList } from '../actions/homeAction'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    //state to hold data from api call
   /*  const [restaurants,setrestaurants] = useState([])
 */
    //function to get data from api using asyncawait method
   /*  const  fetchData = async ()=>{
       const result = await fetch('/restaurants.json')
       result.json().then(data=>{
        setrestaurants(data.restaurants);// to change the restaurants empty array to array with the value from restaurants.json
       })
    } */
    /* console.log(restaurants); */

    const dispatch = useDispatch()


    useEffect(() => {//useEffect is used to loading the array at the time of page load itself
      //  fetchData()
      dispatch(RestaurantList())
    },[])//empty array is used to strict the number of array loading
    

    const { restaurants } = useSelector(state=>state.restaurantReducer)
    console.log(restaurants);
  return (
    <Row>
        {
           restaurants.map(item=>(
                    <Col className='px-5 py-3' sm={6} md={4}>
                     <RestCard restaurant={item}/>
                    </Col>
            ) )
        }
    </Row>
  )
}

export default Home