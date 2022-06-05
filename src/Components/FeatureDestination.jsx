
import React from 'react'
import { Card ,Container ,Row ,Col, Button} from 'react-bootstrap'
import d2 from './Images/d2.jpg'
import d1 from './Images/d1.jpg'
import d3 from './Images/d3.jpg'
import d4 from './Images/d4.jpg'
import d5 from './Images/d5.jpg'
import d6 from './Images/d6.jpg'



const FeatureDestination = () => {
  return (
    <div>
      <h1 className='h-div1 col-10 mx-auto'>Featured Destinations From Dhaka</h1>
      
      <Container>
        <Row>
          <Col>
        <Card style={{width:'35rem'}}>
        <Card.Img variant="top" src={d1} alt="Norway" className='img-fluid abt-pic' />
          
        <Card.Body>
        
        <Card.Text>Dhaka, Barishal, Chattogram,Sylhet</Card.Text>
        <Button variant='primary'>Domestic</Button></Card.Body></Card></Col>
        
          <Col>
          <Card style={{width:'35rem'}}>
            <Card.Img variant="top" src={d4} alt="Norway" className='img-fluid abt-pic' />
          
          <Card.Body>
          
          <Card.Text>India , Nepal , Myanmar , Bhutan</Card.Text>
          <Button variant='primary'>Subcontinent</Button></Card.Body></Card>
          
          </Col>
          <Col>
        <Card style={{width:'35rem'}}>
        <Card.Img variant="top" src={d3} alt="Norway" className='img-fluid abt-pic' />
          
        <Card.Body>
        
        <Card.Text>Kuwait, Oman Qatar, Saudi Arabia, United Arab Emirates</Card.Text>
        <Button variant='primary'>Middle East</Button></Card.Body></Card>
        </Col>
          </Row>
          </Container>
          <br/>

          <Container>
        <Row>
          
        
          <Col>
          <Card style={{width:'35rem'}}>
          <Card.Img variant="top" src={d2} alt="Norway" className='img-fluid abt-pic' />
          
          <Card.Body>
          
          <Card.Text>China,Malaysia, Singapore, Thailand</Card.Text>
          <Button variant='primary'>Asia</Button></Card.Body></Card>
          
          </Col>
          <Col>
        <Card style={{width:'35rem'}}>
        <Card.Img variant="top" src={d5} alt="Norway" className='img-fluid abt-pic' />
          
        <Card.Body>
      
        <Card.Text>England,Germany,France,Italy, Sweden , Finland</Card.Text>
        <Button variant='primary'>Europe</Button></Card.Body></Card></Col>
        <Col>
          <Card style={{width:'35rem'}}>
          <Card.Img variant="top" src={d6} alt="Norway" className='img-fluid abt-pic' />
          
          <Card.Body>
          
          <Card.Text>Canada, Mexico, Saint Lucia , Dominican Republic , United States</Card.Text>
          <Button variant='primary'>North America</Button></Card.Body></Card>
          
          </Col>
          </Row>
          </Container>
          <br/>

         
         
    
    
    </div>
  )
}

export default FeatureDestination