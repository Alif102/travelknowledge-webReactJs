
import React from 'react'
import CarRentalSearch from './CarRentalSearch'
import { Card, Container, Row,Col } from 'react-bootstrap'
import covcar from "./Images/covcar.jpg"
import l1 from "./Images/l1.jpg"
import l2 from "./Images/l2.jpg"
import l3 from "./Images/l3.jpg"
import p4 from "./Images/p4.jpg"
import p3 from "./Images/p3.jpg"
import p2 from "./Images/p2.jpg"
import p1 from "./Images/p1.jpg"
import {FcElectricalSensor,FcWikipedia} from 'react-icons/fc'

import Tabs from './Tabs'

const CarRental = () => {
  return (
    <>
    <Container>
        <figure className='position-relative'>
        <img src={covcar} alt="Norway" className='img-fluid abt-pic'/>


        </figure>
        <figcaption className='figcap-abt col-sm-12'>
           <CarRentalSearch/>
        </figcaption>
    </Container>
    <br/>

    <Container className='rent-con'>
        <Row>
            <Col>
            <img src={l1} alt="Norway" className='img-fluid'/>

            <Card.Text>Flexible Rentals</Card.Text>
            <Card.Text>Cancel and changes most Bookings for free up to 48 hours before pick-up</Card.Text>
            </Col>
            <Col>
            <img src={l2} alt="Norway" className='img-fluid'/>
            <Card.Text>No Hidden Fees</Card.Text>
            <Card.Text>Know Exactly what you're playing</Card.Text>
            </Col>
            <Col>
            <img src={l3} alt="Norway" className='img-fluid'/>
            <Card.Text>Price Match Gurantee</Card.Text>
            <Card.Text>Found the same deal for less? We'll match the price</Card.Text>
            </Col>
        </Row>
    </Container>
    <br/>
    <Tabs/>
    <br/>
    <br/>
    <div className='col-10 mx-auto'>
      <h1 className='mt-5'>Cheap rental cars by destination</h1>
    
    <Container>
      <Row>
        <Col>
        <img src={p1} alt="Norway" className='img-fluid car-img'/>
        <h2>Los Angeles</h2>
        <p>Form $22/days</p>
        </Col>
        <Col>
        <img src={p2} alt="Norway" className='img-fluid car-img'/>
        <h2>Miami</h2>
        <p>Form $14/days</p>
        </Col>
        <Col>
        <img src={p3} alt="Norway" className='img-fluid car-img'/>
        <h2>Cabo San Lucas</h2>
        <p>Form $57/days</p>
        </Col>
        <Col>
        <img src={p4} alt="Norway" className='img-fluid car-img'/>
        <h2>St. John</h2>
        <p>Form $78/days</p>
        </Col>
      </Row>
    </Container>
    </div>
    <br/>
    <div className='col-10 mx-auto hl-div'>
    <Container>
        <Row>
            <Col>
            
             <p ><FcWikipedia size={170}/></p>
            <Card.Text className='ptitle2'>Worldwide Coverage</Card.Text>
            <Card.Text className='ptitle1'>Searching over 60,000 locations worldwide to find you the right car at the right price</Card.Text>
            </Col>
            <Col>
            <p ><FcElectricalSensor size={170}/></p>
           
            <Card.Text className='ptitle2'>Book With Confidence</Card.Text>
            <Card.Text className='ptitle1'>Free cancellations on most bookings and no hidden charges or credit card fees</Card.Text>
            </Col>
           
        </Row>
    </Container>
    </div>
    <br/>


    </>
  )
}

export default CarRental