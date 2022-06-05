import React from 'react'
import { Form,Row,Col,InputGroup,FormControl } from 'react-bootstrap'
import {MdFlight } from "react-icons/md"
import {FaCar} from 'react-icons/fa'
import {FcCustomerSupport} from 'react-icons/fc'
import {BiCurrentLocation} from 'react-icons/bi' 

const CarRentalSearch = () => {
  return (
    <>
    <h2>Search for the Best Rental Car Deals</h2>
    <h2 className='h2cls'>Find the best Car for the Travel & Tour</h2>
        
        <Form>
            <Row className="align-items-center">
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Pick-up Location"
                />
                </Col>
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Username
                </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Pick-up Date" />
                </InputGroup>
                <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Drop-Off Date" />
                </InputGroup>
                </Col>
                <Col xs="auto">
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Drop Car off at difference Location"
                />

              <div className='pcls'>
              <p><MdFlight/> Free Cancellations on Most Bookings</p>
               <p><BiCurrentLocation/> 60,000+ Locations</p>
                <p><FcCustomerSupport/> Customer Supports in 40+ languages</p>

              </div>
                
            

               
                






                </Col>
                <Col xs="auto">
                <button className='figbtn'>Find a Car <FaCar/></button>
                </Col>
            </Row>
            </Form>
    </>
  )
}

export default CarRentalSearch