import React from 'react'

import cov9 from "./Images/cov9.jpg"
import ts1 from "./Images/ts1.jpg"
import ts2 from "./Images/ts2.jpg"
import ts3 from "./Images/ts3.jpg"
import ts4 from "./Images/ts4.jpg"
import th4 from "./Images/th4.jpg"
import th3 from "./Images/th3.jpg"
import th2 from "./Images/th2.jpg"
import th1 from "./Images/th1.jpg"
import {Container,Row,Col, Figure} from "react-bootstrap"
import {ImLocation} from "react-icons/im"
import {BsPencilSquare} from "react-icons/bs"
import {BiCommentDetail} from "react-icons/bi"
import { MdTravelExplore} from "react-icons/md"
import {ImAirplane} from 'react-icons/im'
import {BiWorld} from 'react-icons/bi'

const Home = () => {
  return (
    <>

<Figure>
        <Figure.Image
            width={1500}
            height={500}
            alt="171x180"
            src={cov9}
        />
         <Figure.Caption className='figcap-abt col-sm-12'>
           <div className='col-10  mx-auto h-div'>
           
        <h1 className='p-big1'>Helping You Find and Book the World's best boutique and luxuries Hotels</h1>
        <p className='p-big'>Enjoy Your Dream vacation</p>
        
      
        <p><ImLocation/> Discover a Better Way to Fly.</p>
          <p><BsPencilSquare/> Get advice from the community</p>
          <button className='fig-btn1'>Find Your Trip</button>
      
        
            <p><BiCommentDetail/> Personalised, well-crafted tour packages for best experiences</p>


           </div>
         
         </Figure.Caption>

         </Figure>
   
    <section>
      <div>
        <div className='h-div1 col-10 mx-auto'>
        <h1>Whether you're looking for a romantic getaway, a quality family trip, or a last minute escape, we've got the destinations for you.</h1>
        <h1>In today's world, almost everybody chooses to travel and tourism as their leisure. Traveling is a good way to learn about the World</h1>

        </div>
        
        <Container>
          <Row>
            <Col>
        <img src={th1} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Velassaru Maldives</p>
        <p className='preveiw'>23,786 Reviews</p>
        <p className='pcoun'>Velassaru Island</p></Col>

        <Col>
        <img src={th2} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Bandos Maldives</p>
        <p className='preveiw'>5,726 Reviews</p>
        <p className='pcoun'>Bandos Island</p></Col>

        <Col>
        <img src={th3} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Sheraton Maldives</p>
        <p className='preveiw'>23,1786 Reviews</p>
        <p className='pcoun'>Furanafushi Island</p></Col>

        <Col>
        <img src={th4} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Meeru Maldives</p>
        <p className='preveiw'>13,786 Reviews</p>
        <p className='pcoun'>Meerufenfushi</p></Col>
          </Row>
        </Container>
        
   
      </div>
    </section>

    <div className='h-div1 col-10 mx-auto'>
    <h1>Business hotels for Holyday Trip</h1>
      <h1>Related to hotels you viewed</h1>
    </div>

    <Container>
      
      

      
      
          <Row>
            <Col>
        <img src={ts1} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Kurumba Maldives</p>
        <p className='preveiw'>13,78 Reviews</p>
        <p className='pcoun'>Vihamanafushi</p></Col>

        <Col>
        <img src={ts2} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Maakaana Lodge</p>
        <p className='preveiw'>5,76 Reviews</p>
        <p className='pcoun'>Hulhumale</p></Col>

        <Col>
        <img src={ts3} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>Sala Botique Hotel</p>
        <p className='preveiw'>23,86 Reviews</p>
        <p className='pcoun'>Furanafushi</p></Col>

        <Col>
        <img src={ts4} alt="Norway" className='img-fluid abt-pic'/>
        <p className='ptitle'>The Somerest hotel</p>
        <p className='preveiw'>13,786 Reviews</p>
        <p className='pcoun'>Hulhumale</p></Col>
          </Row>
          
        </Container>



    

   
    
      
        <div className='col-10 col-sm-8 mx-auto hl-div'>
          <Container>
            <Row>
              <Col>
              <p className='h-ico'><MdTravelExplore size={80} ml-20/></p>
              <p>Can i travel to..?</p>
              <button className='figbtn'>Explore</button></Col>
            
            <Col>
            <p className='h-ico' ><ImAirplane size={80}/></p>
              <p>Track your Flight Status</p>
              <button className='figbtn'>Track Flight</button></Col>
              <Col>
              <p className='h-ico'><BiWorld size={80}/></p>
              <p>Track Visa Application Status</p>
              <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Extend Visa</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ST Ref. No"/>
              </div></form>
              
              </Col>
            </Row>

          </Container>
          </div>
       


   

    </>
  )
}

export default Home