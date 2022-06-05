import React from 'react'
import vac1 from "./Images/vac1.jpg"
import vac2 from "./Images/vac2.jpg"
import vac3 from "./Images/vac3.jpg"
import vac4 from "./Images/vac4.jpg"
import {Container,Row,Col} from "react-bootstrap"
import VacPackTrav from './VacPackTrav'



const VacTrav = () => {
  return (
    <>
    <div className='col-10 mx-auto'>
      <h1 className='h1cls'>Vacation rentals in Popular Destinations</h1>
    <Container className='mt-5 mb-10'>
      
        <Row>
            <Col>
            <img src={vac1} alt="Norway" className='img-fluid abt-pic'/>
            <p>Big Beer Region  Vacation Rental</p>

            </Col>
            <Col>
            <img src={vac2} alt="Norway" className='img-fluid abt-pic'/>
            <p>Gatlingburg Cabins</p>

            </Col>
            <Col>
            <img src={vac3} alt="Norway" className='img-fluid abt-pic'/>
            <p>Key West  Vacation Rental</p>

            </Col>
            <Col>
            <img src={vac4} alt="Norway" className='img-fluid abt-pic'/>
            <p>Maui Vacation Rental</p>

            </Col>
        </Row>
    </Container>
    </div>

    <VacPackTrav/>
    
        
    </>
  )
}

export default VacTrav