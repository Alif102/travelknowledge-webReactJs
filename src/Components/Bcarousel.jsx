import React from 'react'
import hdes1 from "./Images/hdes1.jpg"
import hdes2 from "./Images/hdes2.jpg"
import hdes3 from "./Images/hdes3.jpg"
import hren1 from "./Images/hren1.jpg"
import hren2 from "./Images/hren2.jpg"
import hren3 from "./Images/hren3.jpg"
import {Carousel} from "react-bootstrap"

const Bcarousel = () => {
  return (
    <>
    <div className='row'>
      <div className='col-lg-12 mx-auto'>
        <div className='row'>
          <div className='col-lg-6 mx-auto'>
              <h2>Top destinations for your next vacation</h2>
          <Carousel fade>
              <Carousel.Item>
                  <img
                  className="caro-image-home"
                  src={hdes1}
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  <h3>Yellowstone National Park, WY</h3>
                  
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="caro-image-home"
                  src={hdes2}
                  alt="Second slide"
                  />

                  <Carousel.Caption>
                  <h3>Punta Cana, Dominican Republic</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="caro-image-home"
                  src={hdes3}
                  alt="Third slide"
                  />

                  <Carousel.Caption>
                  <h3>Orlando,FL</h3>
                  
                  </Carousel.Caption>
              </Carousel.Item>
              </Carousel>

          </div>
          <div className='col-lg-6 mx-auto'>
              <h2>Hotel Rental Near For you</h2>
              <p>We think you'd enjoy these homes for a quick trip out of town.</p>
              <Carousel fade>
              <Carousel.Item>
                  <img
                  className="caro-image-home"
                  src={hren1}
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  <h3>Rentals In Sajek</h3>
                  <p>10 Rentals</p>
                  
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="caro-image-home"
                  src={hren2}
                  alt="Second slide"
                  />

                  <Carousel.Caption>
                  <h3>Rentals in Sylhet City</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="caro-image-home"
                  src={hren3}
                  alt="Third slide"
                  />

                  <Carousel.Caption>
                  <h3>Rentals in Kolkata</h3>
                  <p>110 Rentals</p>
                  </Carousel.Caption>
              </Carousel.Item>
              </Carousel>

          </div>
        </div>
      
        
      </div>
    </div>

    
        
    </>
  )
}

export default Bcarousel