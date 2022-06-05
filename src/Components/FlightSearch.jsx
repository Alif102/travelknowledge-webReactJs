import React from 'react'
import { Form,Row,Col,InputGroup,FormControl, Dropdown } from 'react-bootstrap'
import {GiCommercialAirplane} from "react-icons/gi"
import {FcHeadset,FcHome} from 'react-icons/fc'



const FlightSearch = () => {
  return (
    <div>
        <h2 className='fli-h2'>Find the best flight for the right price</h2>
        
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        
                        id="inlineFormInput"
                        placeholder="Road Trip One way"
                    />
                    </Col>
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                        Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FcHeadset/></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="To Where?" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FcHome/></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="Date" />
                    </InputGroup>
                    </Col>
                    <Col xs="auto">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Include Near by Airports"
                    />


                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        1 Person,Economy
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                            2 Person
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">3 person</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">4 Person</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Many More</Dropdown.Item>
                        </Dropdown.Menu>
                        
                        
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Business Class
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="danger">
                        <Dropdown.Item href="#/action-1" active>
                            Premium Economy
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">First Economy</Dropdown.Item> 
                        </Dropdown.Menu>
                        
                    </Dropdown>

                   
                    






                    </Col>
                    <Col xs="auto">
                    <button className='figbtn'><span><GiCommercialAirplane/></span>Find Flights</button>
                    </Col>
                </Row>
                </Form>

                

                
        </div>

        
    
  )
}

export default FlightSearch