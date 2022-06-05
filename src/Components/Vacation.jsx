import React from 'react'
import vacico1 from "./Images/vacico1.jpg"
import vacico2 from "./Images/vacico2.jpg"

import vacrental from "./Images/vacrental.jpg"
import {Figure} from "react-bootstrap"
import {Container, Form,Row,Col,InputGroup,FormControl } from 'react-bootstrap'
import {GiCommercialAirplane} from "react-icons/gi"
import {FcHeadset,FcHome} from 'react-icons/fc'
import VacTrav from './VacTrav'


const Vacation = () => {
  return (
    <>
    <Figure>
        <Figure.Image
            width={1500}
            height={500}
            alt="171x180"
            src={vacrental}
        />
        <Figure.Caption className=' figcap-abt col-sm-12'>
            <h3 className='h2cls'>Book a vacation rental in more than 200 countries</h3>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        
                        id="inlineFormInput"
                        placeholder="Where Do you Want to Go? "
                    />
                    </Col>
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                        Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FcHeadset/></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="Check In -" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FcHome/></InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" placeholder="Check Out" />
                    </InputGroup>
                    </Col>
                    <Col xs="auto">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Include Near by Airports"
                    />


                    
                   
                    






                    </Col>
                    <Col xs="auto">
                    <button className='figbtn'><span><GiCommercialAirplane/></span>Find Vacation Rentals</button>
                    </Col>
                </Row>
                </Form>
           
        </Figure.Caption>
    </Figure>
    <div className='col-10 mx-auto'>
        <Container>
        <div className=' mt-5 mb-5 col-sm-12'>
            <Row>
                
                <Col> <p><span ><img src={vacico1} alt="Norway" className='img-fluid vimg'/></span> <br/>Enjoy More Space and Privacy in a sanitialized home environment with just your family and Friends</p> </Col>
                <Col><p><span ><img src={vacico2} alt="Norway" className='img-fluid vimg'/></span> <br/>Read reviews and from travellers who have stayed there,So you can feel confident before you book</p></Col>
                <Col><p><span ><img src={vacico1} alt="Norway" className='img-fluid vimg'/></span> <br/>Flexible cancellation policies in case plans change</p></Col>
                
            </Row>
            </div>
        </Container>
        <div className='col-10 mx-auto vac-home'>
            <img src={vacico1} alt="Norway" className='img-fluid vimg1'/>
            <p>List your home or room with the world's largest travel community</p>
            <p>Earn money by renting out your vacation rental, home or spare room. No upfront fees and no contract.</p>
            <button className='vbtn'>List Your Property</button>
        </div>

    </div>
    <VacTrav/>
    <br/>
    


    




    </>
  )
}

export default Vacation