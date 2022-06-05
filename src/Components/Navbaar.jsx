
/*
import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {SiYourtraveldottv} from "react-icons/si"

const Navbaar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className='col-sm-12'>
        <Container>
          <Navbar.Brand to="/">TravelKnowledge <SiYourtraveldottv size={55}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='nav-collapse' id="basic-navbar-nav">
            <Nav className="navclass">
              <NavLink 
                className="nav-item" to="/home">Home</NavLink>
              <NavLink 
                className="nav-item" to="/about">Flights</NavLink>
                <NavLink  className="nav-item" to="/carRent">Car Rental</NavLink>
                <NavLink  className="nav-item" to="/vacation">Vacation</NavLink>
         
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  </div>
  )
}

export default Navbaar */

import React from 'react'
import { NavLink } from 'react-router-dom'
import {SiYourtraveldottv} from "react-icons/si"

const Navbaar = () => {

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  return (
    <div>
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
     <nav className="navbar" onClick={e => e.stopPropagation()}>
       <div className="nav-container">
         <NavLink exact to="/" className="nav-logo">
         TravelKnowledge <SiYourtraveldottv size={55}/>
           
         </NavLink>
         <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item">
             <NavLink
               exact
               to="/travelknowledge-web"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Home
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/flights"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Flights
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/car-rental"
               activeClassName="active"
               className="nav-links"
               onClick={click ? handleClick : null}
             >
               Car Rental
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink
               exact
               to="/vacation"
               activeClassName="active"
               className="nav-links"
              onClick={click ? handleClick : null}
             >
               Vacation
             </NavLink>
           </li>
         </ul>
         <div className="nav-icon" onClick={handleClick}>
           <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
         </div>
       </div>
     </nav>
   </ div>
    
      
    
  
  )
}

export default Navbaar

