import { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import c51 from "./Images/c51.jpg"
import c52 from "./Images/c52.jpg"
import c53 from "./Images/c53.jpg"
import c1 from "./Images/c1.jpg"
import c2 from "./Images/c2.jpg"
import c3 from "./Images/c3.jpg"
import c4 from "./Images/c4.jpg"
import c5 from "./Images/c5.jpg"
import c6 from "./Images/c6.jpg"


function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-tabs col-sm-12">
      <div className="bloc-tabs col-sm-12">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Economy
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Standard
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Convertible
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <Container>
                <Row>
                     <Col>
                     <img src={c51} alt="Norway" className='img-fluid rental-img'/>


                    <h1>Vauxhall Corsa</h1>
                    <p>4 Seats</p>
                    <p>1 Large Bag</p>
                    <p>1 Small Bag</p>
                    </Col>
                     <Col>
                     <img src={c52} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Ford Focus</h1>
                    <p>4 Seats</p>
                    <p>1 Large Bag</p>
                    <p>2 Small Bags</p>
                    </Col>
                     <Col>
                     <img src={c53} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Hyundai  i30</h1>
                    <p>5 Seats</p>
                  
                    <p>2 Small Bags</p>
                    </Col>
                     <Col>
                     <img src={c1} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Fiad 500</h1>
                    <p>4 Seats</p>
                    
                    <p>2 Small Bags</p></Col>
                </Row>
            </Container>
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Container>
                <Row>
                     <Col>
                     <img src={c2} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Ford Mondeo</h1>
                    <p>4 Seats</p>
                    <p>1 Large Bag</p>
                    <p>1 Small Bag</p>
                    </Col>
                     <Col>
                     <img src={c3} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Skoda Octavia</h1>
                    <p>4 Seats</p>
                    <p>1 Large Bag</p>
                    <p>2 Small Bags</p>
                    </Col>
                     <Col>
                     <img src={c4} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Vauxhall Mokka</h1>
                    <p>5 Seats</p>
                  
                    <p>2 Small Bags</p>
                    </Col>
                     <Col>
                     <img src={c5} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Volkswagen Passat</h1>
                    <p>4 Seats</p>
                    
                    <p>2 Small Bags</p></Col>
                </Row>
            </Container>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Container>
                <Row>
                     <Col>
                     <img src={c6} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Mercedes-Benz-E-Class Carbio</h1>
                    <p>4 Seats</p>
                    <p>2 Large Bags</p>
                    
                    </Col>
                     <Col>
                     <img src={c51} alt="Norway" className='img-fluid rental-img'/>
                    <h1>Volkswagen Golf Cabrio</h1>
                    <p>4 Seats</p>
                    <p>1 Large Bag</p>
                    <p>2 Small Bags</p>
                    </Col>
                     <Col>
                     <img src={c3} alt="Norway" className='img-fluid rental-img'/>
                    <h1>BMW 2 series Cabrio</h1>
                    <p>4 Seats</p>
                  
                    <p>2 Small Bags</p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
      </div>
    </div>
  );
}

export default Tabs;