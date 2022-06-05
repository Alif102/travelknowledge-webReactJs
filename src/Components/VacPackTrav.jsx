import React from 'react'
import t1 from "./Images/t1.jpg"
import t2 from "./Images/t2.jpg"
import t3 from "./Images/t3.jpg"
import t4 from "./Images/t4.jpg"
import t5 from "./Images/t5.jpg"
import road5 from "./Images/road5.jpg"
import t7 from "./Images/t7.jpg"
import smh1 from "./Images/smh1.jpg"
import {GrMapLocation} from 'react-icons/gr'


import vacpackage from "./Images/vacpackage.jpg"
import {Container, Form,Row,Col,InputGroup,FormControl,Dropdown } from 'react-bootstrap'
import {GiCommercialAirplane} from "react-icons/gi"
import {FcHeadset,FcHome} from 'react-icons/fc'

const VacPackTrav = () => {
  return (
    <div>

        <div className='col-10 mx-auto'>
        <img src={vacpackage} alt="Trulli" className='fignew'/>
        <h1 >Holyday Plan - Find Your Next Vacation.</h1>
        <div className='vacpackdiv'>
        <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        
                        id="inlineFormInput"
                        placeholder="Departure "
                    />
                    </Col>
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                        Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FcHeadset/></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="From" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FcHome/></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="To" />
                    </InputGroup>
                    </Col>
                    <Col xs="auto">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Return"
                    />

                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"> Guests
                        
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                            1 Room 
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2 Adults</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">0 Children</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Many More</Dropdown.Item>
                        </Dropdown.Menu>
                        
                        
                    </Dropdown>


                    
                   
                    






                    </Col>
                    <Col xs="auto">
                    <button className='figbtn'><span><GiCommercialAirplane/></span>Find Vacation Packages</button>
                    </Col>
                </Row>
                </Form>
        </div>

        </div>

        <div className='col-10 mx-auto'>
            <h1>Vacation Packages in popular destinations</h1>
            <div>
            <Container className='mt-5 mb-5'>
                    <Row>
                    
                        <Col>
                        <img src={t7} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#1</button>
                        <p>Cancun,Mixico</p>

                        </Col>
                       
                        <Col>
                        <img src={t3} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#2</button>
                        <p>New York City</p>

                        </Col>


                        <Col>
                        <img src={t4} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#3</button>
                        <p>Carebbean</p>

                        </Col>
                       
                    </Row>
                </Container>


                <Container>
                            <Row>
                            
                            <Col>
                        <img src={t5} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#4</button>
                        <p>Bali,Indonesia</p>

                        </Col>

                        <Col>
                        <img src={t1} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#5</button>
                        <p>Puerto Rico</p>

                        </Col>
                        <Col>
                        <img src={smh1} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#6</button>
                        <p>Maldives</p>

                        </Col>
                        
                       

                            </Row>
                        </Container>
                        <Container>
                            <Row>
                            <Col>
                        <img src={t2} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#7</button>
                        <p>Florida</p>

                        </Col>
                        <Col>
                        <img src={road5} alt="Norway" className='img-fluid abt-pic'/>
                        <button className='vbtn1'>#8</button>
                        <p>Las Vegas,Nevada</p>

                        </Col>
                        <Col>
                        <button className='vbtn3'>Many More <GrMapLocation size={68} /></button></Col>

                            </Row>

                        </Container>
            </div>
        </div>
       



        
    </div>
  )
}

export default VacPackTrav