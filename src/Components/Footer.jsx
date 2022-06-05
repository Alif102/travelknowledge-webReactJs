import React from 'react'
import car from './Images/car.jpg'
import hotel from './Images/hotel.jpg'
import fli from './Images/fli.jpg'

const Footer = () => {
  return (
    <>
    <footer className='footer-div'>
    <div className='row'>
        <div className='col-lg-12 mx-auto'>
            <div className='row'>
            <div className='col-lg-3'>
                <div>
                    

                    <h3 className='footer-h3'>Our Brands</h3></div>

                    <img src={car} alt="Norway" className='img-fluid abt-pic'/>
                    <img src={hotel} alt="Norway" className='img-fluid abt-pic'/>
                    <img src={fli} alt="Norway" className='img-fluid abt-pic'/>
            </div>
           
            <div className='col-lg-3'>
                <div className=''>
                    <h2 className='footer-h2'>About Us</h2>
                </div>
                <ul className='footer-ul'>
                   <p>Terms And Conditions</p>
                   <p>Privacy and Policy</p>
                   <p>Cockie Policy</p>
                   <p>Data Request</p>
                   <p>Accessibilty Statement</p>
                   
                </ul>

            </div>

            <div className='col-lg-3'>
                <div className=''>
                    <h2 className='footer-h2'>Menu</h2>
                </div>
                <ul className='footer-ul'>
                    <p>Home</p>
                    <p>Vacation</p>
                    <p>Flights</p>
                    <p>Service</p>
                    <p>Car-Rental</p>
                 
                    <p>Accessibilty</p>
                   
                </ul>

            </div>


            <div className='col-lg-3'>
                <div className='footer-ul'>
                    <h2 className='footer-h2'>24/7 Dedicated Customer Support</h2>
                </div>
                <div class="form-group">
                        <label for="exampleFormControlInput1 ">Email address :</label>
                        <input type="email" class="footer-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
                      </div>
                      <div class="form-check my-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                        I consent to my submitted data being collected and stored as detailed in TravelKnowledge's Privacy Policy.
                        </label>
                        
                      </div>
                      <div className='col-12 my-2'>
                      <button className='vbtn2'>Subscribe</button>
                      </div>

            </div>


            
            </div>
            

            
            
        </div>
    </div>
    
    </footer>
    <div className='footer-div2'>
        <p>© 2022 TravelKnowledge Limited. Company Number: 01797470501.  All Rights Reserved. Alif Ahmed</p>
    </div>
    
    
    </>
  )
}

export default Footer