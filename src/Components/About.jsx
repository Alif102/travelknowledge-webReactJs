import React from 'react'
import FlightSearch from './FlightSearch'
import covair from "./Images/covair.jpg"
import flight1 from "./Images/flight1.jpg"
import flight2 from "./Images/flight2.jpg"
import flight3 from "./Images/flight3.jpg"
import flight4 from "./Images/flight4.jpg"
import { Container,Row,Col } from 'react-bootstrap'
import {FcCollaboration,FcMultipleInputs,FcGraduationCap,FcCamcorderPro } from 'react-icons/fc'


import FeatureDestination from './FeatureDestination'




const About = () => {
  return (
    <>
    <Container>
        <figure className='position-relative'>
        <img src={covair} alt="Norway" className='img-fluid abt-pic'/>


        </figure>
        <figcaption className='figcap-abt col-sm-12'>
           <FlightSearch/>
        </figcaption>
    </Container>

    
     
<section className='abt-sec-two'>

  <Container>
    <Row>
      <Col> <h3 className='h3cls'>Best Flight Deals <FcCollaboration/></h3>
        <p>No need to shop multiple sites any more. We've already done that by searching hundreds of cheap flights for you– scouring premium airlines, low-cost carriers and the biggest online travel agencies for the best deals. We'll even check alternate dates and nearby airports to help you save money, time, even sanity on airline tickets.</p>
</Col>
<Col><h3 className='h3cls'>Flight Search Filters<FcMultipleInputs/></h3>
        <p>Our filters make it a snap to easily find the cheap flight that's right for you. Find direct flights that are nonstop, avoid early departure times— or try our Best Value filter, which sorts based on price, duration, and additional factors.</p></Col>
    </Row>
  </Container>
  <Container>
    <Row>
      <Col> <h3 className='h3cls'>In-Flight Experience <FcGraduationCap/></h3>
        <p>Want Wi-Fi? More legroom? Or even a seat that allows you to sleep perfectly flat? Tripadvisor Flights now makes it easier to find the amenities that can make or break your flight. Find which flights include Wi-Fi, live TV, power outlets, free baggage, and more.</p>
        </Col>
        <Col> <h3 className='h3cls'>Airplane Photos <FcCamcorderPro/></h3>
        <p>Thousands of photos from real travelers let you peek inside the plane before you buy your ticket. Our airline reviews provide unbiased opinions to help you select the right airline and flight for your trip.</p>
</Col>


    </Row>
  </Container>
      
      </section>
    
      


      <FeatureDestination/>

      <Container>
        <h1  className='h-div1'>Airplane Reviews</h1>
          <Row>
            <Col>
        <img src={flight1} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle1'>Read airline Reviews from Our Global travel Community trip</p>
        <p className='ptitle'>America Airlines</p>
        <p className='preveiw'>23,786 Reviews</p>
        <p className='pcoun'>The lowest flight prices</p></Col>

        <Col>
        <img src={flight2} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle1'>Use Flyscore to compare flights,then book the right one for you</p>
        <p className='ptitle'>Delta Airlines</p>
        <p className='preveiw'>5,726 Reviews</p>
        <p className='pcoun'>See The Latest Reviews</p></Col>

        <Col>
        <img src={flight3} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle1'>Find the best flights deals from hundred of sites which just one search</p>
        <p className='ptitle'>United Airlines</p>
        <p className='preveiw'>23,1786 Reviews</p>
        <p className='pcoun'>FlyScorer</p></Col>

        <Col>
        <img src={flight4} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle1'>Find the best deals from hundred of then book the right one</p>
        <p className='ptitle'>Jetblue</p>
        <p className='preveiw'>13,786 Reviews</p>
        <p className='pcoun'>Biggest online travel agencies</p></Col>
          </Row>
        </Container>
        <br/>
        <br/>
      

      

    </>
  )
}

export default About









